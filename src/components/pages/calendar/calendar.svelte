<script lang="ts">
  import block from "bem-cn";
  import { addMonth } from "@formkit/tempo";

  import { createDatesArray } from "./utils";
  import { MonthCard, PageHeader } from "@molecules";
  import { DayInfo } from "@organisms";
  import { EMonths } from "@shared/config/calendar";

  const b = block("calendar");
  const currentDate = new Date();

  let activeDate = currentDate;
  let selectedDate = currentDate;

  $: activeYear = activeDate.getFullYear();
  $: activeMonth = activeDate.getMonth();

  function toggleMonth(modifier: "next" | "current" | "prev") {
    const direction = modifier === "next" ? 1 : -1;

    activeDate = addMonth(activeDate, direction);
  }

  function handleMonthChange(evt: CustomEvent<EvtChangeMonthPayload>) {
    toggleMonth(evt.detail.direction);
  }

  function handleDateSelect(evt: CustomEvent<EvtDateSelectPayload>) {
    const { type, date } = evt.detail;

    if (type !== "current") toggleMonth(type);

    selectedDate = date;
  }
</script>

<div class={b()}>
  <PageHeader>
    <div slot="right">Right slot</div>
  </PageHeader>
  <div class={b("content")}>
    <div class={b("month")}>
      <MonthCard
        dates={createDatesArray(activeYear, activeMonth)}
        monthName={EMonths[activeMonth]}
        selectedDate={selectedDate}
        on:change-month={handleMonthChange}
        on:date-select={handleDateSelect}
      />
    </div>
    <div class={b("day-info")}>
      <DayInfo date={selectedDate} />
    </div>
  </div>
</div>

<style lang="scss">
  @import "./calendar.scss";
</style>
