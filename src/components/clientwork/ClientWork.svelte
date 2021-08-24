<script>
	import { _ } from '../../services/i18n';
    import { fly, scale } from 'svelte/transition';
	let berkeley = 'images/sanfran.jpg';
	let truck = 'images/truck.jpg';
	let git = 'images/git.jpg';
	export let open;
	export let openibm;
	export let opengit;
</script>


<section id="portfolio">
	<h1>PORTFOLIO</h1>
	<div class="cardwrapper">
		<div class="card" on:click={() => open = !open}>	
			<img src={berkeley} alt="xmo logo"  >
			<div class="textwrapper">
				<h2>Berkeley Chalmers <br> // Website</h2>
				<h3>Webdesigner</h3>
				
				{#if open}
					<div transition:fly={{ y: -15, delay: 50  }}>
							<p >
								{$_('p3')}
								
							</p>
							<a href="https://berkeleychalmers.se/">Check it out!</a>
					</div>
				{/if}
			</div>		
		</div>

		<div class="card" on:click={() => openibm = !openibm}>	
			<img src={truck} alt="truck on road"  >
			<div class="textwrapper">
				<h2>Volvo Trucks <br> // Tire Health System</h2>
				<h3>Data Engineer</h3>
				
				{#if openibm}
					<div transition:fly={{ y: -15, delay: 50  }}>
							<p >
								{$_('p4')}
								
							</p>
							<a href="https://www.volvotrucks.com/en-en/news-stories/press-releases/2018/sep/pressrelease-180906.html">Check it out!</a>
					</div>
				{/if}
			</div>
		</div>
		<div class="card" on:click={() => opengit = !opengit}>	
			<img src={git} alt="calculator"  >
			<div class="textwrapper">
				<h2>IBM Capstone <br> // Revenue Prediction</h2>
				<h3>Data Scientist</h3>
				
				{#if opengit}
					<div transition:fly={{ y: -15, delay: 50  }}>
							<p >
								{$_('p5')}
								
							</p>
							<a href="https://github.com/aavail/ai-workflow-capstone">Check it out!</a>
					</div>
				{/if}
			</div>
		</div>
	</div>

</section>



<style>
	section {
        background-color: #001219;
		padding-top: 2em;		
		padding-bottom: 6em;		
        background-repeat: no-repeat;
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
	.textwrapper {
		text-align: left;
	}
	h1 {
		font-size: 3.5em;
		font-family: 'Yantramanav-Light', sans-serif;
		text-align: center;
		margin-block-start: 0em;
    	margin-block-end: 0em;
		font-weight:700;
		color: #FCFBFB;
		letter-spacing: 5px;
		padding-top: 1em;
		
	}
	h2 {
		font-family: Oranienbaum;
		text-align: left;
		margin-block-start: 0.5em;
    	margin-block-end: 0em;
		font-weight:lighter;
		font-size: 28px;
		color: #FCFBFB
	}
	h3 {
		font-family: Oranienbaum;
		text-align: left;
		margin-block-start: 0.5em;
    	margin-block-end: 0em;
		font-weight:lighter;
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
		font-family: Roboto;
		color: #EAAC8B;
		letter-spacing: 4px;
	}
	@media (min-width: 1200px) {
		section {
		display: flex;
		padding-top: 2em;
		padding-bottom: 7em;
		}
		.cardwrapper {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction:row;
		justify-content: space-evenly;
		}
	}
</style>