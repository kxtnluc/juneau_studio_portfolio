<script lang="ts">
    import MiscIcons from "./icons/MiscIcons.svelte";

    export let onClick: (e: MouseEvent) => void = () => {};
    export let Varient: string = "primary";

    export let icon: string = "";
    export let size: string = "m";
    export let icon_placement: string = "before";
    export let Type: "button" | "submit" | "reset" = "button"; 
</script>

{#if icon == ""}
    <button class="b-button size-{size} {Varient}" onclick={onClick} type={Type}>
        <slot></slot>
    </button>
{:else if icon_placement != "after"}
    <button class="b-button-icon {Varient}" onclick={onClick} type={Type}>
        <div class="icon">
            <MiscIcons type={icon} size="btn" />
        </div>
        <div class="text">
            <slot></slot>
        </div>
    </button>
{:else}
    <button class="b-button-icon {Varient}" onclick={onClick} type={Type}>
        <div class="text">
            <slot></slot>
        </div>
        <div class="icon">
            <MiscIcons type={icon} size="btn" />
        </div>
    </button>
{/if}

<style>
    .b-button {
        font-size: 1.2vw;
        font-weight: 700;
        padding-left: 0.5vw;
        padding-right: 0.5vw;
        height: 2vw;
        border-radius: 5px;
        transition: 250ms;
    }

    .b-button:hover {
        cursor: pointer;
        opacity: 85%;
    }

    .b-button-icon {
        display: flex;
        justify-content: center;
        font-weight: 700;
        transition: 250ms;
    }
    
    .b-button-icon:hover {
        cursor: pointer;
        opacity: 85%;
    }
    
    .size-m{
        font-size: 1.2vw;
        padding-left: 0.5vw;
        padding-right: 0.5vw;
        height: 2vw;
        border-radius: 5px;
    }

    .size-l{
        font-size: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2.75rem;
        border-radius: 5px;
    }

    .icon, .text{
        align-self: center;
        margin-left: 0.25vw;
        margin-right: 0.25vw;
    }

    .primary {
        background-color: var(--color-primary);
        color: var(--color-contrast);
    }

    .contrast {
        background-color: var(--color-contrast);
        color: var(--color-primary);
    }

</style>
