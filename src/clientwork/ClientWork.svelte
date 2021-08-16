<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
let berkeley = 'images/sanfran.jpg';
export let open;
</script>


<section>
 
	<div class="card" on:click={() => open = !open}>	
		
		<img src={berkeley} alt="xmo logo"  >
		<div class="textwrapper">
			<h2>Berkeley Chalmers Exchange</h2>
			<h3>Webdesigner</h3>
			
			{#if open}
				<div transition:fly={{ y: -15, delay: 50  }}>
						<p >
							During my time at university, I got the opportunity to do an exchange semester at UC Berkeley in California. While being part of a project group surrounding the exchange. I got the chance to develop its own website.
							
						</p>
						<a href="https://berkeleychalmers.se/">Check it out!</a>
				</div>
			{/if}
		
			
	</div>
</section>


<style>
	section {
        background-color: #355070;
        height: 1000px;
		padding-top: 2em;
		margin: 0 auto;
        background-repeat: no-repeat;
		text-align: center;
	}

	.card {
		height: auto;
		max-width: 360px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;

	

	}
	.imagewrapper {
		max-width: 100%;
		height: auto;
		background-repeat: no-repeat;
		background-image: url('/images/sanfran-small.jpg');	
	
	}
	.textwrapper {
		text-align: left;
	}
	h2 {
		font-family: Oranienbaum;
		text-align: left;
		margin-block-start: 0.5em;
    	margin-block-end: 0em;
		font-weight:lighter;
		font-size: 38px;
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
		font-family: Roboto;
		color: #FCFBFB;
		letter-spacing: 1.2px;
	}
	a {
		margin-top: 2em;
		font-family: Roboto;
		color: #EAAC8B;
		letter-spacing: 4px;
	}
	@media (min-width: 640px) {
        div {
        
        background-size: 100% auto;
		}
	}

    @media (min-width: 640px) {
	}
</style>