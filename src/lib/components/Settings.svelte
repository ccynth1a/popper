<script>

</script>

<main class = "theme-default">
    <div>
        <h1>Settings</h1>
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

    main {
        color: wheat;
        display: grid;
        height: 95%;
        /* you dont use pixels for width :sob: */
        width: 700px; 
        border-radius: 20px;
        background-color: var(--color6);
        margin: auto;
        justify-content: center;
        /* grid-template-columns: repeat(4, auto); 5 columns */
        gap: 10px; 
        column-gap: 20px;
        padding: 20px; /* padding between circles and edge */
    }
</style>