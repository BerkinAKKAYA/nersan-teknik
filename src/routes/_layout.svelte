<script>
	import Nav from '../components/Nav.svelte';

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
		
		background-color: rgba(42, 38, 43, 0.15)
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 50px;
		box-sizing: border-box;
	}

	.iletisim { display:flex; align-items: center;}
	.iletisim a { margin-left: 10px }

	.lang { cursor: default }
	.lang a { opacity: .7; transition: opacity .1s }
	.lang a:hover { opacity: 1 }

	footer img{ width: 28px}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<div class="iletisim">
		<img src="img/red-phone.png" alt="PHONE">
		<a href="iletisim">İletişim bilgileri için tıklayınız.</a>
	</div>
	<div class="lang">
		<a href="#"><img src="img/tr.png" alt="TR"></a>
		<a href="#"><img src="img/en.png" alt="EN"></a>
	</div>
</footer>