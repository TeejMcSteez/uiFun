import { VITE_SERVER_HOST } from '$env/static/private';

export const load = async ({ url }) => {
    const now = Date.now();

    console.log(`Fetching logs from ${VITE_SERVER_HOST}/logs/${now}`)

    const res = await fetch(`${VITE_SERVER_HOST}/logs/${now}`);

    if (!res.ok) {
        return {
            logs: [],
            error: `Failed to load logs: ${res.status}`,
        };
    }

    const logs = await res.json();

    return {
        logs,
        selectedDate: new Date(now).toISOString().split('T')[0]
    };
}