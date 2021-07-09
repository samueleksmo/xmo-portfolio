<script>

    import Nav from './Nav.svelte'

</script>


<div class="home">
    <Nav/>
	<div class="softwarewrapper">
		<h1 class="mainheader">Samuel Eksmo</h1>
		<h2 class="mainheader softwareheader">Software Engineer</h2>
	</div>

</div>


<style>
	.home {
        background-image: url('/images/joutenheim.jpg');
        height: 100%;
		margin: 0 auto;
        background-repeat: no-repeat;
		text-align: center;
	}

	h1 {
		font-size: 3em;
    	color: white;
    	font-family: Oswald;
    	font-weight: bold;
		
	}
	h2 {
		font-size: 2.3em;
    	color:white;
    	font-family: Oswald;
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
		padding-left: 18px;
		letter-spacing: 0.55em;
		
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
		width:290px;
		
	}


	@media (min-width: 640px) {
        div {
        /* height: 1920px; */
        background-size: 100% auto;
		}
	}

    @media (min-width: 640px) {
	}
</style>