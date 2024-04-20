<script lang="ts">
  import { modalsStore } from "@store";
  import block from "bem-cn";
  import { navigate } from "svelte-routing";

  export let buttonText = "";
  export let buttonIcon: string | undefined = undefined;
  export let menu: TDropDownMenuItem[];

  const b = block("drop-down-menu");

  let opened = false;

  function handleButtonClick(value: boolean) {
    opened = value;
  }

  function hanleItemClick(target: string | TModalWindows, isModal: boolean) {
    if (isModal) {
      modalsStore.set({ show: true, content: target as TModalWindows });
    } else {
      navigate(target);
    }

    opened = false;
  }
</script>

<svelte:window on:click={() => opened && handleButtonClick(false)} />

<!-- svelte-ignore a11y-interactive-supports-focus -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={b()} on:click|stopPropagation role="menu">
  <button class={b("button")} on:click={() => handleButtonClick(!opened)}>
    {#if buttonIcon}
      <img class={b("button-icon").mix("inverted")} src={buttonIcon} alt="" />
    {/if}
    <span class={b("button-text")}>{buttonText}</span>
  </button>
  <div class={b("menu", { opened })}>
    <ul class={b("list")}>
      {#each menu as item}
        <li class={b("item")}>
          <button
            class={b("item-button")}
            on:click={() => hanleItemClick(item.target, item.targetModal)}
          >
            {item.value}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  @import "./drop-down-menu.scss";
</style>
