<script lang="ts">
  import block from "bem-cn";

  export let type = "text";
  export let value: string;
  export let placeholder: string;
  export let disabled = false;
  export let error = "";
  export let required = false;

  let inputEl: HTMLInputElement;  

  const b = block("input-field");
</script>

<div class={b()}>
  <input
    class={b("input", { error: error.length !== 0 })}
    {required}
    bind:this={inputEl}
    bind:value
    {placeholder}
    {disabled}
    {...{ type }}
  />
  {#if error.length}
    <p class={b("error-message")}>{error}</p>
  {/if}
</div>

<style lang="scss">
  @import "./input-field.scss";
</style>
