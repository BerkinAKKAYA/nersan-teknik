<script>
	import ContactForm from '../components/ContactForm.svelte';
	import { language } from '../language.js';

	let lang = null;
	language.subscribe(value => { lang = value });
</script>

<svelte:head>
	<title>İletişim - Nersan Teknik</title>
</svelte:head>

<div id="container">
	<section>
		<h2>{#if lang=="tr"}KONUM{:else}LOCATION{/if}</h2>
		<iframe
			title="Harita"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12062.55492339095!2d29.170351!3d40.901739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfed14ab67bfc112b!2sNersan%20Teknik!5e0!3m2!1sen!2str!4v1592501271904!5m2!1sen!2str" 
			frameborder="0"
			allowfullscreen=""
			aria-hidden="false"
			tabindex="0"></iframe>
	</section>

	<section>
		<h2>FORM</h2>
		<ContactForm />
	</section>
</div>

<style>
	#container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 15px;
	}

	@media (max-width: 700px)
	{
		#container { grid-template-columns: 1fr }
		section:nth-last-child(1) { margin-top: 60px }
	}

	section { width: 100% }

	h2 {
		font-family: Bison;
		color: #707070;
		cursor: default;
	}

	iframe {
		width: 100%;
		min-width: 200px;
		max-width: 400px;
		margin-top: 20px;
		border: none;
	}
</style>