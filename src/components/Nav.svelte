<script>
	export let segment;
</script>

<style>
	div {
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

	img { width: 200px }

	a.link {
		color: #707070;
		background-color: #BEBEBE;

		display: inline-flex;
		align-items: center;
		font-weight: bold;

		font-family: Bison;
		font-size: 1.4em;
		padding: 6px 12px;
		transition: all .2s;
	}
	a.link:hover { background-color: #ccc; color: #555 }
</style>

<div>
	<a href="/"><img src="/img/logo.png" alt="Logo" /></a>

	<nav>
		<a aria-current="{segment === 'hakkimizda' ? 'page' : undefined}"
		   href="hakkimizda"
		   class="link">HAKKIMIZDA</a>
		<a aria-current="{segment === 'blog'  ? 'page' : undefined}"
		   class="link"
		   href="blog"
		   rel=prefetch >BLOG</a>
	</nav>
</div>
