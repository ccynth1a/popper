<script lang="ts">
    import PopperGrid from "./Popper-grid.svelte";
    import Leaderboard from "./Leaderboard.svelte";
    import Settings from "./Settings.svelte";
    import type { Settings_t } from "../types"
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

    let settings: Settings_t =  $state({
        countdown: true
    })

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
        // username = "no"
        // userNameEntered = true;
    });

</script>

<main class="theme-default popper-main-style">
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
                    <PopperGrid {username} {settings}/>
                {:else if activepage == 1}
                    <Leaderboard/>
                {:else if activepage == 2}
                    <Settings/>
                {/if}
            {:else}
                <div class="username-entry">
                    <p class="usernameprompt">Enter a username...</p>
                    <input type="text" id="username-entry-field">
                </div>
            {/if}
        </div>
    </div>
</main>

<style>
</style>