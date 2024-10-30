<script>
    // import { handleClick } from "./Popper-grid.svelte";
    // import PopperGrid, { handleClick } from "./Popper-grid.svelte";
    import { handleClick } from "../button-generation";

    let { isActive, button_id } = $props()

</script>

<button class="circle {isActive ? 'active' : ''}" onclick={ () => handleClick(button_id)}>
    <!-- on:click={() => handleClick(button_id)} -->
    <!-- {button_id} -->
</button>

<style>
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