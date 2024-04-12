<script lang="ts">
    import { EMonthsGenitive } from "@shared/config/calendar";
  import block from "bem-cn";

  export let date: Date;

  const b = block("day-info");
</script>

<section class={b()}>
  <div class={b('header')}>
    <div class={b('date')}>
      <span class={b('date-value')}>{date.getDate()}</span>
      <span class={b('date-value')}>{EMonthsGenitive[date.getMonth()]}</span>
      <span class={b('date-value')}>{date.getFullYear()}г.</span>
    </div>
  </div>
</section>

<style lang="scss">
  @import './day-info.scss'; 
</style>
