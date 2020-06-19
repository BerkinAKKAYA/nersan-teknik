<script>
	import { language } from '../language.js';
    let lang = null;
	language.subscribe(value => { lang = value });
	
	const TURKCE = `
		<p>
			Elektrik, elektrik yüklerinin akışına dayanan bir dizi fiziksel
			olaya verilen isimdir. Elektrik sözcüğü Türkçeye Fransızcadan
			geçmiştir. Elektriğin Türkçe eş anlamlısı çıngı sözcüğüdür.
			Ayrıca Anadolu ağızlarında elektrik anlamında yaldırayık sözcüğü
			tespit edilmiştir. Elektrik, pek çok farklı şekillerde var olabilir.
			Örneğin, yıldırımlar, durgun elektrik, Elektromanyetik indüksiyon ve
			elektrik akımı gibi. Ek olarak, elektrik Elektromanyetik radyasyon,
			Radyo dalgaları gibi şeylerin oluşumuna da izin verir.
		</p>
		<p>
			Elektrikte, elektrik yükleri diğerleri ile de etkileşime giren
			Elektromanyetik alanlar yaratır. Elektrik, pek çok fiziksel durumdan
			dolayı var olabilir
		</p>
	`

	const ENGLISH = `
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Maecenas vehicula gravida commodo. Sed eget iaculis urna.
			Phasellus eu mi sit amet nisi venenatis dapibus. Vestibulum
			vulputate nibh porta facilisis vulputate. Ut suscipit quam turpis,
			vitae hendrerit elit euismod sed. Mauris rhoncus vulputate hendrerit.
			Phasellus fringilla quam nec ligula maximus vulputate. Pellentesque
			habitant morbi tristique senectus et netus et malesuada fames ac turpis
			egestas. Aliquam id augue erat. Curabitur et odio lacus. Fusce enim libero,
			mattis rhoncus odio in, cursus vulputate lorem.
		</p>
		<p>
			Aenean porttitor est vitae velit bibendum congue. Suspendisse potenti.
			Quisque venenatis eros ac justo luctus, eget finibus nunc convallis.
			In viverra risus in libero tempor pellentesque. Donec eu semper leo.
			Etiam porttitor faucibus posuere. Nulla a mattis mauris. Suspendisse
			massa nisl, semper id accumsan id, finibus non elit. Maecenas eleifend
			nulla non urna tristique mattis. Integer hendrerit turpis vel metus
			volutpat, id cursus justo luctus. Fusce ut elit vitae purus elementum
			posuere. Donec at nulla bibendum, congue turpis in, ultrices dui.
		</p>
	`
</script>

<style>
	:global(h1) { margin-bottom: 10px }
	:global(p) {
		font-size: 1.1em;
		line-height: 1.8em;
		text-align: justify;
		text-indent: 2em;
		margin-top: 20px;
		padding-right: 20px;
	}

	#container {
		max-height: 480px;
		overflow-y: auto;
	}

	@media (max-width: 700px)
	{
		h1 { text-align: center }
	}
</style>

<svelte:head>
	<title>Hakkımızda - Nersan Teknik</title>
</svelte:head>

<div id="container">
	<h1>{#if lang=='tr'}HAKKIMIZDA{:else}ABOUT US{/if}</h1>
	{#if lang=='tr'}
	{@html TURKCE}
	{:else}
	{@html ENGLISH}
	{/if}
	<p style="text-align:right"><b><i>Nersan Teknik</i></b></p>
</div>