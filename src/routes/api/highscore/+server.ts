import { json } from "@sveltejs/kit"
type ScoreListing = {
    username: string;
    score: number;
}

let scores: ScoreListing[] = [
    {
        username: "Tim",
        score: 3,
    },
    {
        username: "Sam",
        score: 13142,
    },
    {
        username: "Jane",
        score: 12,
    }
]

const sortScores = function() {
    return scores.sort((a,b) => a.score - b.score).slice(0,11);
    
}

export async function GET() {
     return json(sortScores())
}

export async function POST(event) {
    const { user, score } = await event.request.json()

    if (score > scores[0]) {
        scores[0] = score;
    }

    scores.push(user, score);

    return json(sortScores())
}
