<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    export let open;
    let y;
</script>
<svelte:window bind:innerHeight={y}/>
{#if open}
    <div>
        {#each ['About', 'Portfolio', 'Contact'] as link, i}
            <p transition:fly={{ y: -15, delay: 50 * i }}>
                {link}
            </p>
        {/each}
    </div>
    {#if y > 1000}
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
    }
    p:hover {
        text-decoration: underline;
    }
</style>
