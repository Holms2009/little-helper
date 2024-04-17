<script lang="ts">
  import { LinkButton } from "@atoms";
  import { authStore, modalsStore } from "@store";
  import block from "bem-cn";

  const b = block("auth-block");
  let auth: TAuthData | undefined;

  authStore.subscribe((data) => (auth = data));

  function handleSignInClick() {
    modalsStore.set({ show: true, content: "signin" });
  }

  function handleSignUpClick() {
    modalsStore.set({ show: true, content: "signup" });
  }
</script>

<div class={b()}>
  {#if !auth}
    <div class={b("no-user")}>
      <LinkButton on:click={handleSignInClick}>Вход</LinkButton>
      <LinkButton on:click={handleSignUpClick}>Регистрация</LinkButton>
    </div>
  {:else}
    <div class={b("user")}></div>
  {/if}
</div>

<style lang="scss">
  @import "./auth-block.scss";
</style>
