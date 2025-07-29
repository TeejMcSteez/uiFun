
export async function load({ fetch }) {
    const res = await fetch(`${import.meta.env.VITE_SERVER_HOST}/news/all`);
    const news = await res.json();

    return { news };
}