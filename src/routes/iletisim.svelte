<svelte:head>
	<title>İletişim - Nersan Teknik</title>
	
	<script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
	<link href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<script>
	import { onMount } from 'svelte';

	onMount(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoiYmVya2luYWtrYXlhIiwiYSI6ImNrYmtybzN2cDExemoycm81bnoxejFpcXcifQ.QCc240chJiGiRmxCE5udkg';
		
		let map = new mapboxgl.Map({
			container: 'map', // container id
			style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9 // starting zoom
		});
	})
</script>

<div id="container">
	<section>
		<h2>KONUM</h2>
		<div id="map"></div>
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

	#map {
		width: 100%;
		min-width: 200px;
		max-width: 400px;
		height: 200px;
		margin-top: 30px;
	}
</style>