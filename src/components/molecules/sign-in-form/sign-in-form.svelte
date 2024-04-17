<script lang="ts">
    import { userSignIn } from "@api";
  import { Button, InputField } from "@atoms";
  import block from "bem-cn";

  const b = block("sign-in-form");

  let email = "";
  let password = "";

  async function handleButtonClick() {
    if (email && password) {
      const res = await userSignIn(email, password);

      console.log(res.user.uid);
    }
  }
</script>

<section class={b()}>
  <h2 class={b("title")}>Вход</h2>
  <form class={b("form")}>
    <InputField bind:value={email} placeholder="Email" />
    <InputField bind:value={password} placeholder="Пароль" />
    <Button text="Войти" on:click={handleButtonClick}/>
  </form>
</section>

<style lang="scss">
  @import "./sign-in-form.scss";
</style>
