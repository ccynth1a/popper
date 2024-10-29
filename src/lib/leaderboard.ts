export async function updateScore(username: string, score: number) {
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
    
    
    parsed = await response.json();
    highScore = parse.highscore;
    return highScore;
}

export async function fetchScore() {
    const response = await fetch('/api/highscore', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    let highScore = await response.json();
    return highScore;
}

