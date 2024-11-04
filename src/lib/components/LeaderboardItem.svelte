<script lang="ts">
    export let position;
    export let score;
    // let colors: string[] = ["red", "green", "blue", "yellow"];
    // let color = colors[position%5];
    const formatTime = (milliseconds: number) => {
        const seconds = (milliseconds / 1000).toFixed(3);

        return seconds.toString().padStart(2, "0")
    };
</script>
<!-- style="background-color: {color}" -->
<main class="theme-default leaderboarditem">
    <div class="container" >
        <div id="container-left">
            <div id="position">
                {position+1}
            </div>
            <div id="username">
                {score.username}
            </div>
        </div>
        <div id="container-right">
            <div id="score">
                {formatTime(score.score)}
            </div>
        </div>
    </div> 
</main>

<style>

</style>

