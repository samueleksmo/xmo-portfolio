<script>

let xmologo = 'images/xmo_logo.svg';

</script>


<section>
    <div class="footerwrapper">
        <img src={xmologo} alt="xmo logo"  class="footerlogo">
        <a>hej@xmo.se</a>
        <div class="langue">
            <p>ENG</p>
            <p>&nbsp</p>
            <p id="swe">SWE</p>
        </div>
    </div>
</section>


<style>
    section {
        background-color: #FCFBFB;
        height: 100px;
		
        background-repeat: no-repeat;
		text-align: center;
        display: flex;
        justify-content: center;
        padding-top: 60px;
    }
	.footerwrapper {
        width: 90%;
        justify-content: space-between;
        display: flex;
	}
    .footerlogo {
        height: 58px;
        margin-right: -20px;
        
    }
    a {
        margin-top: 1.2em;
        color: #828080;
   
    }
    .langue{
        display: flex;
        justify-content: space-between;

        
    }
    p{
        margin-top: 1.2em;
    }
    #swe {
        color: #C4C4C4;
    }


	@media (min-width: 1366px) {
        .footerwrapper {
        width: 40%;
	    }
	}

    @media (min-width: 640px) {
	}
</style>