<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
    import { _ } from '../../services/i18n';

    export let open;
    let y;

    const close = () => (open = false);
</script>
<svelte:window bind:innerHeight={y} on:keydown={(e) => e.key === 'Escape' && close()}/>

{#if open}
    <div id="mobile-menu">
        <p transition:fly={{ y: -15, delay: 50 }}>
            <a href="#about" on:click={close}>{$_('about')}</a>
            <a href="#portfolio" on:click={close}>{$_('portfolio')}</a>
            <a href="#contact" on:click={close}>{$_('contact')}</a>
        </p>

    </div>
    {#if y > 200}
    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 0.2 }} />
    {/if}
{/if}

<style>
    div {
        background-color: rgba(0, 0, 0, 0.2);
        display: block;
        text-align: center;
        font-size: 28px;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #E56B6F;
        font-family: 'Oswald';
        font-weight: bold;
    }
    hr {
        margin: 0;
    }
    p {
        cursor: pointer;
        width: max-content;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    a {
        margin-top: 1em;
        color: #E56B6F;
        font-family: 'Oswald';
        scroll-behavior: smooth;
    }
</style>
