import { json } from "@sveltejs/kit"
type ScoreListing = {
    username: string;
    score: number;
}

let scores: ScoreListing[] = [
    {
        username: "Ophiuhcus",
        score: 901,
    },
    {
        username: "CClestial",
        score: 954,
    },
    {
        username: "P1NIT",
        score: 1031,
    },
    {
        username: "willow",
        score: 1281,
    },
    {
        username: "Scarlet",
        score: 5744,
    },
    {
        username: "Crime-Person",
        score: 5142,
    },
    {
        username: "Skye",
        score: 6331,
    },
    {
        username: "Sam",
        score: 5142,
    },
    {
        username: "Kamel",
        score: 7712,
    }
]

const sortScores = function() {
    return scores.sort((a,b) => a.score - b.score).slice(0,9);
}

const findUsernameIndex = function(user: string) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i].username == user) {
            return i;
        }
    }
    return null;
}

export async function GET() {
     return json(sortScores())
}

export async function POST(event) {
    const { user, score } = await event.request.json()

    if(scores.some((element) => {
        return element.username == user;
    })) {
        let current: number = findUsernameIndex(user)!;
        if (scores[current].score > score) {
            scores[current].score = score;
        } 
    } else {
        scores.push({username: user, score: score});
    }
    console.log(scores)

    return json(sortScores())
}
