<script>
    export let slides;
    export let index;

	const Restrict = (value, min, max) => {
		if (value >= max) { return min }
		if (value <= min) { return max }

		return value;
    }

    $: index = Restrict(index, 0, slides.length);
	setInterval(() => { index += 1 }, 5000);
</script>

<style>
    img { width: 100%; min-height: 200px }
</style>

<img src="/img/{slides[index]}" alt="Resim {index}"/>