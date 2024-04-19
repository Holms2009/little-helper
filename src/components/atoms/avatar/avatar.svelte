<script lang="ts">
  import block from "bem-cn";

  export let src: string | undefined = undefined;

  const b = block("avatar");
</script>

<div class={b()}>
  {#if src}
    <img class={b("image")} {src} alt="Аватар" />
  {:else}
    <div class={b("placeholder").mix("inverted")} />
  {/if}
</div>

<style lang="scss">
  @import "./avatar.scss";
</style>
