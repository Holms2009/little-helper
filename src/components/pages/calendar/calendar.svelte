<script lang="ts">
  import block from "bem-cn";
  import { addMonth, dayStart } from "@formkit/tempo";

  import { createDatesArray } from "./utils";
  import { MonthCard, PageHeader } from "@molecules";
  import { DayInfo } from "@organisms";
  import { EMonths } from "@shared/config/calendar";

  const b = block("calendar");

  let activeDate = dayStart(new Date());

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
        selectedDate={activeDate}
        on:change-month={handleMonthChange}
        on:date-select={handleDateSelect}
      />
    </div>
    <div class={b("day-info")}>
      <DayInfo date={activeDate} />
    </div>
  </div>
</div>

<style lang="scss">
  @import "./calendar.scss";
</style>
