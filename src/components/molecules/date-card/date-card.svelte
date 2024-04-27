<script lang="ts">
  import block from "bem-cn";
  import { createEventDispatcher } from "svelte";

  export let date: TDate;

  const b = block("date-card");
  const dispatch = createEventDispatcher<EvtDateSelect & EvtChangeView>();

  function handleDateClick() {
    dispatch("date-select", { date: date.fullDate });
    dispatch("change-view", { view: 'day' });
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={b({ faded: date.type !== "current", today: date.isTooday })}
  on:click={handleDateClick}
>
  <div class={b("date")}>
    {date.value}
  </div>
</div>

<style lang="scss">
  @import "./date-card.scss";
</style>
