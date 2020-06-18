<svelte:head>
	<title>İletişim - Nersan Teknik</title>
</svelte:head>

<div id="container">
	<section>
		<h2>KONUM</h2>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.166853752005!2d29.193920915387807!3d40.89015467931297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac37b2135a725%3A0xb3ed21e211b85f7d!2sTurkish%20Red%20Crescent%20Kartal%20Anatolian%20High%20School!5e0!3m2!1sen!2str!4v1592484663372!5m2!1sen!2str"
			width="600"
			height="450"
			frameborder="0"
			allowfullscreen=""
			aria-hidden="false"
			tabindex="0"
			title="Harita"></iframe>
	</section>

	<section>
		<h2>FORM</h2>
		...
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