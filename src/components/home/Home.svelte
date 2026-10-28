<script>
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';

	// Desktop only, and not for visitors who prefer reduced motion: a small white boat
	// sails down the fjord and passes behind me. The scene is an SVG laid over the
	// background photo with the same "cover" crop (xMidYMid slice ↔ background-size: cover
	// + centered), in the photo's own 1920×1080 coordinates. A cut-out of me on top of
	// the boat makes it disappear behind my back.
	let showScene = false;

	onMount(() => {
		const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
		const update = () => (showScene = mq.matches);
		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	});
</script>


<div id="homepage" class="home">
	{#if showScene}
		<svg class="scene" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
			<defs>
				<linearGradient id="hero-boat-wake" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stop-color="#fff" stop-opacity="0.75" />
					<stop offset="1" stop-color="#fff" stop-opacity="0" />
				</linearGradient>
				<linearGradient id="hero-boat-hull" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0" stop-color="#fafaf8" />
					<stop offset="0.45" stop-color="#e3e3de" />
					<stop offset="1" stop-color="#b5b5af" />
				</linearGradient>
				<linearGradient id="hero-boat-deck" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0" stop-color="#e2e1db" />
					<stop offset="1" stop-color="#fbfbf8" />
				</linearGradient>
				<linearGradient id="hero-boat-side" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0" stop-color="#fdfdfb" />
					<stop offset="1" stop-color="#d6d6d0" />
				</linearGradient>
				<linearGradient id="hero-boat-glass" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0" stop-color="#262626" />
					<stop offset="1" stop-color="#555" />
				</linearGradient>
				<linearGradient id="hero-boat-funnel" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stop-color="#252525" />
					<stop offset="0.35" stop-color="#707070" />
					<stop offset="0.7" stop-color="#3a3a3a" />
					<stop offset="1" stop-color="#1a1a1a" />
				</linearGradient>
				<filter id="hero-boat-soft" x="-20%" y="-150%" width="140%" height="300%">
					<feGaussianBlur stdDeviation="0.45" />
				</filter>
				<filter id="hero-boat-smoke" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="1.6" />
				</filter>
			</defs>

			<!-- 48 s loop: appears far up the fjord, comes closer (growing, turning once),
			     slips behind my right shoulder, reappears behind the backpack strap, sails off left. -->
			<g>
				<animateMotion
					dur="48s"
					repeatCount="indefinite"
					calcMode="linear"
					path="M1128,418 C1133.3,428.0 1147.0,455.7 1160,478 C1173.0,500.3 1206.3,528.7 1206,552 C1205.7,575.3 1184.8,600.8 1158,618 C1131.2,635.2 1082.2,642.5 1045,655 C1007.8,667.5 1054.2,652.5 935,693 C815.8,733.5 460.8,853.8 330,898 C199.2,942.2 226.7,932.7 150,958 C73.3,983.3 -83.3,1034.7 -130,1050"
					keyPoints="0;0.0425;0.0977;0.1506;0.2252;0.2979;0.6972;0.8158;1;1"
					keyTimes="0;0.12;0.265;0.39;0.495;0.55;0.7;0.765;0.85;1"
				/>
				<animate attributeName="opacity" dur="48s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.035;0.84;0.85;1" />
				<g>
					<animateTransform
						attributeName="transform"
						type="scale"
						dur="48s"
						repeatCount="indefinite"
						values="-0.12 0.12;-0.17 0.17;-0.26 0.26;0.38 0.38;0.54 0.54;0.64 0.64;0.95 0.95;1.05 1.05;1.2 1.2;1.2 1.2"
						keyTimes="0;0.12;0.265;0.39;0.495;0.55;0.7;0.765;0.85;1"
					/>
					<g>
						<animateTransform
							attributeName="transform"
							type="rotate"
							dur="3.2s"
							repeatCount="indefinite"
							values="-1.2;1.2;-1.2"
							keyTimes="0;0.5;1"
							calcMode="spline"
							keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
						/>
						<g filter="url(#hero-boat-soft)">
							<!-- wake, reflection, waves, then the boat itself -->
							<path d="M34,0 L110,-5 L110,-2.5 L36,1.2 L110,8 L110,11 Z" fill="url(#hero-boat-wake)" />
							<!-- waves: ripples (dark trough + white crest) leave the stern, spread out and fade;
							     foam churns along the bow -->
							{#each [0, 0.6, 1.2, 1.8] as delay}
								{@const begin = delay ? `-${delay}s` : '0s'}
								<g opacity="0">
									<animate attributeName="opacity" dur="2.4s" {begin} repeatCount="indefinite" values="0;1;0" keyTimes="0;0.12;1" />
									<animateTransform attributeName="transform" type="translate" dur="2.4s" {begin} repeatCount="indefinite" values="0 0;34 0.6;68 1.2" keyTimes="0;0.5;1" />
									<ellipse cx="36" cy="2.6" rx="4" ry="1" fill="none" stroke="#000" stroke-width="1.4" opacity="0.22">
										<animate attributeName="rx" dur="2.4s" {begin} repeatCount="indefinite" values="4;20;34" keyTimes="0;0.5;1" />
										<animate attributeName="ry" dur="2.4s" {begin} repeatCount="indefinite" values="1;3.5;6" keyTimes="0;0.5;1" />
									</ellipse>
									<ellipse cx="36" cy="1.4" rx="4" ry="1" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.9">
										<animate attributeName="rx" dur="2.4s" {begin} repeatCount="indefinite" values="4;20;34" keyTimes="0;0.5;1" />
										<animate attributeName="ry" dur="2.4s" {begin} repeatCount="indefinite" values="1;3.5;6" keyTimes="0;0.5;1" />
									</ellipse>
								</g>
							{/each}
							<path d="M-45,2.2 Q-36,0.6 -25,2.8 Q-13,4 0,2.8" fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round" opacity="0.2" />
							<path d="M-44,0.6 Q-36,-1.2 -26,1.2 Q-14,2.6 0,1.4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round">
								<animate attributeName="opacity" dur="0.9s" repeatCount="indefinite" values="1;0.55;1" />
							</path>
							<path d="M-47,3 Q-37,1.6 -24,4" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round">
								<animate attributeName="opacity" dur="1.3s" repeatCount="indefinite" values="0.35;0.9;0.35" />
							</path>
							<ellipse cx="2" cy="2.2" rx="40" ry="2.6" fill="#000" opacity="0.16" />
							<!-- 3D-ish boat seen slightly from above, bow to the left, overcast light from above -->
							<!-- deck (top surface) with far gunwale and a little railing at the bow -->
							<path d="M-41,-11 C-31,-16.5 -19,-17.6 -9,-17.6 L37.2,-17.6 L38.5,-11 Z" fill="url(#hero-boat-deck)" stroke="#8c8c88" stroke-width="0.6" />
							<path d="M-34,-17.4 C-27,-20.6 -20,-21 -13,-21" fill="none" stroke="#8a8a86" stroke-width="0.6" />
							<path d="M-30,-15.6 V-19.4 M-25,-16.8 V-20.6 M-20,-17.3 V-21 M-15,-17.5 V-21" stroke="#8a8a86" stroke-width="0.5" />
							<!-- funnel: a shaded cylinder with a dark opening on top -->
							<path d="M27,-14 V-28 A3.5,1.2 0 0 1 34,-28 V-14 Z" fill="url(#hero-boat-funnel)" />
							<path d="M27,-28 A3.5,1.2 0 0 1 34,-28 V-25.6 A3.5,1.2 0 0 0 27,-25.6 Z" fill="#1e1e1e" opacity="0.85" />
							<ellipse cx="30.5" cy="-28" rx="3.5" ry="1.2" fill="#151515" stroke="#7a7a7a" stroke-width="0.5" />
							<!-- cabin: side face (shaded) and roof (lit) -->
							<path d="M-14,-12 L-10,-21 L23,-21 L25,-12 Z" fill="url(#hero-boat-side)" stroke="#6e6e6a" stroke-width="0.7" />
							<path d="M-10,-21 L-7,-25.2 L23.4,-25.2 L23,-21 Z" fill="#fdfdfb" stroke="#7c7c78" stroke-width="0.6" />
							<path d="M-7.5,-18.6 h6 v4.2 h-6 Z M1.5,-18.6 h6 v4.2 h-6 Z M10.5,-18.6 h6 v4.2 h-6 Z" fill="url(#hero-boat-glass)" />
							<path d="M-7,-18.1 l2.2,0 M2,-18.1 l2.2,0 M11,-18.1 l2.2,0" stroke="#fff" stroke-width="0.6" opacity="0.7" />
							<!-- hull side facing us: rounded shading from the gunwale down to the waterline -->
							<path d="M-41,-11 C-35,-4 -28,0 -20,0 L36,0 L38.5,-11 Z" fill="url(#hero-boat-hull)" stroke="#5e5e5a" stroke-width="0.8" />
							<path d="M-40,-10.2 C-34,-9.6 -28,-9.4 -20,-9.4 L37.6,-9.4" fill="none" stroke="#fff" stroke-width="1" opacity="0.85" />
							<path d="M-24,-0.6 L36,-0.6 L36.6,-3.2 L-27,-3.2 Z" fill="#4a4a4a" />
							<!-- smoke from the funnel: puffs rise, drift back over the stern, grow and fade -->
							<g filter="url(#hero-boat-smoke)">
								{#each [0, 0.7, 1.4, 2.1] as delay}
									<circle cx="30.5" cy="-28" r="2.5" fill="#8a8a8a" opacity="0">
										<animate attributeName="cx" dur="2.8s" begin={delay ? `-${delay}s` : "0s"} repeatCount="indefinite" values="30.5;38;54" keyTimes="0;0.4;1" />
										<animate attributeName="cy" dur="2.8s" begin={delay ? `-${delay}s` : "0s"} repeatCount="indefinite" values="-28;-40;-55" keyTimes="0;0.4;1" />
										<animate attributeName="r" dur="2.8s" begin={delay ? `-${delay}s` : "0s"} repeatCount="indefinite" values="2.5;5.5;10" keyTimes="0;0.4;1" />
										<animate attributeName="opacity" dur="2.8s" begin={delay ? `-${delay}s` : "0s"} repeatCount="indefinite" values="0;0.6;0" keyTimes="0;0.15;1" />
									</circle>
								{/each}
							</g>
						</g>
					</g>
				</g>
			</g>

			<!-- cut-out of me (same pixels as the photo), so the boat passes behind -->
			<image href="/images/joutenheim-fg.webp" x="256" y="315" width="804" height="765" />
		</svg>
	{/if}

    <Nav/>
	<div class="softwarewrapper">
		<h1 class="mainheader">Samuel Eksmo</h1>
		<h2 class="mainheader softwareheader">Software Engineer</h2>
	</div>

</div>


<style>

	.home {
		background-color: #3a4a52;
		background-image: url('/images/joutenheim.jpg');
		background-image: image-set(
			url('/images/joutenheim.webp') type('image/webp'),
			url('/images/joutenheim.jpg') type('image/jpeg')
		);
		background-size: cover;
		background-position: 34% center;
		position: relative;
		overflow: hidden;
		height: 100%;
		margin: 0 auto;
        background-repeat: no-repeat;
		text-align: center;
	}

	h1 {
		font-size: 2.9em;
    	color: white;
    	font-family: 'Oswald';
    	font-weight: bold;
		
	}
	h2 {
		font-size: 2.6em;
    	color:white;
    	font-family: 'Oswald';
    	font-weight:bold;
		
	}
	.mainheader {
		margin-top: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
		margin-right: 0px;
		display:flex;
		text-align: center;	
		
	}
	.softwareheader {
		padding-left: 16px;
		letter-spacing: 0.42em;
		line-height: 44px; 
		color: #E56B6F;
	}
	.scene {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.softwarewrapper{
		position: relative;
		z-index: 1;
		border-width: 8px;
		border-style:solid;
		border-color: white;
		margin: 0 auto;
		text-align: center;		
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		width:284px;
		
	}


	/* The boat scene's SVG uses a centered "cover" crop; match it on desktop. */
	@media (min-width: 1024px) {
		.home {
			background-position: center;
		}
	}

	@media (min-width: 1366px) {


		.softwarewrapper {
			display: none;

		}
	}
	@media (min-height: 1080px) {
		.home {
			height: 1080px;
		}
	}
</style>