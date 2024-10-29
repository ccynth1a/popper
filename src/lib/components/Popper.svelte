<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition"

    // Ending Card Messages
    let messages: string[] = [
        "So Close!",
        "Anvil.",
        "Tip: Click The Circles",
    ];
    let message: string = "";

    // Last Clicked Circle + Array of values pertaining to status of said circles
    let clickedCircle = null;
    let clickedCircles: boolean[] = Array(20).fill(false)

    // Currently active circles
    let activeCircles: boolean[] = Array(20).fill(false); // all circles are set to be inactive

    // Timing
    let start = Date.now();
    let end = Date.now();
    let elapsed;

    let showScreen = false;
    const handleClick = function(index: number) {
        clickedCircle = index;
        if (activeCircles[index])
            clickedCircles[index] = true;
        console.log(`I clicked ${clickedCircle}`);
        console.log(clickedCircles)

        // Handle Win Condition
        if (arrayComparison(clickedCircles, activeCircles)) {
            end = Date.now()
            elapsed = end - start;
            console.log(elapsed); // Log time
            console.log("You Win!")
            triggerReset();
        }
    }

    // Compare two arrays
    const arrayComparison = function(array1: any[], array2: any[]) {
        if (array1.length == array2.length) {
            return array1.every( (item, index) => {
                if (item == array2[index]) {
                    return true;
                } else {
                    return false;
                }
            })
        } else {
            return false;
        }
    }

    // Self explanatory
    const setRandomCircles = function() {
        // Start By Setting The Array to False
        activeCircles = Array(20).fill(false);

        const numActiveCircles = 7; // adjusted as needed, no issues caused by changing
        const randomCircles = new Set<number>();

        while (randomCircles.size < numActiveCircles) {
            randomCircles.add(Math.floor(Math.random() * 20))
        }
        
        randomCircles.forEach( (index) => {
            activeCircles[index] = true; // update the active circles array to have the correct ones
        })
    }
   
    // Display the red screen (currently only on-fail implemented) with optional custom message
    const displayScreen = function(customMsg: any = undefined) {
        showScreen=true;
        if (customMsg == undefined) {
            message = messages[Math.floor(Math.random() * messages.length)];
        } else {
            message = customMsg;
        }
    }

    // Reset the lgoic and begin a new game
    const triggerReset = function() {
        displayScreen();
        setTimeout(() => {
            showScreen = false;
        }, 3000)
        clickedCircles = Array(20).fill(false);
        setRandomCircles();
        start = Date.now()
    }
    
    // this is clunky but fuck you
    const firstReset = function() {
        setTimeout(() => {
            showScreen = false;
        }, 3000)
        clickedCircles = Array(20).fill(false);
        setRandomCircles();
        start = Date.now()
    }
    
    // Executed when the component is fully loaded
    onMount(() => {
        displayScreen("Welcome To Popper!");
        firstReset();
    })
</script>

<style>
    .overlay-screen {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: red;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        z-index: 10;
    }

    .grid {
        display: grid;
        height: 100%;
        width: 700px;
        border-radius: 20px;
        background-color: grey;
        margin: auto;
        justify-content: center;
        grid-template-columns: repeat(4, auto); /* 5 columns */
        gap: 10px; 
        column-gap: 20px;
        padding: 20px;
    }

    .circle {
        width: 150px; 
        height: 150px;
        border-radius: 50%; /* makes it a circle */
        background-color: black; /* circle color */
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
    }

    .circle.active {
        transform: scale(0.95); 
        background-color: red;
    }
</style>

<div class="grid">
  {#each activeCircles as isActive, id}
    <button 
      class="circle {isActive ? 'active' : ''}" 
      on:click={() => handleClick(id)}> <!--Initialise the elements with an ID, on click they call the click handler function with their own id--> 
    </button>
  {/each}

  {#if showScreen}
    <div class="overlay-screen" transition:fade>
        <p>{message}</p>
    </div>  
  {/if}
</div>