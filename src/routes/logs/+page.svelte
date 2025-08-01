<script>
    export let data;
    let logs = data.logs;
    let date = data.selectedDate;
    let newDate = "";

    const submitDate = async () => {
        const [year, month, day] = newDate.split("-").map(Number);
        const utcMs = Date.UTC(year, month - 1, day);

        const res = await fetch("/logs/api/submit-date", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(utcMs),
        });
        const jsonData = await res.json();

        console.log(jsonData);

        if (jsonData) {
            console.log("No JSON on return");
        } else {
            logs = jsonData.logs;
            date = jsonData.selectedDate;
        }
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