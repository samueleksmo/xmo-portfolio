<script>
	import Nav from './Nav.svelte';
</script>


<div id="homepage" class="home">


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
	.softwarewrapper{
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