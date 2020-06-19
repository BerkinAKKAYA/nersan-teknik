<script>
    export let content;
</script>

<style>
    .post {
        width: 100%;
        height: 150px;

        display: flex;
        align-items: center;
    }
    .post:not(:nth-last-child(1)) {
        margin-bottom: 25px;
    }

    a { font-size: 1.5em }
    span { margin-top: 15px; display: block }

    img {
        width: 200px;
        height: 100%;
        background-color: white;
        margin-right: 20px;
    }

    @media (max-width: 700px)
    {
        .post {
            flex-direction: column;
            text-align: center;
            height: 250px;
        }
        .post:not(:nth-last-child(1)) {
            margin-bottom: 75px;
        }
        a { margin-top: 20px }
        img {
            margin: 0 0 20px 0;
            height: 150px;
        }
    }
</style>

<div class="post">
    <a rel='prefetch' href='blog/{content.slug}'>
        <img src={content.imageURL} alt="Preview" />
    </a>
    <div class="text">
        <a rel='prefetch' href='blog/{content.slug}'>{content.title}</a>
        <span>{content.description}</span>
    </div>
</div>