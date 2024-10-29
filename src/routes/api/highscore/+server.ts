import { json } from "@sveltejs/kit"

let highscore: number = 0;

export async function GET() {
     return json(highscore)
}

export async function POST(event) {
    const { user, score } = await event.request.json()

    if (score > highscore) {
        highscore = score
    }

    return json(highscore)
}