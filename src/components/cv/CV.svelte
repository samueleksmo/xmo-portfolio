<script>
	import { locale } from '../../services/i18n';
	import { cv } from '../../services/cv';

	$: c = cv[$locale] || cv.en;
	$: years = (e) => e.when || (e.to === e.from ? `${e.from}` : `${e.from} – ${e.to ?? c.labels.now}`);
</script>

<section id="cv">
	<div class="wrapper">
		<h2>{c.heading}</h2>
		<div class="profile">
			{#each c.profile as para}<p>{para}</p>{/each}
		</div>

		<div class="grid">
			<div class="main">
				<h3 class="label">{c.labels.experience}</h3>
				<ol class="timeline">
					{#each c.experience as e (e.id)}
						<li class="entry" class:current={e.to === null}>
							<div class="when">{years(e)}</div>
							<div class="body">
								<h4>{e.title}</h4>
								<p class="org">{e.org}</p>
								{#if e.phases}
									<ul class="phases">
										{#each e.phases as phase}<li>{phase}</li>{/each}
									</ul>
								{/if}
								{#if e.summary}<p>{e.summary}</p>{/if}

								{#if e.highlights}
									<details>
										<summary><span class="more">{c.labels.more}</span><span class="less">{c.labels.less}</span></summary>
										<ul class="highlights">
											{#each e.highlights as h}<li>{h}</li>{/each}
										</ul>
									</details>
								{/if}

								{#if e.projects}
									<p class="sublabel">{c.labels.projects}</p>
									<ol class="projects">
										{#each e.projects as pr}
											<li>
												<details>
													<summary>
														<span class="pname">{pr.name}</span>
														<span class="pmeta">{pr.role} · {pr.when}</span>
													</summary>
													<p>{pr.text}</p>
													{#if pr.highlights}
														<ul class="highlights">
															{#each pr.highlights as h}<li>{h}</li>{/each}
														</ul>
													{/if}
												</details>
											</li>
										{/each}
									</ol>
								{/if}
							</div>
						</li>
					{/each}
				</ol>

				<h3 class="label">{c.labels.education}</h3>
				<ol class="timeline">
					{#each c.education as e}
						<li class="entry">
							<div class="when">{years(e)}</div>
							<div class="body">
								<h4>{e.title}</h4>
								<p class="org">{e.org}</p>
								{#if e.text}<p>{e.text}</p>{/if}
							</div>
						</li>
					{/each}
				</ol>
			</div>

			<aside>
				<h3 class="label">{c.labels.skills}</h3>
				{#each c.skills as s}
					<p class="group">{s.group}</p>
					<ul class="chips">
						{#each s.items as item}<li>{item}</li>{/each}
					</ul>
				{/each}
				<p class="group">{c.labels.spoken}</p>
				<ul class="chips">
					{#each c.spoken as l}<li>{l}</li>{/each}
				</ul>

				<h3 class="label">{c.labels.certifications}</h3>
				<ul class="certs">
					{#each c.certifications as cert}<li>{cert}</li>{/each}
				</ul>

				<h3 class="label">{c.labels.publications}</h3>
				<ul class="pubs">
					{#each c.publications as pub}
						<li>
							<a href={pub.url}>{pub.title} <span aria-hidden="true">↗</span></a>
							<span class="rwhen">{pub.meta}</span>
						</li>
					{/each}
				</ul>

				<h3 class="label">{c.labels.commitments}</h3>
				<ul class="roles">
					{#each c.commitments as r}
						<li>
							<span class="role">{r.role}</span><span class="rorg">{r.org}</span><span class="rwhen">{r.when}</span>
							{#if r.note}<span class="rnote">{r.note}</span>{/if}
						</li>
					{/each}
				</ul>

				<h3 class="label">{c.labels.other}</h3>
				<ul class="roles">
					{#each c.other as r}
						<li>
							<span class="role">{r.role}</span><span class="rorg">{r.org}</span><span class="rwhen">{r.when}</span>
							{#if r.note}<span class="rnote">{r.note}</span>{/if}
						</li>
					{/each}
				</ul>

				<p class="refs">
					{c.labels.references}<br />
					<a href="https://www.linkedin.com/in/samueleksmo/">{c.labels.linkedin} <span aria-hidden="true">↗</span></a>
				</p>
			</aside>
		</div>
	</div>
</section>

<style>
	section {
		--line: #d8cec7;
		--accent: #e56b6f;
		--muted: #b56576;
		background-color: #f3f0ec;
		color: #333;
		padding: 4em 0 4.5em;
	}
	.wrapper {
		width: 85%;
		margin: 0 auto;
	}
	h2 {
		font-family: 'Oranienbaum', serif;
		font-weight: normal;
		font-size: 36px;
		letter-spacing: 2px;
		margin: 0;
	}
	p,
	li {
		font-family: 'Yantramanav-Light', sans-serif;
		letter-spacing: 0.6px;
		line-height: 1.45;
	}
	.profile p {
		font-size: 19px;
		letter-spacing: 1px;
		margin: 0.7em 0 0;
		max-width: 760px;
	}
	.grid {
		margin-top: 2.5em;
		display: grid;
		gap: 2.5em;
	}
	.label {
		font-family: 'Yantramanav-Light', sans-serif;
		font-weight: normal;
		font-size: 14px;
		letter-spacing: 2px;
		text-transform: uppercase;
		margin: 0 0 1.2em;
	}
	.main .label:not(:first-child) {
		margin-top: 2em;
	}

	/* ---- timeline ---- */
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0 0 0 30px;
		position: relative;
	}
	.timeline::before {
		content: '';
		position: absolute;
		left: 6px;
		top: 8px;
		bottom: 8px;
		width: 2px;
		background: var(--line);
	}
	.entry {
		position: relative;
		margin-bottom: 2em;
	}
	.entry:last-child {
		margin-bottom: 0;
	}
	.entry::before {
		content: '';
		position: absolute;
		left: -30px;
		top: 4px;
		width: 10px;
		height: 10px;
		border: 2px solid var(--accent);
		border-radius: 50%;
		background: #f3f0ec;
	}
	.entry.current::before {
		background: var(--accent);
		box-shadow: 0 0 0 4px rgba(229, 107, 111, 0.18);
	}
	.when {
		font-family: 'Oswald', sans-serif;
		font-weight: bold;
		font-size: 15px;
		letter-spacing: 1.5px;
		color: var(--accent);
		margin-bottom: 0.3em;
	}
	h4 {
		font-family: 'Oranienbaum', serif;
		font-weight: normal;
		font-size: 24px;
		margin: 0;
		line-height: 1.2;
	}
	.org {
		font-family: 'Oranienbaum', serif;
		font-size: 16px;
		letter-spacing: 3px;
		color: var(--muted);
		margin: 0.35em 0 0.6em;
	}
	.body p {
		font-size: 17px;
		margin: 0.5em 0;
	}
	.phases {
		list-style: none;
		padding: 0;
		margin: 0 0 0.6em;
	}
	.phases li {
		font-size: 15px;
		color: #666;
	}
	.highlights {
		margin: 0.6em 0 0.2em;
		padding-left: 1.2em;
	}
	.highlights li {
		font-size: 16px;
		margin-bottom: 0.4em;
	}
	.highlights li::marker {
		color: var(--accent);
	}

	/* expandable parts */
	summary {
		cursor: pointer;
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 3px;
	}
	.body > details > summary {
		display: inline-flex;
		align-items: center;
		gap: 0.4em;
		font-family: 'Yantramanav-Bold', sans-serif;
		font-size: 14px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--accent);
	}
	summary::after {
		content: '';
		width: 6px;
		height: 6px;
		border-right: 2px solid currentColor;
		border-bottom: 2px solid currentColor;
		transform: rotate(45deg) translateY(-2px);
		transition: transform 0.2s;
		flex: none;
	}
	details[open] > summary::after {
		transform: rotate(-135deg) translateY(-2px);
	}
	.less,
	details[open] > summary .more {
		display: none;
	}
	details[open] > summary .less {
		display: inline;
	}

	/* client projects: a smaller nested timeline */
	.sublabel {
		font-size: 13px !important;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #777;
		margin-top: 1em !important;
	}
	.projects {
		list-style: none;
		margin: 0.3em 0 0;
		padding: 0;
		border-left: 2px dotted var(--line);
	}
	.projects > li {
		position: relative;
		padding: 0.55em 0 0.55em 1.1em;
	}
	.projects > li::before {
		content: '';
		position: absolute;
		left: -5px;
		top: 1.05em;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--muted);
	}
	.projects summary {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		column-gap: 0.7em;
		row-gap: 0.1em;
	}
	.projects summary::after {
		align-self: center;
		color: var(--accent);
	}
	.pname {
		font-family: 'Oranienbaum', serif;
		font-size: 20px;
	}
	.pmeta {
		font-family: 'Yantramanav-Light', sans-serif;
		font-size: 14px;
		letter-spacing: 1px;
		color: #666;
	}
	.projects details > p {
		margin-top: 0.4em;
	}

	/* ---- sidebar ---- */
	aside .label:not(:first-child) {
		margin-top: 2.2em;
	}
	.group {
		font-size: 14px;
		color: #666;
		margin: 0.9em 0 0.4em;
	}
	.chips {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4em;
	}
	.chips li {
		font-size: 14px;
		line-height: 1;
		padding: 0.45em 0.7em;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: #fbfaf8;
	}
	.roles {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.roles li {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
	}
	.role {
		font-family: 'Oranienbaum', serif;
		font-size: 14px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--muted);
	}
	.rorg {
		font-size: 17px;
	}
	.rwhen {
		font-size: 14px;
		color: #777;
	}
	.rnote {
		font-size: 14px;
		color: #555;
		margin-top: 0.2em;
	}
	.certs {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.certs li {
		font-size: 15px;
		line-height: 1.35;
		padding-left: 1em;
		position: relative;
		margin-bottom: 0.55em;
	}
	.certs li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.5em;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
	}
	.pubs {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.pubs li {
		display: flex;
		flex-direction: column;
		gap: 0.3em;
	}
	.pubs a {
		font-family: 'Oranienbaum', serif;
		font-size: 17px;
		line-height: 1.3;
		color: #333;
		text-decoration: underline;
		text-decoration-color: var(--line);
		text-underline-offset: 3px;
	}
	.pubs a:hover {
		text-decoration-color: var(--accent);
	}
	.refs {
		margin-top: 2.2em;
		font-size: 15px;
		color: #666;
	}
	.refs a {
		color: #333;
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	@media (min-width: 900px) {
		.grid {
			grid-template-columns: minmax(0, 1fr) 280px;
			gap: 4em;
		}
		/* years in their own column, left of the line */
		.timeline {
			padding-left: 0;
		}
		.timeline::before {
			left: 151px;
		}
		.entry {
			display: grid;
			grid-template-columns: 130px minmax(0, 1fr);
			column-gap: 44px;
		}
		.entry::before {
			left: 145px;
		}
		.when {
			text-align: right;
			margin: 0;
			padding-top: 1px;
		}
	}
	@media (min-width: 1366px) {
		.wrapper {
			width: 1100px;
		}
	}
</style>
