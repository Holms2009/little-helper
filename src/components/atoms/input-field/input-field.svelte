<script lang="ts">
  import block from "bem-cn";

  export let type = 'text';
  export let value: string;
  export let placeholder: string;
  export let disabled = false;

  const b = block("input-field");
</script>

<div class={b.mix(`${$$props.class}`)}>
  <input class={b('input')} bind:value placeholder={placeholder} {...{type}} disabled={disabled}/>
</div>

<style lang="scss">
  @import "./input-field.scss";
</style>
