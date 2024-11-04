import { j as json } from './index2-BIAFQWR9.js';

let scores = [
  {
    username: "Ophiuhcus",
    score: 901
  },
  {
    username: "CClestial",
    score: 954
  },
  {
    username: "P1NIT",
    score: 1031
  },
  {
    username: "willow",
    score: 1281
  },
  {
    username: "Scarlet",
    score: 5744
  },
  {
    username: "Crime-Person",
    score: 5142
  },
  {
    username: "Skye",
    score: 6331
  },
  {
    username: "Sam",
    score: 5142
  },
  {
    username: "Kamel",
    score: 7712
  }
];
const sortScores = function() {
  return scores.sort((a, b) => a.score - b.score).slice(0, 9);
};
const findUsernameIndex = function(user) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].username == user) {
      return i;
    }
  }
  return null;
};
async function GET() {
  return json(sortScores());
}
async function POST(event) {
  const { user, score } = await event.request.json();
  if (scores.some((element) => {
    return element.username == user;
  })) {
    let current = findUsernameIndex(user);
    if (scores[current].score > score) {
      scores[current].score = score;
    }
  } else {
    scores.push({ username: user, score });
  }
  console.log(scores);
  return json(sortScores());
}

export { GET, POST };
//# sourceMappingURL=_server.ts-CkpcKJps.js.map
