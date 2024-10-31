<script lang="ts">
    import PopperGrid from "./Popper-grid.svelte";
    import Leaderboard from "./Leaderboard.svelte";
    import Settings from "./Settings.svelte";

    let activepage = $state(0)

    let activetab = $state([
        {
            label : "Popper",
            id : 0
        },
        {
            label : "Leaderboard",
            id : 1
        },
        {
            label : "Settings",
            id : 2
        }
    ]) 

</script>

<div class="componentloader">
    <div class="nav">
        {#each activetab as tab (tab.id) }
            <button class = "navbutton" onclick={ () => {activepage = tab.id}}>
                {tab.label}
            </button>            
        {/each}
    </div>
    <div class="container">
        {#if activepage == 0}
            <PopperGrid/>
        {:else if activepage == 1}
            <Leaderboard/>
        {:else if activepage == 2}
            <Settings/>
        {/if}
    </div>
</div>

<style>
    .componentloader {
        background-color: rgb(120, 40, 40);
        max-width: 800px;
        border-radius: 15px;
        padding-bottom: 10px;
        height: 100%;
    }
    .nav{
        background-color: rgb(100, 40, 40);
        border-radius: 1%;
        height: fit-content;
        flex-direction: row;
        border-radius: 15px 15px 0px 0px;
        padding-left: 5px;
        padding-top: 5px;
        border-color: white;
        border-bottom: 5px;
    }
    .navbutton{
        color: wheat;
        background-color: rgb(100, 40, 40);
        /* border: none; */
        border-color: wheat;
        border-style: solid;
        border-bottom: none;
        height: 33px;
        width: 25%;
        border-radius: 15px 15px 0px 0px;
    }
    .navbutton:hover{
        color: wheat;
        background-color: rgb(120, 40, 40);
        border-color: white;
        height: 33px;
        width: 25%;
        border-radius: 15px 15px 0px 0px;
    }
    .container{
        margin-top: 20px;
        margin-bottom: 20px;
        height: 100%;
    }
</style>