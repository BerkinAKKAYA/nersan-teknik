<script>
	export let segment;
</script>

<style>
	#container {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		width: 1000px;
		max-width: 80vw;
		margin-top: 125px;

		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	img {
		width: 200px;
		display: flex;
		align-items: flex-end;
	}

	nav { display: flex }

	nav a {
		color: #707070;
		background-color: #BEBEBE;

		font-weight: bold;
		font-family: Bison;
		font-size: 1.4em;
		padding: 6px 12px;
		transition: all .2s;
		text-align: center;

		margin-left: 10px;
	}
	nav a:hover { background-color: #ccc; color: #555 }

	@media (max-width: 550px)
	{
		#container {
			flex-direction: column;
			align-items: center
		}

		nav { margin-top: 20px }
		nav a { width: 130px }
	}
	@media (max-width: 400px)
	{
		nav { flex-direction: column }
		nav a { width: 160px; margin-top: 5px }
	}
</style>

<div id="container">
	<a href="/"><img src="/img/logo.png" alt="Logo" /></a>

	<nav>
		<a aria-current="{segment === 'hakkimizda' ? 'page' : undefined}"
		   href="hakkimizda">HAKKIMIZDA</a>
		<a aria-current="{segment === 'blog'  ? 'page' : undefined}"
		   href="blog"rel=prefetch>BLOG</a>
	</nav>
</div>
