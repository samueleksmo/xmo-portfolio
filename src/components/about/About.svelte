<script>
import { _ } from '../../services/i18n';
</script>


<div id="about">
	<div class="centerwrapper">
	<h3> {$_('hi')}! <br> <br> {$_("I'm Samuel. Gothenburg based")} <u>{$_("Software Engineer")}</u> & <u>{$_("Multi creator")}</u>.</h3>
	<p>{$_('p1')}  
		<br><br>{$_('p2')}
	</p>
	</div>
</div>


<style>
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
		font-family: Oranienbaum;
		text-align: left;
		margin-block-start: 0em;
    	margin-block-end: 0em;
		font-weight:normal;
	}
	p {
		font-size: 24px;
		font-family: Roboto;
		text-align: left;
		letter-spacing: 1.2px;
		row-gap: 1.2px;
		line-height: 1.2;
	}


	@media (min-width: 1366px) {
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