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
</style>