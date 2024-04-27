<script lang="ts">
  import block from "bem-cn";
  import { dayStart } from "@formkit/tempo";
  import { createEventDispatcher } from "svelte";

  import { EMonths } from "@shared/config/calendar";

  export let month: number;
  export let year: number;

  const b = block("month-toggle");
  const dispatch = createEventDispatcher<EvtChangeMonth & EvtDateSelect>();

  function handleButtonClick(direction: "prev" | "next") {
    dispatch("change-month", { direction });
  }

  function handleBulletClick() {
    dispatch("date-select", { date: dayStart(new Date()) });
  }
</script>

<div class={b()}>
  <div class={b("controls")}>
    <button
      class={b("change-month", { prev: true }).mix("inverted")}
      on:click={handleButtonClick.bind(null, "prev")}
    />
    <button class={b("bullet")} on:click={handleBulletClick}> &bull; </button>
    <button
      class={b("change-month", { next: true }).mix("inverted")}
      on:click={handleButtonClick.bind(null, "next")}
    />
  </div>
  <h1 class={b("title-date")}>
    {EMonths[month] + ", " + year}
  </h1>
</div>

<style lang="scss">
  @import "./month-toggle.scss";
</style>
