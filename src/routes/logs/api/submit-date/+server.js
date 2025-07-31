import { json } from "@sveltejs/kit";
import { VITE_SERVER_HOST } from "$env/static/private";

export async function POST({ request }) {
    const date = await request.json();

    console.log(`Recieved date: ${date}`);
    const seconds = new Date(date).toUTCString();
    console.log(`UTC Time: ${seconds}`);

    const res = await fetch(`${VITE_SERVER_HOST}/logs/${seconds}`);

    if (!res.ok) {
        return json({
            logs: [],
            error: `Failed to load logs: ${res.status}`
        });
    }

    const logs = await res.json();

    return json({
        logs,
        selectedDate: new Date(seconds).toISOString().split('T')[0]
    });
}