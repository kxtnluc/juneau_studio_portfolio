<script lang="ts">
  export let onClick: (e: MouseEvent) => void = () => {};
  export let Varient:string = "primary";
</script>

<button class="b-button {Varient}" onclick={onClick}>
  <slot></slot>
</button>

<style>
    .b-button{
        font-size: 1.2vw;
        font-weight: 700;
        width: 6vw;
        height: 2vw;
        border-radius: 5px;
        transition: 250ms;
    }

    .b-button:hover{
        cursor: pointer;
        opacity: 85%;
    }

    .primary{
        background-color: var(--color-primary);
        color: var(--color-contrast);
    }

    .contrast{
        background-color: var(--color-contrast);
        color: var(--color-primary);
    }
</style>
