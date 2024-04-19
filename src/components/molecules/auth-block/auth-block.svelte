<script lang="ts">
  import block from "bem-cn";
  import { navigate } from "svelte-routing";

  import { userSignOut } from "@api";
  import { Avatar, LinkButton } from "@atoms";
  import { modalsStore, userStore } from "@store";

  const b = block("auth-block");
  let user: TUserData | null;

  userStore.subscribe((data) => (user = data));

  function handleSignInClick() {
    modalsStore.set({ show: true, content: "signin" });
  }

  function handleSignUpClick() {
    modalsStore.set({ show: true, content: "signup" });
  }

  function handleUserClick() {
    navigate("/account");
  }

  async function handleSignOutClick() {
    const res = await userSignOut();
  }
</script>

<div class={b()}>
  {#if !user}
    <div class={b("no-user")}>
      <LinkButton on:click={handleSignInClick}>Вход</LinkButton>
      <LinkButton on:click={handleSignUpClick}>Регистрация</LinkButton>
    </div>
  {:else}
    <div class={b("user")}>
      <div class={b("user-wrapper")}>
        <Avatar />
        <LinkButton on:click={handleUserClick}>{user.name}</LinkButton>
      </div>
      <button
        class={b("sign-out")}
        on:click={handleSignOutClick}
        title="Выход"
      />
    </div>
  {/if}
</div>

<style lang="scss">
  @import "./auth-block.scss";
</style>
