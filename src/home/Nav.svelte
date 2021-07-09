<script>
    let hamburger = 'images/hamburger.svg';
    let xmologo = 'images/xmo_logored.svg';

    let menu = { menuPressed: false };

    function toggle() {
        menu.menuPressed = !menu.menuPressed;
    }
</script>


<nav>
    {#if menu.menuPressed}
    <div class="topnav">
        <a href="#home" >
            <img src={xmologo} alt="xmo logo"  class="logo">
        </a>
        <a href={'#'}  on:click={toggle}> 
            <img src={hamburger} alt="hamburger menu" class="hamburger">
        </a>
    </div>
    {:else}
    <div class="topnav">
        <a href="#home" >
            <img src={xmologo} alt="xmo logo"  class="logo">
        </a>
        <a href={'#'} class="hamburgerwrapper" on:click={toggle}> 
            <img src={hamburger} alt="hamburger menu" class="hamburger">
        </a>
    </div>
    <div class="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
    {/if}
</nav>

<style>
nav {
    height: 40%;
}

.topnav {
  display: flex;
  justify-content: space-between;
}
.myLinks {
    display: flex;
    height: 60%;
    flex-direction: column;
    justify-content: space-evenly;
}
.myLinks a {
    font-size: 32px;
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

/* Style navigation menu links */
.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Style the hamburger menu */
.topnav a.icon {
  background: black;
  right: 0;
  top: 0;
}

/* Add a grey background color on mouse-over */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active link (or home/logo) */
.active {

  color: white;
}
</style>