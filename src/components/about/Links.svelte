<script>
    import { _ } from '../../services/i18n';
    
    let arrow = 'images/arrow.svg';
</script>
    
    
<div >
    <div class="linkwrapper">
        <a href="mailto:hej@xmo.se">GET IN TOUCH
            <img src={arrow} alt="north east arrow"  class="arrow">
        </a>
        <a href="https://www.linkedin.com/in/samueleksmo/">LINKED IN
            <img src={arrow} alt="north east arrow"  class="arrow"></a>
        
        <a href="https://github.com/samueleksmo" >GITHUB
            <img src={arrow} alt="north east arrow"  class="arrow"></a>
    </div>
</div>
    
    
<style>
    @font-face{
  	font-family: 'Yantramanav-Light';
  		src: url('/fonts/Yantramanav-Light.woff2') format('woff2');
	}
    .linkwrapper {
        margin: 0 auto;
        width:80%;
    }
    div {
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        
    }
    a {
        margin-bottom: 1em;
        display: flex;
        font-family: 'Yantramanav-Light', sans-serif;
        color:black;
        font-size: 1em;
        justify-content: center;
        text-align: center;
    }
    .arrow {
        margin-left: 0.3em;
        height: 18px;
    }
    @media (min-width: 1336px) {
    .linkwrapper {
        margin: 0 auto;
        width:800px;
    }
    div {
    
        text-align: left;
        justify-content: left;
        flex-direction: row;
    }

    
    a {
       margin-right: 4em;
        
        
    }
    .arrow {
        margin-left: 0.3em;
        height: 18px;
    }
}
</style>