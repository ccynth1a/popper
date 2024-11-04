<!--DESCRIPTION: Monolithic Game Component-->

<script lang="ts">
    import { updateScores } from "$lib/leaderboard";
    import type { Button, Settings_t } from "../types";
    import { onMount } from "svelte"

    let msgs: String[] = [
        "Anvil.",
        "My Grandmother can click faster than your Grandmother.",
        "Paypal Phoebe $30,000 USD",
        "I boppy say something",
        "Bad apple like the toehow?",
        "I boppy score something",
        //"Death to Israel",
        //"Death to America",
    ];
    let msg: String = $state("");

    let { username, settings }: {username: string, settings: Settings_t} = $props()

    let inGame: boolean = $state(false);
    let first: boolean = $state(true);
    let counter = $state(3);

    // Button defined in ../types.ts
    let buttons: Button[] = $state([]);

    let start = Date.now();
    let end: number;
    let elapsed: number = $state(0);
   
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
        msg = msgs[Math.floor(Math.random() * msgs.length)];
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
    
    const formatTime = (milliseconds: number) => {
        const seconds = (milliseconds / 1000).toFixed(3);
        return seconds.toString().padStart(2, "0")
    };

    onMount(() => {
        createButtons();
        generateRandomCircles();
        sleep(1000).then(() => {counter--; sleep(1000).then(() => {counter--; sleep(1000).then(() => {counter--; inGame = true})})});
        start = Date.now()
        first = false;
    })
</script>

<main class="theme-default popper-grid">
    {#if inGame || settings.countdown == false}
        <div class="grid">
            {#each buttons as button}
                <input type="button" class="circle {button.active ? "active" : ""}" onclick={() => handleClick(button.id)} />
            {/each}
        </div>
    {:else}
        <div class="countdown">
            <h1 class="counter">{counter}</h1>
            <p class="counter">{first ? "Welcome To Popper" : msg}</p>
            <p class="counter">{first ? formatTime(elapsed) : ""}</p>
        </div> 
    {/if}
</main>

<style>
</style>