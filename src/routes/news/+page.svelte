<script>
    export let data;
</script>

<h1>Latest News</h1>
{#each data.news.data as article}
    <div class="flex flex-col m-2 p-2 items-center justify-center">
        <h2>{article.creator}</h2>
        <p>{article.content}</p>
        <a href={article.guid}>GUID: {article.guid}</a>
    </div>
{/each}
<a href="/">Back</a>