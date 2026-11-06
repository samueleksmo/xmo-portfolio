// Citation count for publications on the CV (Vercel Function).
// Asks Semantic Scholar, OpenAlex and Crossref in parallel and returns the highest count.
// The response is cached on Vercel's CDN for a day, so the free APIs get about one request a day.
// Only DOIs listed here can be looked up, so the endpoint can't be used as an open proxy.

const ALLOWED_DOIS = new Set(['10.1145/3379177.3388905']);
const HEADERS = { Accept: 'application/json', 'User-Agent': 'xmo.se-citations/1.0 (+https://xmo.se)' };

async function lookup(url, pick) {
	try {
		const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(6000) });
		if (!res.ok) return null;
		return pick(await res.json());
	} catch {
		return null;
	}
}

export async function GET(request) {
	const doi = new URL(request.url).searchParams.get('doi') || '';
	if (!ALLOWED_DOIS.has(doi)) return Response.json({ error: 'unknown doi' }, { status: 400 });

	const sources = (
		await Promise.all([
			lookup(`https://api.semanticscholar.org/graph/v1/paper/DOI:${doi}?fields=citationCount,url`, (d) => ({
				name: 'Semantic Scholar',
				count: d.citationCount,
				url: d.url
			})),
			lookup(`https://api.openalex.org/works/doi:${doi}?select=id,cited_by_count`, (d) => ({
				name: 'OpenAlex',
				count: d.cited_by_count,
				url: d.id
			})),
			lookup(`https://api.crossref.org/works/${doi}`, (d) => ({
				name: 'Crossref',
				count: d.message?.['is-referenced-by-count'],
				url: `https://doi.org/${doi}`
			}))
		])
	).filter((s) => s && Number.isInteger(s.count) && s.count >= 0);

	if (!sources.length) {
		// all sources failed – try again in 10 minutes rather than caching the failure for a day
		return Response.json({ error: 'no source available' }, { status: 502, headers: { 'Cache-Control': 'public, s-maxage=600' } });
	}

	const best = sources.reduce((a, b) => (b.count > a.count ? b : a));
	return Response.json(
		{ doi, citations: best.count, source: best.name, url: best.url, sources, checked: new Date().toISOString() },
		{ headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' } }
	);
}
