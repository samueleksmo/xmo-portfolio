<script>
	import { _, locale } from '../../services/i18n';

	const xmologo = '/images/xmo_logo.svg';
	const languages = [
		{ code: 'en', label: 'ENG' },
		{ code: 'sv', label: 'SWE' }
	];
</script>

<footer id="contact">
	<div class="footerwrapper">
		<img src={xmologo} alt="Xmo" class="footerlogo" />
		<a href="mailto:hej@xmo.se">hej@xmo.se</a>
		<div class="langue" role="group" aria-label={$_('switch_language')}>
			{#each languages as lang, i}
				{#if i > 0}<span aria-hidden="true">/</span>{/if}
				<button
					type="button"
					lang={lang.code}
					class:inactive={$locale !== lang.code}
					aria-pressed={$locale === lang.code}
					on:click={() => locale.set(lang.code)}>{lang.label}</button
				>
			{/each}
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: #FCFBFB;
		height: 100px;
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
	.langue {
		display: flex;
		align-items: baseline;
		gap: 0.4em;
		margin-top: 1.2em;
	}
	button {
		height: auto;
		width: auto;
		border: none;
		background: #FCFBFB;
		margin: 0;
		padding: 0;
		cursor: pointer;
		color: #333;
	}
	button.inactive {
		color: #C4C4C4;
	}
	span {
		color: #C4C4C4;
	}
	@media (min-width: 1366px) {
		.footerwrapper {
			width: 40%;
		}
	}
</style>
