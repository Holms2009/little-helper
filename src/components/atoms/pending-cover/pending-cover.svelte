<script lang="ts">
  import block from "bem-cn";

  export let active = false;

  const b = block("pending-cover");
</script>

<div class={b({ active })}></div>

<style lang="scss">
  @import "./pending-cover.scss";
</style>
