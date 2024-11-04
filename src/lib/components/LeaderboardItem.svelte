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
<main class="theme-default">
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
    main {
        background-color: var(--color1);
        font-size: medium;
        font: Arial;
        border-radius: 15px;
        height: 50%;
    }
    .container{
        display: flex;
    }
    #container-left{
        width: 89%;
        display: flex;
        justify-content: left;
    }
    #container-right{
        width: 10%;
        display: flex;
        justify-content: right;
    }
    #position{
        padding-left: 5px;
        padding-right: 5px;
        background-color: var(--color2);
        border-radius: 5px;
        font-size: large;
        text-align: left;
    }
    #username{
        margin-left: 5px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: var(--color3);
        border-radius: 5px;
        padding-left: 5px;
        text-align: left;
    }
    #score{
        margin-left: 5px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: var(--color1);
        border-radius: 5px;
        padding-right: 5px;
    }
    
</style>

