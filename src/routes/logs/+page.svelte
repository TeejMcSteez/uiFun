<script>
    export let data;
    let logs = data.logs;
    let date = data.selectedDate;
    let newDate = null;

    const submitDate = async () => {
        const res = await fetch("/logs/api/submit-date", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDate),
        });
        const jsonData = await res.json();

        console.log(jsonData);
    }

    console.log(logs);
</script>

<h1>Logs</h1>
<h2>Date: {date}</h2>
<form on:submit|preventDefault={submitDate}>
    <input type="date" bind:value={newDate}>
    <button type="submit">Submit</button>
</form>
{#each logs.data as log}
<div class="m-2 p-2">
    <p>Time: {log.timestamp}</p>
    <p>Worker: {log.worker}</p>
    <p>Component: {log.component}</p>
    <p>{log.log}</p>
</div>
{/each}