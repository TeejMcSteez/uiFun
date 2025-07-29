<script>
    export let data;
</script>

<h1>Logs</h1>
{#each data.logs.data as log}
    <div class="flex flex-col items-center justify-center m-2 p-2">
        <h1 class="text-2xl">{log.name}</h1>
        <p>{log.message}</p>
        <footer>{log.created_at}</footer>
    </div>
{/each}