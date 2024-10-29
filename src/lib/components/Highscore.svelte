<script>
    import { onMount } from "svelte";
    import { updateScore, fetchScore } from "../leaderboard"
    
    let score = $state(0);

    onMount(() => {
        fetchScore().then(fetchedScore => {
            score = fetchedScore;          
        });
    });     
</script>

<h1>Leaderboard</h1>

<h2>Current Leaderboard</h2>
<p>SCORE = {score}</p>

<input id="username-field" type="text">
<style>
    
</style>
