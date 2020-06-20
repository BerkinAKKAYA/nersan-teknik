<script>
	import Nav from '../components/Nav.svelte';
	import { language } from '../language.js';

	let lang = null;

	language.subscribe(value => { lang = value });

	const ChangeLanguage = newLang => {
		language.set(newLang);
	}

	export let segment;
</script>

<style>
	main, footer {
		width: 1000px;
		max-width: 80vw;
		margin-top: 50px;

		position: relative;
		left: 50%;
		transform: translateX(-50%);
		
		background-color: rgba(42, 38, 43, 0.15);
	}

	main { padding: 50px; }

	@media (max-width: 500px)
	{
		main { padding: 25px }
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		margin-bottom: 50px;
		padding: 10px 50px;
	}

	.iletisim { display:flex; align-items: center;}
	.iletisim a { margin-left: 10px }

	.lang { cursor: default }

	footer img { width: 28px; margin-left: 10px; cursor: pointer }

	@media (max-width: 550px)
	{
		.iletisim { text-align: center }
		.iletisim img { display: none }
		footer { flex-direction: column; padding: 20px }
		footer img { margin: 0 5px }
		.lang { margin-top: 15px }
	}
</style>

<Nav {segment} />

<main>
	<slot></slot>
</main>

<footer>
	<div class="iletisim">
		<img src="img/red-phone.png" alt="PHONE">
		<a href="iletisim">
			{#if lang=="tr"}
			İletişim bilgileri için tıklayınız.
			{:else}
			Click to see contact information.
			{/if}
		</a>
	</div>
	<div class="lang">
		<img src="img/tr.png" alt="TR" on:click={() => ChangeLanguage('tr')}>
		<img src="img/en.png" alt="EN" on:click={() => ChangeLanguage('en')}>
	</div>
</footer>