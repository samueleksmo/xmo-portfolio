<script>
    import Sidebar from './Sidebar.svelte'
    let hamburger = 'images/hamburger.svg';
    let xmologo = 'images/xmo_logored.svg';
 

    export let open = false
</script>


<nav class="smallscreen">
        <div class="topnavwrapper">
            <div class="rapper">
            <a href="#home" >
                <img src={xmologo} alt="xmo logo"  class="logo">
            </a>
             <a href={'#!'}  on:click={() => open = !open} > 
                <img src={hamburger} alt="hamburger menu" class="hamburger">
            </a>
            </div>
            <div class="navwrapper">
                <Sidebar bind:open/>
            </div>
        </div>
</nav>




<nav class="bigscreen">
    <div class="topnav">
     
            <div class="logowrapper">
                <a href="#home">
                    <img src={xmologo} alt="xmo logo"  class="logo">
                </a>
                <div class="titlewrapper">
                    <h1 class="titleh1">Samuel Eksmo</h1>
                    <h2 class="titleh2">Software Engineer</h2>
                </div>
            </div>
            <div class="myLinks">
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        
    </div>
</nav>

<style>

.bigscreen {
    display: none;
}
nav {
    
    height: 40%;
    width: 100%;
}

.topnav {
    display: flex;
    justify-content: space-between;
    position: fixed;
}
.topnavwrapper {
    top:3%;
    left: 5%;
    width: 90%;
    display: block;
    justify-content: space-between;
    position: fixed;
}
.rapper {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.navwrapper {
    width: 100%;
    display: block;
    justify-content: space-between;
    
}
.myLinks {
    display: flex;
    height: 20%;
    width: 100%;
    margin-top: 16%;
    flex-direction: column;
    justify-content: space-between;
    /* position: fixed; */
   
}
.myLinks a {
    font-size: 28px;
    color: #E56B6F;
    font-family: Oswald;
    font-weight: bold;
}
.hamburger {
    width: 2.8em;
    padding-top: 0.4em;
    
}
.logo{
    width: 8em;
}


/* Add a grey background color on mouse-over */
.topnav a:hover {
  /* background-color: #ddd; */
  color: black;
}

/* Style the active link (or home/logo) */
.active {
  color: white;
}

@media (min-width: 1366px) {
    .smallscreen {
        display: none;
    }
    .bigscreen {    
    display: flex;
    margin: 0 auto;
    width: 1366px;          
    }
    nav {
    height: 12%;
    }
    .topnav {
    width: 1366px;  
    display: flex;

    }
    .topnavwrapper {
    width: 1366px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    text-align: center;
    }

    .myLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 600px;
    margin-top: 70px;
    height: 30%;
    position:unset;

    }
    .logo{
    display: flex;
    width: 12em;
    margin-top: 54px;
    }
    .logowrapper {
        display: flex;
        height: 100%;
    }
    .titlewrapper {
        margin-top: 73px;
        margin-left: -14px;;
    }
    .titleh1{
        font-size: 24px;
        font-family: Oswald;
        font-weight: bold;
        margin-top: 0%;
        margin-bottom: 0%;
        letter-spacing: 1.2px;
        color: #474444;

    }
    .titleh2{
        font-size: 18px;
        font-family: Oswald;
        font-weight: bold;
        margin-top: -8px;
        margin-bottom: 0%;
        letter-spacing: 1px;
        word-spacing: 6px;
        color: #474444;   
    }
}

</style>