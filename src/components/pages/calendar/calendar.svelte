<script lang="ts">
  import block from "bem-cn";
  import { addMonth, dayStart } from "@formkit/tempo";

  import { createDatesArray } from "./utils";
  import { MonthToggle } from "@atoms";
  import { DateCard, MonthCard, PageHeader } from "@molecules";
  import { DayInfo } from "@organisms";
  import { EDaysOfWeek } from "@shared/config/calendar";

  export let calendar: TUserCalendar | null;

  const b = block("calendar");

  let activeDate = dayStart(new Date());
  let view: TUiViews = "month";

  $: activeYear = activeDate.getFullYear();
  $: activeMonth = activeDate.getMonth();

  function toggleMonth(value: number) {
    activeDate = addMonth(activeDate, value);
  }

  function handleMonthChange({ detail }: CustomEvent<EvtChangeMonthPayload>) {
    toggleMonth(detail.direction === "next" ? 1 : -1);
  }

  function handleDateSelect({ detail }: CustomEvent<EvtDateSelectPayload>) {
    activeDate = detail.date;
  }

  function handeleViewChange({ detail }: CustomEvent<EvtChangeViewPayload>) {
    view = detail.view;
  }
</script>

<div class={b()}>
  <PageHeader>
    <MonthToggle
      slot="left"
      month={activeMonth}
      year={activeYear}
      on:change-month={handleMonthChange}
      on:date-select={handleDateSelect}
    />
  </PageHeader>
  <div class={b("content")}>
    <div class={b("subtitle")}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    {#if view === "month"}
      <div class={b("full-view")}>
        <div class={b("week-days")}>
          {#each Object.keys(EDaysOfWeek).splice(7, 7) as day}
            <div class={b("day")}>
              <span class={b("day-name")}>{day}</span>
            </div>
          {/each}
        </div>
        <div class={b("dates")}>
          {#each createDatesArray(activeYear, activeMonth) as date}
            <DateCard
              {date}
              on:date-select={handleDateSelect}
              on:change-view={handeleViewChange}
            />
          {/each}
        </div>
      </div>
    {:else}
      <div class={b("day-view")}>
        <MonthCard
          dates={createDatesArray(activeYear, activeMonth)}
          selectedDate={activeDate}
          on:date-select={handleDateSelect}
        />
        <DayInfo date={activeDate} />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "./calendar.scss";
</style>
