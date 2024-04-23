<script lang="ts">
  import block from "bem-cn";
  import { createEventDispatcher } from "svelte";

  import { userSignIn } from "@api";
  import { Button, InputField } from "@atoms";

  const b = block("sign-in-form");
  const dispatch = createEventDispatcher<{ "close-modal": null }>();

  let email = "";
  let password = "";
  let pending = false;

  async function handleFormSubmit(evt: SubmitEvent) {    
    evt.preventDefault();

    if (email && password) {
      pending = true;

      await userSignIn(email, password).then(() => {
        pending = false;
        dispatch("close-modal");
      });
    }
  }
</script>

<section class={b()}>
  <h2 class={b("title")}>Вход</h2>
  <form class={b("form")} on:submit={handleFormSubmit}>
    <InputField bind:value={email} placeholder="Email" disabled={pending}/>
    <InputField bind:value={password} type="password" placeholder="Пароль" disabled={pending}/>
    <Button text="Войти" type="submit" disabled={pending}/>
  </form>
</section>

<style lang="scss">
  @import "./sign-in-form.scss";
</style>
