<script lang="ts">
  import block from "bem-cn";
  import { createEventDispatcher } from "svelte";

  const b = block("link-button");
  const dispatch = createEventDispatcher<{ click: null }>();
</script>

<button class={b()} on:click={() => dispatch('click')}>
  <slot />
</button>

<style lang="scss">
  @import "./link-button.scss";
</style>
