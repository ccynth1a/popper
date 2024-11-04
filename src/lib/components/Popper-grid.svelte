<!--DESCRIPTION: Monolithic Game Component-->

<script lang="ts">
    import { updateScores } from "$lib/leaderboard";
    import type { Button } from "../types";
    import { onMount } from "svelte"

    let { username }: {username: string} = $props()

    // Button defined in ../types.ts
    let buttons: Button[] = $state([]);

    let start = Date.now();
    let end: number;
    let elapsed: number;
   
    // Fill all buttons with false
    const createButtons = function() {
        for (let i = 0; i < 20; i++) {
            buttons[i] = {
                id: i,
                active: false,
            }
        }
    }

    // When a button is clicked, either make it dissappear, or reset the game. Win condition on no buttons left
    const handleClick = function(id: number) {
        console.log(id)
        if (buttons[id].active) {
            buttons[id].active = false;  

            // Check win condition
            if (!(buttons.some(button => {
                return button.active
            }))) {
                triggerReset(true) 
            }
        } else {
            triggerReset(false);
        }
    }

    const generateRandomCircles = function() {
        let randomCircles = new Set<number>();
        
        while (randomCircles.size <= 7) {
            randomCircles.add(Math.floor(Math.random() * 20));
        }

        // Random Circles have been generated, now update numbers array
        for (const circle of randomCircles) {
            buttons[circle].active = true;
        }
    }

    const triggerReset = function(win: boolean) {
        if (win) {
            end = Date.now()
            elapsed = end - start;
            updateScores(username, elapsed);
        }
        buttons.forEach(button => button.active = false);
        generateRandomCircles()
    }

    onMount(() => {
        start = Date.now()
        createButtons();
        generateRandomCircles()
    })
</script>

<main>
<div class=grid>
    {#each buttons as button}
        <input type="button" class="circle {button.active ? "active" : ""}" onclick={() => handleClick(button.id)} />
    {/each}
</div>
</main>

<style>
    .grid {
        display: grid;
        height: 100%;
        /* you dont use pixels for width :sob: */
        width: 700px; 
        border-radius: 20px;
        background-color: rgb(20, 20, 20);
        margin: auto;
        justify-content: center;
        grid-template-columns: repeat(4, auto); /* 5 columns */
        gap: 10px; 
        column-gap: 20px;
        padding: 20px; /* padding between circles and edge */
    }
    .circle {
        width: 150px; 
        height: 150px;
        border-radius: 50%; /* makes it a circle */
        background-color: rgb(40, 40, 40); /* circle color */
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
        border: none;
        color: wheat;
    }

    .circle.active {
        transform: scale(0.95); 
        background-color: rgb(200, 0, 0);
    }
</style>