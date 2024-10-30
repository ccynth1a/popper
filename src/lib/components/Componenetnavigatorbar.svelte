<script lang="ts">
    import PopperGrid from "./Popper-grid.svelte";
    import Leaderboard from "./Leaderboard.svelte";

    let page = $state(0)
    const pageChanger = function(page_req: number) {
        page = page_req
    }

</script>

<div class="componentloader">
    <div class="nav">
        <button class = "navbutton" onclick={ () => page = 0}>
            Popper
        </button>
        <button class = "navbutton" onclick={ () => page = 1}>
            Leaderboard
        </button>
    </div>
    <div class="container">
        {#if page == 0}
            <PopperGrid/>
        {:else}
            <Leaderboard/>
        {/if}
    </div>
</div>

<style>
    .componentloader {
        background-color: rgb(122, 39, 39);
        max-width: 800px;
        border-radius: 1%;
    }
    .nav{
        background-color: rgb(52, 128, 163);
        border-radius: 1%;
        border-width: 50px;
        border-color: aqua;
        height: fit-content;
        flex-direction: column;
    }
    .navbutton{
        border: none;
        height: 33px;
        width: 25%;
        margin-top: 5px;
        margin-left: 5px;
        border-radius: 10px 10px 0px 0px;
    }
    .container{
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>