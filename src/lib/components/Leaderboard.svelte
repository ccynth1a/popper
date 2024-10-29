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
    });     
</script>

<main>
    <LeaderboardHeader />
    <input id="username-field" type="text">
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


    main {
        width: 30%;
        border-radius: 20px;
        box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
        background-color: #ffffff;
        padding: 20px;
        margin: 15px;
        cursor: pointer;
    }

</style>
