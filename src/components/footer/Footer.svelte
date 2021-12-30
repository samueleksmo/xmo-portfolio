<script>
let active = false;
let xmologo = 'images/xmo_logo.svg';
import {
      createEventDispatcher
    } from 'svelte';
    const dispatch = createEventDispatcher();
  
    function switchLocale(language) {
    //   event.preventDefault();
      dispatch('locale-changed',language);
      active = !active;
    }
</script>


<section id="contact">
    <div class="footerwrapper">
        <img src={xmologo} alt="xmo logo"  class="footerlogo">
        <a href="mailto:hej@xmo.se">hej@xmo.se</a>
        <div class="langue">
            <button class:active={active} on:click={() => switchLocale("en")}>ENG</button>
            <p>&nbsp</p>
            <button class:active={!active} on:click={() => switchLocale("sv")}>SWE</button>
        </div>
    </div>
</section>


<style>
    .active {
		color: #C4C4C4;
	}
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
    button {
        height:1em;
        width: auto;
        border:none;
        background: #FCFBFB;
        margin: 1.3em 0 0 0;
        padding: 0 0 0 0;
    }
    .langue{
        display: flex;
        justify-content: space-between;
    }
    p{
        margin-top: 1.2em;
    }
	@media (min-width: 1366px) {
        .footerwrapper {
        width: 40%;
	    }
	}
</style>