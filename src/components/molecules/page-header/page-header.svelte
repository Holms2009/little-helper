<script lang="ts">
  import block from "bem-cn";

  const b = block("page-header");
</script>

<section class={b()}>
  <div class={b('left')}>
    <slot name="left"/>
  </div>
  <div class={b('center')}>
    <slot name="center"/>
  </div>
  <div class={b('right')}>
    <slot name="right"/>
  </div>
</section>

<style lang="scss">
  @import "./page-header.scss";
</style>
