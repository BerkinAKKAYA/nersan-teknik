<script>
    export let slides;
    export let index;
	
    const INTERVAL = 5000; // 5 Seconds

    const Clamp = (value, min, max) => {
	if (value >= max) { return min }
	if (value <= min) { return max }

	return value;
    }

    $: index = Clamp(index, 0, slides.length-1);
    setInterval(() => { index += 1 }, INTERVAL);
</script>

<style>
    img { width: 100%; min-height: 200px }
</style>

<img src="/img/{slides[index]}" alt="Resim {index}"/>
