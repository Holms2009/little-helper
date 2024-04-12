<script lang="ts">
  import block from "bem-cn";
  import { navigate } from "svelte-routing";

  export let text: string;
  export let href: string;
  export let active = false;

  const b = block("side-bar-item");

  function clickHandler() {
    navigate(href);
  }
</script>

<button class={b({ active })} on:click={clickHandler}>
  {text}
</button>

<style lang="scss">
  @import "./side-bar-item.scss";
</style>
