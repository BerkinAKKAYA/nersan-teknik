<script>
	import Slider from '../components/Slider.svelte';
	import { language } from '../language.js';

	const uvc = [ 'placeholder-image.jpg' ];
	const ozon = [ 'placeholder-image.jpg' ];
	const references = [ 'placeholder-image.jpg'];

	let uvcIndex=0;
	let ozonIndex=0;
	let refIndex=0;
	let controller = false;

	const LeftArrow  = () => {
		uvcIndex -= !controller ? 1 : 0;
		ozonIndex -= controller ? 1 : 0;
		controller = !controller;
	}
	const RightArrow = () => {
		uvcIndex += !controller ? 1 : 0;
		ozonIndex += controller ? 1 : 0;
		controller = !controller;
	}

	let lang = null;
	language.subscribe(value => { lang = value });
</script>

<style>
	#container {
		display: grid;
		grid-template-columns: 3fr 1fr;
		column-gap: 50px;
		row-gap: 50px;

		max-height: 480px;
		overflow-y: auto;
	}

	h2 {
		margin-bottom: 20px;
		font-family: Bison;
		color: #707070;
	}

	#products h2 { padding-left: 50px }

	#products #slider {
		display: grid;
		grid-template-columns: 30px 1fr 30px;
		column-gap: 20px;
		align-items: center;
	}
	#products #slider #inner-slide-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 10px;
		row-gap: 10px;
	}
	
	#products #slider *,
	#references * { max-width: 100%; max-height: 100% }

	.arrow { width: 100%; cursor: pointer }
	.arrow::selection { display: none }

	@media (max-width: 700px) {
		h2 { text-align: center }
		#products h2 { padding: 0 }
		#references {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center
		}
		#container {
			grid-template-columns: 1fr;
		}
		#products #slider #inner-slide-container {
			grid-template-columns: 1fr;
		}
	}
</style>

<svelte:head>
	<title>Nersan Teknik</title>
</svelte:head>

<div id="container">
	<div id="products">
		<h2>{#if lang=="tr"}ÜRÜNLER{:else}PRODUCTS{/if}</h2>
		<div id="slider">
			<img src="/img/left-arrow.png"  alt="sol" class="arrow" on:click={LeftArrow} />

			<div id="inner-slide-container">
				<div class="slide"><Slider slides={uvc} bind:index={uvcIndex} /></div>
				<div class="slide"><Slider slides={ozon} bind:index={ozonIndex} /></div>
			</div>

			<img src="/img/right-arrow.png" alt="sağ" class="arrow" on:click={RightArrow} />
		</div>
	</div>
	<div id="references">
		<h2>{#if lang=="tr"}REFERANSLAR{:else}REFERENCES{/if}</h2>
		<Slider slides={references} bind:index={refIndex} />
	</div>
</div>