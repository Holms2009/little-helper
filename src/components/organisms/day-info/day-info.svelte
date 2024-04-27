<script lang="ts">
  import block from "bem-cn";

  import { AddEventMenu } from "@molecules";
  import { EMonthsGenitive } from "@shared/config/calendar";

  export let date: Date;

  const b = block("day-info");
</script>

<section class={b()}>
  <div class={b("header")}>
    <div class={b("date")}>
      <span class={b("date-value")}>{date.getDate()}</span>
      <span class={b("date-value")}>{EMonthsGenitive[date.getMonth()]}</span>
      <span class={b("date-value")}>{date.getFullYear()}г.</span>
    </div>
    <div class={b("buttons")}>
      <AddEventMenu />
    </div>
  </div>
  <div class={b('content')}>

  </div>
</section>

<style lang="scss">
  @import "./day-info.scss";
</style>
