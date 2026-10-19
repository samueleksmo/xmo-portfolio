<script>
	import { onMount } from 'svelte';
	import { _ } from '../../services/i18n';
	import { fly } from 'svelte/transition';

	// Newest first.
	const projects = [
		{
			id: 'ekudden',
			image: 'ekudden',
			alt: 'ekudden_alt',
			title: 'Ekudden Bastu',
			subtitle: 'ekudden_subtitle',
			role: 'ekudden_role',
			text: 'ekudden_text',
			link: 'https://kvadosauna.se/'
		},
		{
			id: 'wedding',
			image: 'hildasamuel',
			alt: 'wedding_alt',
			title: 'Hilda & Samuel',
			subtitle: 'wedding_subtitle',
			role: 'wedding_role',
			text: 'wedding_text',
			link: 'https://hildasamuel.com/'
		},
		{
			id: 'berkeley',
			image: 'sanfran',
			alt: 'berkeley_alt',
			title: 'Berkeley Chalmers',
			subtitle: 'berkeley_subtitle',
			role: 'berkeley_role',
			text: 'p3',
			link: 'https://berkeleychalmers.se/'
		},
		{
			id: 'volvo',
			image: 'truck',
			alt: 'volvo_alt',
			title: 'Volvo Trucks',
			subtitle: 'volvo_subtitle',
			role: 'volvo_role',
			text: 'p4',
			link: 'https://www.volvotrucks.com/en-en/news-stories/press-releases/2018/sep/pressrelease-180906.html'
		},
		{
			id: 'capstone',
			image: 'git',
			alt: 'capstone_alt',
			title: 'IBM Capstone',
			subtitle: 'capstone_subtitle',
			role: 'capstone_role',
			text: 'p5',
			link: 'https://github.com/aavail/ai-workflow-capstone'
		}
	];

	let open = {};
	const toggle = (id) => (open = { ...open, [id]: !open[id] });

	// Horizontal scrolling (desktop only – on small screens the cards stack vertically).
	let scroller;
	let atStart = true;
	let atEnd = false;

	function updateEnds() {
		if (!scroller) return;
		atStart = scroller.scrollLeft <= 4;
		atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4;
	}

	function scrollCards(direction) {
		const card = scroller.querySelector('.card');
		const step = card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(scroller).columnGap || 0) : 300;
		scroller.scrollBy({ left: direction * step, behavior: 'smooth' });
	}

	onMount(updateEnds);
</script>

<svelte:window on:resize={updateEnds} />

<section id="portfolio">
	<h1>{$_('portfolio_heading')}</h1>
	<div class="carousel">
		<button
			type="button"
			class="arrow prev"
			aria-label={$_('previous_projects')}
			disabled={atStart}
			on:click={() => scrollCards(-1)}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4 7 12l8 8" /></svg>
		</button>

		<div class="cardwrapper" bind:this={scroller} on:scroll={updateEnds}>
			{#each projects as project (project.id)}
				<article class="card">
					<button
						type="button"
						class="cardtoggle"
						aria-expanded={!!open[project.id]}
						aria-controls="{project.id}-details"
						on:click={() => toggle(project.id)}
					>
						<picture>
							<source srcset="/images/{project.image}.webp" type="image/webp" />
							<img
								src="/images/{project.image}.jpg"
								alt={$_(project.alt)}
								width="300"
								height="450"
								loading="lazy"
							/>
						</picture>
						<span class="textwrapper">
							<span class="title">{project.title} <br /> // {$_(project.subtitle)}</span>
							<span class="role">{$_(project.role)}</span>
						</span>
					</button>

					<div id="{project.id}-details" class="textwrapper">
						{#if open[project.id]}
							<div transition:fly={{ y: -15, delay: 50 }}>
								<p>{$_(project.text)}</p>
								<a href={project.link}>{$_('check_it_out')}</a>
							</div>
						{/if}
					</div>
				</article>
			{/each}
		</div>

		<button
			type="button"
			class="arrow next"
			aria-label={$_('next_projects')}
			disabled={atEnd}
			on:click={() => scrollCards(1)}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
		</button>
	</div>
</section>

<style>
	section {
		background-color: #001219;
		padding-top: 2em;
		padding-bottom: 6em;
		text-align: center;
		flex-direction: column;
	}

	.card {
		height: auto;
		max-width: 300px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		margin-top: 4em;
	}
	.cardtoggle {
		all: unset;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
	.cardtoggle:focus-visible {
		outline: 2px solid #EAAC8B;
		outline-offset: 4px;
	}
	.cardtoggle img {
		display: block;
		width: 100%;
		height: auto;
	}
	.textwrapper {
		display: block;
		text-align: left;
	}
	h1 {
		font-size: 3.5em;
		font-family: 'Yantramanav-Bold', sans-serif;
		text-align: center;
		margin-block-start: 0em;
		margin-block-end: 0em;
		font-weight: bold;
		color: #FCFBFB;
		letter-spacing: 5px;
		padding-top: 1em;
	}
	.title {
		display: block;
		font-family: 'Oranienbaum', serif;
		text-align: left;
		margin-block-start: 0.5em;
		margin-block-end: 0em;
		font-weight: lighter;
		font-size: 28px;
		color: #FCFBFB;
	}
	.role {
		display: block;
		font-family: 'Oranienbaum', serif;
		text-align: left;
		margin-block-start: 0.5em;
		margin-block-end: 0em;
		font-weight: lighter;
		font-size: 18px;
		color: #B56576;
		letter-spacing: 5px;
	}
	p {
		font-family: 'Yantramanav-Light', sans-serif;
		color: #FCFBFB;
		letter-spacing: 1.2px;
	}
	a {
		margin-top: 2em;
		font-family: 'Yantramanav-Bold', sans-serif;
		color: #EAAC8B;
		letter-spacing: 4px;
	}

	/* Arrows only make sense when the row scrolls (desktop). */
	.arrow {
		display: none;
	}

	@media (min-width: 1200px) {
		section {
			padding-top: 2em;
			padding-bottom: 7em;
		}
		.carousel {
			position: relative;
			width: 1200px;
			margin: 0 auto;
			display: flex;
			align-items: flex-start;
		}
		.cardwrapper {
			flex: 1;
			min-width: 0;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			column-gap: 40px;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			scroll-padding-inline: 30px;
			padding: 0 30px 2em;
			scrollbar-width: thin;
			scrollbar-color: #B56576 transparent;
		}
		.card {
			flex: 0 0 300px;
			margin: 4em 0 0;
			scroll-snap-align: start;
		}
		.arrow {
			all: unset;
			display: grid;
			place-items: center;
			flex: 0 0 48px;
			height: 48px;
			/* Vertically centred on the card images. */
			margin-top: calc(4em + 201px);
			border-radius: 50%;
			cursor: pointer;
			color: #EAAC8B;
			transition: opacity 0.2s, background-color 0.2s;
		}
		.arrow:hover:not(:disabled) {
			background-color: rgba(234, 172, 139, 0.12);
		}
		.arrow:focus-visible {
			outline: 2px solid #EAAC8B;
			outline-offset: 2px;
		}
		.arrow:disabled {
			opacity: 0.2;
			cursor: default;
		}
		.arrow svg {
			width: 28px;
			height: 28px;
			fill: none;
			stroke: currentColor;
			stroke-width: 2;
			stroke-linecap: round;
			stroke-linejoin: round;
		}
	}
</style>
