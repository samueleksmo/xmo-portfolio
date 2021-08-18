<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
    import { _ } from '../../services/i18n';

    export let open;
    let y;
    
</script>
<svelte:window bind:innerHeight={y}/>

{#if open}
    <div>
        <p transition:fly={{ y: -15, delay: 50 }}>
            <a href="#about">{$_('about')}</a>
            <a href="#portfolio">{$_('portfolio')}</a>
            <a href="#contact">{$_('contact')}</a>
        </p>
    </div>
    {#if y > 200}
    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
    {/if}
{/if}

<style>
    div {
        display: block;
        text-align: center;
        font-size: 28px;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #E56B6F;
        font-family: Oswald;
        font-weight: bold;
    }
    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
        display: flex;
        flex-direction: column;
    }
    a {
        margin-top: 1em;
        color: #E56B6F;
        font-family: Oswald;
        scroll-behavior: smooth;
    }
    p:hover {
        text-decoration: underline;
    }
</style>
