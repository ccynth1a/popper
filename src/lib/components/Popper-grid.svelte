<!--DESCRIPTION: Monolithic Game Component-->

<script lang="ts">
    import { updateScores } from "$lib/leaderboard";
    import type { Button, Settings_t } from "../types";
    import { onMount } from "svelte"
    
    let { username, settings }: {username: string, settings: Settings_t} = $props()
    let msgs: String[] = [
        "Anvil.",
        "My Grandmother can click faster than your Grandmother.",
        "Paypal Phoebe $30,000 USD",
        "I boppy say something",
        "Bad apple like the toehow?",
        "I boppy score something",
        "Death to Israel",
        "Death to America",
        "Straight poppin it, and by 'it', well lets just say my popper...",
        "cheese and jam sammich",
        "I use arch btw",
        "My OS is ARCH-based actually 🤓",
        "Why did the apple employee get ejected when they suggested adding windows to the office?",
        "Stay away from the black mould",
        "Also try Minceraft!",
        "Also try Minecraft!",
        "Also try Terraria!",
        "I'll have you know my feet are 10 on wikifeet.",
        "Why didn't the chicken cross the road? Because an anvil fell into the middle of the road.",
        "Checkout my website at 'http://localhost:5173/' guys !!!!",
        "ARM > X86",
        "My apollocheese",
        "I'll krill you...",
        "you wont resprawn...",
        "you shrimplteon.",
        "I'll krill you. you wont resprawn. you shrimplteon.",
        "Slava Ukraine",
        "Visit https://bdsmovement.net/get-involved/what-to-boycott",
        "Trans rights!",
        "I love you aro/ace people!!",
        "Woke popper",
        "Taiwan is a country.",
        "I love all queers",
        "Also try linux",
        "*NIX > Windows",
        "If you aren't someone the church would've killed 400 years ago, are you even living?",
        "Madoka's Rap (minor spoilers)",
        "It was 16:19 when I wrote this.",
        "I probably need some ritalin",
        "I love my wife",
        "I like my wife",
        "My wife is okay",
        "My wife is a demon spawned from hell",
        "Drink some water",
        "Drink some more water",
        "Have you eaten today?",
        "Eat something today",
        "You are valid no matter what!",
        "I had a blister on my left foot's middle toe recently",
        "I love my robot wife",
        "I can smell",
        "My wife is very pretty",
        "Error 404: message not found",
        "Error 403: this message is a seceret from you :p",
        "This is ".concat(username, " from the future. Invest in fried shrimp"),
        "Be gay, do crime",
        "Hatsune Miku",
        "It's shrimple really... 🦐",
        "Hiiiiiiiiiiiiiiiii",
        "That time i reincarnated as message on a popper game made by two devs!",
        "Post that thang! 📐",
        "I boppy cry"
    ];

    let msg: String = $state("");


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
            <h1 id="counter">{counter}</h1>
            <p id="popper-message">{first ? "Welcome To Popper" : msg}</p>
            <p id="elapsed">{first ? "" : formatTime(elapsed)}</p>
        </div> 
    {/if}
</main>

<style>
</style>