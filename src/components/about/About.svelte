<script>
import { _ } from '../../services/i18n';
import Links from './Links.svelte'
</script>


<div id="about">
	<div class="centerwrapper">
	<h3> {$_('hi')}! <br> <br> {$_("I'm Samuel. Gothenburg based")} <u>{$_("Software Engineer")}</u> & <u>{$_("Multi creator")}</u>.</h3>
	<p>{$_('p1')}  
		<br><br>{$_('p2')}
	</p>
	<h4>WORKED WITH</h4>
	<p class="languages">
		Python / Java / Javascript / React / Svelte / HTML / CSS / Docker / Kubernetes / Google Cloud / Azure / IBM Cloud
	</p>
	</div>
	<Links/>

</div>


<style>
	@font-face{
  	font-family: 'Yantramanav-Light';
  		src: url('/fonts/Yantramanav-Light.woff2') format('woff2');
	}
	.languages{
		font-size: 16px;
		margin-top: 0px;
		margin-bottom: 2em;
		max-width: 440px;
	}
	div {
        background-color: #FCFBFB;
		margin: 0 auto;
        background-repeat: no-repeat;
		text-align: center;
		padding-top: 2%;
		padding-bottom: 2%;
	}
	.centerwrapper {
		width: 80%;
		margin: 0 auto;
	}
	h3 {
		padding-top: 2em;
		font-size: 36px;
		font-family: 'Oranienbaum';
		text-align: left;
		margin-block-start: 0em;
    	margin-block-end: 0em;
		font-weight:normal;
	}
	h4 { 
		margin-bottom: 0px;
		font-size: 1em;
		color:black;
		font-family: 'Yantramanav-Light', sans-serif;
		text-align: left;
		letter-spacing: 1.2px;
		row-gap: 1.2px;
		font-weight:normal;
		line-height: 1.2;
	}
	p {
		font-size: 24px;
		font-family: 'Yantramanav-Light', sans-serif;
		
		text-align: left;
		letter-spacing: 1.2px;
		row-gap: 1.2px;
		line-height: 1.2;
	}


	@media (min-width: 1366px) {
		.languages{

		margin-bottom: 0em;
		}
        div {
        
        background-size: 100% auto;
		}
		.centerwrapper {
		width: 800px;
		margin: 0 auto;
	}
	}

    @media (min-width: 640px) {
	}
</style>