<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition"
    import PopperButtons from "./Popper-buttons.svelte";
    import { firstReset, randomCircles} from "../button-generation";


    export let activeCircles: boolean[] = Array(20).fill(false); 
    // assign the entry with the id in random circles to true - the final stage of the genration aka applying the randomness
    randomCircles.forEach(
        (array_position) => { // this without a doubt (probably) works, dont check it again probably
            activeCircles[array_position] = true; // update the active circles array to have the correct ones
        }
    )

    // Executed when the component is fully loaded
    onMount(() => {
        // displayScreen("Welcome To Popper!");
        firstReset();
    })
    
</script>


<div class="grid">
    {#each activeCircles as isActive, id}
        <PopperButtons {isActive} button_id={id} > 
        </PopperButtons>
    {/each}

    <!-- {#if showScreen}
    <div class="overlay-screen" transition:fade>
            <p>{message}</p>
        </div>  
        {/if} -->
</div>
        
<style>
    /* .overlay-screen {
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
    } */

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
        padding: 20px;
    }
        
</style>