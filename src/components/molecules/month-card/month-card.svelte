<script lang="ts">
  import block from "bem-cn";
  import { createEventDispatcher } from "svelte";

  import { isEqual } from "@formkit/tempo";
  import { EDaysOfWeek } from "@shared/config/calendar";

  export let dates: TDate[];
  export let selectedDate: Date;

  const b = block("month-card");
  const dispatch = createEventDispatcher<EvtDateSelect>();

  function handleDateClick(date: Date) {
    dispatch("date-select", { date });
  }
</script>

<div class={b()}>
  <div class={b("days")}>
    {#each Object.keys(EDaysOfWeek).splice(7, 7) as day}
      <div class={b("day")}>
        <span class={b("day-name")}>{day}</span>
      </div>
    {/each}
  </div>
  <div class={b("dates")}>
    {#each dates as date}
      <button
        class={b("date", {
          faded: date.type !== "current",
          today: date.isTooday,
          selected: isEqual(date.fullDate, selectedDate),
        })}
        on:click={() => handleDateClick(date.fullDate)}
      >
        <span class={b("date-number")}>{date.value}</span>
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "./month-card.scss";
</style>
