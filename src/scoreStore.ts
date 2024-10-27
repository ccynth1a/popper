import { writable } from "svelte/store";

const createScoreStore = () => {
    const { subscribe, set, update } =  writable([]);

    return {
        subscribe,
        addScore: (score) => update(scores => {
            const newScores = [...scores, score];
            newScores.sort((a,b) => a.time - b.time);
            newScores.slice(0,10);
            return newScores;
        }),
        reset: () => set([])
    }
}

export const scoreStore = createScoreStore();