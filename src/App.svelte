<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import { SideBar } from "@organisms";
  import { Main, Calendar, Notes } from "@pages";
</script>

<Router>
  <div class="app">
    <SideBar />
    <div class="app__page-content">
      <Route path="/" component={Main} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/notes" component={Notes} />
    </div>
  </div>
</Router>
