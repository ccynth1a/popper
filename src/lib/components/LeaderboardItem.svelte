<script lang="ts">
    export let position;
    export let score;


    // let colors: string[] = ["red", "green", "blue", "yellow"];
    // let color = colors[position%5];
</script>
<!-- style="background-color: {color}" -->
<main>
    <div class="container" >
        <p>{position+1}: {score.username} {score.score}</p>
    </div> 
</main>

<style>
    main {
        background-color: rgb(40, 40, 40);
        font-size: medium;
        border-radius: 15px;
    }
    
</style>

