<script lang="ts">
  import block from "bem-cn";
  import { getThemeFromLS, getUserTheme, setActiveTheme } from "./utils";

  const b = block("theme-toggle");

  let theme = getThemeFromLS() || getUserTheme();

  $: setActiveTheme(theme);

  function handleButtonClick() {
    theme = theme === "dark" ? "light" : "dark";
  }
</script>

<button class={b()} on:click={handleButtonClick} title="Переключить тему">
  <div class={b("button", { dark: theme === "dark" })} />
</button>

<style lang="scss">
  @import "./theme-toggle.scss";
</style>
