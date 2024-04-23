<script lang="ts">
  import block from "bem-cn";
  import { createEventDispatcher } from "svelte";
  import type { UserCredential } from "firebase/auth";
  import type { FirebaseError } from "firebase/app";

  import { Button, InputField } from "@atoms";
  import { setUserData, signUpNewUser } from "@api";

  let pending = false;

  let email = "";
  let name = "";
  let password = "";
  let repeatPassword = "";
  let errors: { [index: string]: string } = {};

  const b = block("sign-up-form");
  const dispatch = createEventDispatcher<{ "close-modal": null }>();

  async function handleFormSubmit(evt: SubmitEvent) {
    evt.preventDefault();
    pending = true;
    errors = {};

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;

    if (!emailRegex.test(email)) {
      errors.email = "Некорректный email";
    }

    if (!passwordRegex.test(password)) {
      errors.password =
        "Пароль должен быть не менее 6 символов и содержать как минимум одну букву и одну цифру";
    }

    if (password !== repeatPassword) {
      errors.repeatPassword = "Пароли не совпадают";
    }

    if (Object.keys(errors).length) {
      pending = false;
      return;
    }

    try {
      await signUpNewUser(email, password)
        .then(async (data: UserCredential) => {
          const userData = { uid: data.user.uid, name, email };          

          await setUserData(data.user.uid, userData);
        })
        .then(() => {
          pending = false;
          dispatch("close-modal");
        });
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        errors.email = 'Пользователь с таким email уже существует';
      }

      pending = false;
    }
  }
</script>

<section class={b()}>
  <h2 class={b("title")}>Регистрация</h2>
  <form class={b("form")} on:submit={handleFormSubmit}>
    <InputField
      bind:value={email}
      type="email"
      placeholder="Email"
      disabled={pending}
      required
      error={errors.email || ""}
    />
    <InputField
      bind:value={name}
      placeholder="Имя"
      disabled={pending}
      required
    />
    <InputField
      bind:value={password}
      type="password"
      placeholder="Пароль"
      disabled={pending}
      error={errors.password || ""}
      required
    />
    <InputField
      bind:value={repeatPassword}
      type="password"
      placeholder="Повторите пароль"
      disabled={pending}
      error={errors.repeatPassword || ""}
      required
    />
    <Button text="Отправить" type="submit" disabled={pending} />
  </form>
</section>

<style lang="scss">
  @import "./sign-up-form.scss";
</style>
