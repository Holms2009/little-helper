<script lang="ts">
  import block from "bem-cn";
  import { useLocation } from "svelte-routing";

  import { SideBarItem, ThemeToggle } from "@atoms";
  import { AuthBlock } from "@molecules";
  import { mainMenu } from "@shared/config/mainMenu";

  const b = block("side-bar");

  let location = useLocation();

</script>
<div class={b()}>
  <AuthBlock />
  <div class={b("menu")}>
    {#each mainMenu as item}
      <SideBarItem {...item} active={item.href === $location.pathname} />
    {/each}
  </div>
  <div class={b("bottom")}>
    <span>Цветовая тема:</span>
    <ThemeToggle />
  </div>
</div>

<style lang="scss">
  @import "./side-bar.scss";
</style>
