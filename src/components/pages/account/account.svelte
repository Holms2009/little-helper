<script lang="ts">
  import { PageHeader } from "@molecules";
  import { userStore } from "@store";
  import block from "bem-cn";

  const b = block("account");

  let user: TUserData | null;

  userStore.subscribe((data) => (user = data));
</script>

<section class={b()}>
  <PageHeader>
    <h1 class={b("title-name")} slot="left">{user?.name}</h1>
  </PageHeader>

  <div class={b("content")}>
    <div class={b()}></div>
  </div>
</section>

<style lang="scss">
  @import "./account.scss";
</style>
