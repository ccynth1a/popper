export async function updateScores(username: string, score: number) {
    console.log(username)
    console.log(score)
    const response = await fetch('/api/highscore', {
        method: "POST",
        body: JSON.stringify({
            user: username,
            score: score,
        }),
        headers: {
            'content-type': 'application/json'
        }
    });
    
    
    let scores = await response.json();
    return scores;
}

export async function fetchScores() {
    const response = await fetch('/api/highscore', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    let scores = await response.json();
    return scores;
}

