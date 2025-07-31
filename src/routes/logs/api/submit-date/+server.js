import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const { date } = await request.json();

    console.log(`Recieved date: ${date}`);

    return json({ success: true, received: date });
}