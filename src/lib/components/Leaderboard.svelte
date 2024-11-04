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
        let usernamefield = document.getElementById("username-field") as HTMLInputElement;
        usernamefield!.addEventListener("input", () => {
            console.log("Input Detected")
            username = usernamefield!.value!;
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
    /*main {
        background-color: rgb(20,20,20);
        border-radius: 32px;
        width: 100%;
        height: auto;
    }*/

</style>