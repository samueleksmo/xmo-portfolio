<script>
	import { onMount } from 'svelte';
	import { _, locale } from '../../services/i18n';

	let name = '';
	let email = '';
	let message = '';
	let website = ''; // honeypot – hidden from people, bots tend to fill it in
	let status = 'idle'; // idle | sending | sent | error
	let startedAt = 0;

	onMount(() => (startedAt = Date.now()));

	async function submit() {
		status = 'sending';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message, website, locale: $locale, elapsed: Date.now() - startedAt })
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok) throw new Error(`HTTP ${res.status}`);
			status = 'sent';
			name = email = message = '';
		} catch (err) {
			console.error(err);
			status = 'error';
		}
	}
</script>

<section id="contact">
	<div class="centerwrapper">
		<h2>{$_('get_in_touch')}</h2>
		<p class="intro">{$_('contact_intro')}</p>

		<form on:submit|preventDefault={submit}>
			<div class="row">
				<label>
					<span>{$_('form_name')}</span>
					<input type="text" name="name" autocomplete="name" maxlength="100" required bind:value={name} />
				</label>
				<label>
					<span>{$_('form_email')}</span>
					<input type="email" name="email" autocomplete="email" maxlength="200" required bind:value={email} />
				</label>
			</div>
			<label>
				<span>{$_('form_message')}</span>
				<textarea name="message" rows="6" maxlength="5000" required bind:value={message}></textarea>
			</label>

			<label class="hp" aria-hidden="true">
				Website
				<input type="text" name="website" tabindex="-1" autocomplete="off" bind:value={website} />
			</label>

			<div class="actions">
				<button type="submit" disabled={status === 'sending'}>
					{status === 'sending' ? $_('form_sending') : $_('form_send')}
				</button>
				<p class="status" class:error={status === 'error'} role="status" aria-live="polite">
					{#if status === 'sent'}{$_('form_success')}{:else if status === 'error'}{$_('form_error')}{/if}
				</p>
			</div>
		</form>
	</div>
</section>

<style>
	section {
		background-color: #FCFBFB;
		padding: 4em 0 2em;
	}
	.centerwrapper {
		width: 80%;
		margin: 0 auto;
	}
	h2 {
		font-family: 'Oranienbaum', serif;
		font-weight: normal;
		font-size: 36px;
		letter-spacing: 2px;
		margin: 0;
		color: #333;
	}
	.intro {
		font-family: 'Yantramanav-Light', sans-serif;
		font-size: 20px;
		letter-spacing: 1.2px;
		line-height: 1.3;
		margin: 0.6em 0 1.6em;
		color: #333;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}
	.row {
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}
	label {
		display: flex;
		flex-direction: column;
		gap: 0.4em;
		flex: 1;
	}
	label span {
		font-family: 'Yantramanav-Light', sans-serif;
		font-size: 14px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		color: #333;
	}
	input,
	textarea {
		font-family: 'Yantramanav-Light', sans-serif;
		font-size: 18px;
		letter-spacing: 0.6px;
		color: #222;
		background: #fff;
		border: 1px solid #c9c4c4;
		border-radius: 2px;
		padding: 0.6em 0.7em;
		margin: 0;
		width: 100%;
		box-sizing: border-box;
		resize: vertical;
	}
	input:focus,
	textarea:focus {
		outline: none;
		border-color: #E56B6F;
		box-shadow: 0 0 0 1px #E56B6F;
	}
	.hp {
		position: absolute;
		left: -10000px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
	.actions {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.8em;
	}
	button {
		font-family: 'Oswald', sans-serif;
		font-weight: bold;
		font-size: 18px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #fff;
		background-color: #E56B6F;
		border: none;
		border-radius: 2px;
		padding: 0.6em 1.6em;
		margin: 0;
		white-space: nowrap;
		cursor: pointer;
		transition: background-color 0.2s;
	}
	button:hover:not(:disabled) {
		background-color: #c9555a;
	}
	button:disabled {
		opacity: 0.6;
		cursor: default;
	}
	.status {
		font-family: 'Yantramanav-Light', sans-serif;
		font-size: 16px;
		letter-spacing: 1px;
		margin: 0;
		min-height: 1.2em;
		color: #2f6b4f;
	}
	.status.error {
		color: #b0353a;
	}

	@media (min-width: 640px) {
		.row {
			flex-direction: row;
		}
		.actions {
			flex-direction: row;
			align-items: center;
			gap: 1.4em;
		}
	}
	@media (min-width: 1366px) {
		.centerwrapper {
			width: 800px;
		}
	}
</style>
