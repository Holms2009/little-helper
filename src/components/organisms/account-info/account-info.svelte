<script lang="ts">
  import { EditableField } from "@molecules";
  import block from "bem-cn";

  export let user: TUserData;

  const b = block("account-info");
</script>

<section class={b()}>
  <div class={b("column")}>
    <EditableField label="Email" value={user.email} />
    <EditableField label="Телефон" value="" />
    <EditableField label="Имя пользвателя" value={user.name} />
  </div>
</section>

<style lang="scss">
  @import "./account-info.scss";
</style>
