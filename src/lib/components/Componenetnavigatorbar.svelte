<script lang="ts">
    import PopperGrid from "./Popper-grid.svelte";
    import Leaderboard from "./Leaderboard.svelte";
    import Settings from "./Settings.svelte";
    import { onMount } from "svelte"

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
    ]);

    let username = $state("");
    let userNameEntered = $state(false);

    onMount(() => {
        // Do not touch this line, the Omnissiah wills its necessity
        let userNameField: HTMLInputElement = document.getElementById("username-entry-field")! as HTMLInputElement;
        userNameField.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                username = userNameField.value;
                userNameEntered = true;
            }
        })
    });

</script>

<main class="theme-default">
    <div class="componentloader">
        <div class="nav">
            {#each activetab as tab (tab.id) }
                <button class = "navbutton {activepage == tab.id ? "active" : ""} " onclick={ () => {activepage = tab.id}}>
                    {tab.label}
                </button>            
            {/each}
        </div>
        <div class="container">
            {#if userNameEntered}
                {#if activepage == 0}
                    <PopperGrid {username}/>
                {:else if activepage == 1}
                    <Leaderboard/>
                {:else if activepage == 2}
                    <Settings/>
                {/if}
            {:else}
                <input type="text" id="username-entry-field">
            {/if}
        </div>
    </div>
</main>

<style>
    .theme-default {
        --color1: #1446A0;
        --color2: #DB3069;
        --color3: #F5D547;
        --color4: #EBEBD3;
        --color5: #3C3C3B;
        --color6: #2c2c2c;
        --color7: #141414;
    }
    .componentloader {
        background-color: var(--color5);
        max-width: 800px;
        border-radius: 15px;
        padding-bottom: 10px;
        height: 100%;
    }
    .nav{
        background-color: var(--color1);
        border-radius: 1%;
        height: fit-content;
        flex-direction: row;
        border-radius: 15px 15px 0px 0px;
        padding-left: 5px;
        padding-top: 5px;
        /* border-color: white; */
        border-bottom: 5px;
    }
    .navbutton{
        color: var(--color3);
        background-color: var(--color6);
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
        background-color: var(--color5);
        border-color: white;
        height: 33px;
        width: 25%;
        border-radius: 15px 15px 0px 0px;
    }
    .container{
        margin-top: 20px;
        margin-bottom: 20px;
        height: 700px;
    }
    .active{
        color: wheat;
        background-color: var(--color5);
        border-color: white;
        height: 33px;
        width: 25%;
        border-radius: 15px 15px 0px 0px;
    }
</style>