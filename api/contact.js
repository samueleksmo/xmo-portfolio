// Contact form endpoint (Vercel Function): emails messages from the site to you via Resend.
// Set these in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY      – API key from https://resend.com (required)
//   CONTACT_TO_EMAIL    – inbox that receives the messages (required)
//   CONTACT_FROM_EMAIL  – sender on a domain verified in Resend, e.g. "xmo.se <kontakt@xmo.se>" (optional).
//                         Without it, Resend's test sender is used, which can only deliver to the
//                         email address your Resend account is registered with.

const MIN_FILL_MS = 3000; // faster than this is almost certainly a bot

const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const esc = (s) =>
	s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function POST(request) {
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ ok: false }, { status: 400 });
	}

	// Spam traps: pretend success so bots don't retry
	if (str(body.website, 200) || Number(body.elapsed) < MIN_FILL_MS) return Response.json({ ok: true });

	const name = str(body.name, 100);
	const email = str(body.email, 200);
	const message = str(body.message, 5000);
	const locale = body.locale === 'sv' ? 'sv' : 'en';

	if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return Response.json({ ok: false }, { status: 400 });
	}

	const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
	if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
		console.error('Contact form not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL');
		return Response.json({ ok: false }, { status: 500 });
	}

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: CONTACT_FROM_EMAIL || 'xmo.se <onboarding@resend.dev>',
			to: CONTACT_TO_EMAIL,
			reply_to: email,
			subject: `Message from ${name} via xmo.se`,
			text: `Name: ${name}\nEmail: ${email}\nLanguage: ${locale.toUpperCase()}\n\n${message}\n\nReply to this email to answer ${name}.`,
			html:
				`<p><strong>Name:</strong> ${esc(name)}<br><strong>Email:</strong> ${esc(email)}<br>` +
				`<strong>Language:</strong> ${locale.toUpperCase()}</p>` +
				`<p>${esc(message).replace(/\n/g, '<br>')}</p>` +
				`<p style="color:#888">Reply to this email to answer ${esc(name)}.</p>`
		})
	});

	if (!res.ok) {
		console.error(`Resend ${res.status}: ${await res.text()}`);
		return Response.json({ ok: false }, { status: 502 });
	}
	return Response.json({ ok: true });
}
