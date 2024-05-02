<script lang="ts">
  import block from "bem-cn";
  import { navigate } from "svelte-routing";

  export let text: string;
  export let href: string;
  export let icon: string | undefined = undefined;
  export let active = false;

  const b = block("side-bar-item");

  function clickHandler() {
    navigate(href);
  }
</script>

<button class={b({ active })} on:click={clickHandler}>
  {#if icon}
    <img class={b("icon").mix('inverted')} src={icon} alt="" />
  {/if}
  <span class={b('text')}>{text}</span>
</button>

<style lang="scss">
  @import "./side-bar-item.scss";
</style>
