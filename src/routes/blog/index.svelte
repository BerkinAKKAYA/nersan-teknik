<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`)
			.then(r => r.json())
			.then(posts => { return { posts }});
	}
</script>

<script>
	import BlogPost from '../../components/BlogPost.svelte';
	export let posts;
</script>

<style>
	#container {
		display: flex;
		flex-direction: column;
		height: 50vh;
		max-height: 500px;
		overflow-y: auto;
		margin-top: 30px;
	}

	@media (max-width: 700px)
	{
		h1 { text-align: center }
	}
</style>

<svelte:head>
	<title>Blog - Nersan Teknik</title>
</svelte:head>

<h1>BLOG</h1>

<div id="container">
	{#each posts as post}
		<BlogPost content={post} />
	{/each}
</div>