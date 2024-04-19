<script lang="ts">
  import block from "bem-cn";

  export let text: string;
  export let type: 'button' | 'submit' = 'button';
  export let disabled = false;

  const b = block("button");
</script>

<button class={b()} type={type} on:click disabled={disabled}>
  {text}
</button>

<style lang="scss">
  @import './button.scss';
</style>
