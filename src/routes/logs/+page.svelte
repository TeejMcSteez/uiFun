<script>
    export let data;
    let logs = data.logs;
    let date = data.selectedDate;
    console.log(logs);
</script>

<h1>Logs</h1>
<h2>Date: {date}</h2>
{#each logs.data as log}
<div class="m-2 p-2">
    <p>Time: {log.timestamp}</p>
    <p>Worker: {log.worker}</p>
    <p>Component: {log.component}</p>
    <p>{log.log}</p>
</div>
{/each}