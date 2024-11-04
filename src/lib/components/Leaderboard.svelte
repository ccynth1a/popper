<script lang="ts">
    import { onMount } from "svelte";
    import { updateScores, fetchScores } from "../leaderboard"
    import LeaderboardItem from "./LeaderboardItem.svelte"
    import LeaderboardHeader from "./LeaderboardHeader.svelte"
    
    let scores: object[] = $state([]);
    let username: string = $state("");

    onMount(() => {
        fetchScores().then(fetchedScores => {
            scores = fetchedScores;          
        });

        // Update Leaderboard Periodically
        setInterval(() => fetchScores().then(fetchedScores => {
            scores = fetchedScores;
        }), 1000);
    });     
</script>

<main class="theme-default leaderboard">
    <LeaderboardHeader />
    <!-- <input id="username-field" type="text"> -->
    {#each scores as score, position}
        <LeaderboardItem {position} {score} />
    {/each}
</main>

<style>
</style>