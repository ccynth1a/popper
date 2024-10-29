<script lang="ts">
    export let position;
    export let score;


    let colors: string[] = ["red", "green", "blue", "yellow"];
    let color = colors[position%5];
</script>

<main>
    <div class="container" style="background-color: {color}">
        <p>{position+1}: {score.username} {score.score}</p>
    </div> 
</main>

<style>
    main {
        margin-bottom: 10px;
        font-size: large;
        border-radius: 10px;
    }
    
</style>

