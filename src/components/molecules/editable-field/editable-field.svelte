<script lang="ts">
  import block from "bem-cn";

  import { InputField } from "@atoms";

  export let label: string;
  export let value: string | undefined = undefined;

  let isEditMode = false;
  let bindValue = value ? value : undefined;

  const b = block("editable-field");

  function handleButtonClick() {
    isEditMode = !isEditMode;

    if (bindValue === '') bindValue = undefined;
  }

  function handleAddClick() {
    isEditMode = true;
    bindValue = '';
  }
</script>

<div class={b({ "edit-mode": isEditMode })}>
  <span class={b("label")}>{label}</span>
  {#if bindValue !== undefined}
    <div class={b("field-wrapper")}>
      {#if !isEditMode}
        <p class={b("value")}>{value}</p>
      {:else}
        <InputField bind:value={bindValue} focusOnInit/>
      {/if}
      <button
        class={b("button").mix("inverted")}
        on:click={handleButtonClick}
      />
    </div>
  {:else}
    <button class={b("add").mix('inverted')} on:click={handleAddClick}/>
  {/if}
</div>

<style lang="scss">
  @import "./editable-field.scss";
</style>
