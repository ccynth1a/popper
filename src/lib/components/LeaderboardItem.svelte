<script lang="ts">
    export let position;
    export let score;
    // let colors: string[] = ["red", "green", "blue", "yellow"];
    // let color = colors[position%5];
</script>
<!-- style="background-color: {color}" -->
<main>
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
                {score.score}
            </div>
        </div>
    </div> 
</main>

<style>
    main {
        background-color: rgb(40, 40, 40);
        font-size: medium;
        font: Arial;
        border-radius: 15px;
        /* width: 500px; */
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
        background-color: grey;
        border-radius: 5px;
        font-size: large;
        text-align: left;
    }
    #username{
        margin-left: 5px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: grey;
        border-radius: 5px;
        padding-left: 5px;
        text-align: left;
    }
    #score{
        margin-left: 5px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: grey;
        border-radius: 5px;
        padding-right: 5px;
    }
    
</style>

