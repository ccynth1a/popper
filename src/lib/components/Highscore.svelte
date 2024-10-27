<script>
    import { onMount } from "svelte";
    import { scoreStore } from "../../scoreStore";

    let scores = [];

    // honestly not sure what these do, they were in the tutorial
    const unsub = scoreStore.subscribe(value => {
        scores = value;
    });

    onMount(() => {
        return () => {
            unsub()
        }
    })


</script>

<h1>Leaderboard</h1>

<h2>Current Leaderboard</h2>
<ul>
    {#each scores as score, index}
        <li>{index+1}: {score.time.toFixed(2)} seconds</li>
    {/each}
</ul>

<style>
    
</style>
