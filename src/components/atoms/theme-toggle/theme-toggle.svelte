<script lang="ts">
  import block from "bem-cn";
  import { getThemeFromLS, getUserTheme, setActiveTheme } from "./utils";

  const b = block("theme-toggle");

  let theme = getThemeFromLS() || getUserTheme();

  $: setActiveTheme(theme);

  function handleButtonClick() {
    theme = theme === 'dark' ? 'light' : 'dark';
  }
</script>

<div class={b()} title="Переключить тему">
  <button
    class={b("button", { dark: theme === 'dark' })}    
    on:click={handleButtonClick}
  />
</div>

<style lang="scss">
  @import "./theme-toggle.scss";
</style>
