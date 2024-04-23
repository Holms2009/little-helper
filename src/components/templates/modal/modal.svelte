<script lang="ts">
  import block from "bem-cn";

  import { SignInForm, SignUpForm } from "@molecules";
  import { modalsStore } from "@store";

  export let content: TModalWindows;

  const b = block("modal");
  const children = [
    { type: "signin", component: SignInForm },
    { type: "signup", component: SignUpForm },
  ];

  $: component = children.find((item) => item.type === content)?.component;

  function closeModal() {
    modalsStore.set({ show: false, content: null });
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<section class={b()} on:click|self={closeModal} role="dialog">
  <div class={b("content")}>
    <svelte:component this={component} on:close-modal={closeModal}/>
    <button class={b("close").mix('inverted')} on:click={closeModal} />
  </div>
</section>

<style lang="scss">
  @import "./modal.scss";
</style>
