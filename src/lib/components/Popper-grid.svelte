<!--DESCRIPTION: Monolithic Game Component-->

<script lang="ts">
    import { updateScores } from "$lib/leaderboard";
    import type { Button } from "../types";
    import { onMount } from "svelte"

    let { username }: {username: string} = $props()

    let inGame: boolean = $state(false);
    let counter = $state(3);

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
        inGame = false;
        buttons.forEach(button => button.active = false);
        generateRandomCircles()
        counter = 3;
        // Omnissiah forgive me for this technological heresy
        sleep(1000).then(() => {counter--; sleep(1000).then(() => {counter--; sleep(1000).then(() => {counter--; inGame = true})})});
        start = Date.now();
    }

    const sleep = function(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    onMount(() => {
        createButtons();
        generateRandomCircles();
        sleep(1000).then(() => {counter--; sleep(1000).then(() => {counter--; sleep(1000).then(() => {counter--; inGame = true})})});
        start = Date.now()
    })
</script>

<main class="theme-default popper-grid">
    {#if inGame}
        <div class=grid>
            {#each buttons as button}
                <input type="button" class="circle {button.active ? "active" : ""}" onclick={() => handleClick(button.id)} />
            {/each}
        </div>
    {:else}
        <div class="321">
            <p>{counter}</p>
        </div> 
    {/if}
</main>

<style>
</style>