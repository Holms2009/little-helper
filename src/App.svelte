<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import { SideBar } from "@organisms";
  import { Modal } from "@templates";
  import { Main, Calendar, Notes } from "@pages";
  import { modalsStore } from "@store";

  let modals: TModalsStore;

  modalsStore.subscribe((data) => (modals = data));
</script>

<Router>
  <div class="app">
    <SideBar />
    <div class="app__page-content">
      <Route path="/" component={Main} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/notes" component={Notes} />
    </div>
    {#if modals.show && modals.content}
      <Modal content={modals.content}/>
    {/if}
  </div>
</Router>
