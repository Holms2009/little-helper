<script lang="ts">
  import block from "bem-cn";

  import { daysOfWeek, months } from "@shared/config/calendar";
  import { createDatesArray } from "./utils";
  import { createEventDispatcher } from "svelte";

  export let year: number;
  export let month: number;

  const b = block("month");
  const dispatch = createEventDispatcher();

  $: dates = createDatesArray(year, month);

  function handleButtonClick(direction: string) {
    dispatch("change-month", { direction });
  }
</script>

<div class={b()}>
  <div class={b("header")}>
    <button class={b("button", { prev: true })} on:click={() => handleButtonClick('prev')} />
    <div class={b("name")}>
      <span class={b("name-value")}
        >{months.find((item) => item.number === month)?.name}</span
      >
    </div>
    <button class={b("button", { next: true })} on:click={() => handleButtonClick('next')} />
  </div>
  <div class={b("days")}>
    {#each daysOfWeek as day}
      <div class={b("day")}>
        <span class={b("day-name")}>{day.name}</span>
      </div>
    {/each}
  </div>
  <div class={b("dates")}>
    {#each dates as date}
      <div class={b("date", { faded: date.type !== "current" })}>
        <span class={b("date-number")}>{date.value}</span>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "./month.scss";
</style>
