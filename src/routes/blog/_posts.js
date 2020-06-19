const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		description: 'This post explains what is sapper.',
		imageURL: 'img/placeholder-image.jpg',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},
	{
		title: 'Ozon nedir?',
		slug: 'ozon-nedir',
		description: 'Ozon Nedir ve Nerelerde Kullanılır...',
		imageURL: 'img/ozon-nedir.jpg',
		html: `
		<h1>Ozon Nedir?</h1>
		<p>Ozon; 3 adet oksijen atomunun yüksek voltaj altında birleşerek meydana getirdiği keskin kokulu, renksiz ve kararsız bir gazdır. Oda sıcaklığında hammaddesi olan oksijene dönüşür. Çok güçlü okside etme ve dezenfekte özelliği nedeniyle ticari kullanımı olan doğal tek dezenfektandır.</p>
		<h2><strong>Ozon’un özellikleri:</strong></h2>
		<ul><li>Bilinen en güçlü oksidandır.</li><li>Çevre dostu bir gazdır.</li><li>Kimyasal madde gerektirmez ve içermez.</li><li>Antibakteriyeldir.</li><li>Bakteri, küf, spor, jerm ve mantar oluşumunu engeller ve yok eder.</li><li>Havada üreyen her türlü bakteri (airborne bacteria) oluşumunu engeller.</li><li>Tüm mikroorganizmaların oluşumunu engeller ve yok eder.</li><li>Kimyasal madde kullanımı sonucu kalan artıkları yok eder.</li><li>Ozon gazı klora göre 3125 kat daha etkilidir. Çok hızlı tesir eder.</li><li>Kullanım sonrası tortu, kalıntı bırakmaz.</li><li>Gıda korumasında kullanılması tehlike içermez.</li><li>Haşerat ve zararlıların çoğalmasını önler.</li></ul>
		`
	},
	{
		title: 'Why the name?',
		slug: 'why-the-name',
		description: 'This post explains what is sapper.',
		imageURL: 'img/placeholder-image.jpg',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},
	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		description: 'This post explains what is sapper.',
		imageURL: 'img/placeholder-image.jpg',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},
	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		description: 'This post explains what is sapper.',
		imageURL: 'img/placeholder-image.jpg',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => { post.html = post.html.replace(/^\t{3}/gm, '') });
export default posts;
