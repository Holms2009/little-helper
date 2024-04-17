<script lang="ts">
  import block from "bem-cn";

  export let value: string;
  export let placeholder: string;

  const b = block("input-field");
</script>

<div class={b.mix(`${$$props.class}`)}>
  <input class={b('input')} bind:value placeholder={placeholder}/>
</div>

<style lang="scss">
  @import "./input-field.scss";
</style>
