export async function load({ fetch }) {
    const res = await fetch(`${import.meta.env.VITE_SERVER_HOST}/logs/all`);
    const logs = await res.json();

    return { logs };
}