<script lang="ts">
  import block from "bem-cn";
  import { addMonth } from "@formkit/tempo";

  import { Month, PageHeader } from "@molecules";

  const b = block("calendar");

  let currentDate = new Date();
  let selectedDate = currentDate;

  function handleMonthChange(evt: CustomEvent) {
    const direction = evt.detail.direction === "next" ? 1 : -1;

    selectedDate = addMonth(selectedDate, direction);
  }
</script>

<div class={b()}>
  <PageHeader>
    <div slot="right">
      Right slot
    </div>
  </PageHeader>
  <div class={b('month')}>
    <Month
      year={selectedDate.getFullYear()}
      month={selectedDate.getMonth()}
      on:change-month={handleMonthChange}
    />
  </div>
</div>

<style lang="scss">
  @import "./calendar.scss";
</style>
