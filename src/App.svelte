<script lang="ts">
  import { onAuthStateChanged } from "firebase/auth";
  import { Router, Route } from "svelte-routing";

  import { auth, getUserCalendar, getUserData } from "@api";
  import { SideBar } from "@organisms";
  import { Modal } from "@templates";
  import { Main, Calendar, Notes } from "@pages";
  import { modalsStore, userCalendarStore, userStore } from "@store";

  let modals: TModalsStore;
  let user: TUserData | null;
  let calendar: TUserCalendar | null;

  modalsStore.subscribe((data) => (modals = data));
  userStore.subscribe((data) => (user = data));
  userCalendarStore.subscribe((data) => (calendar = data));

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const data = await getUserData(user.uid);
      const calendar = await getUserCalendar(user.uid);

      userStore.set(data);
      userCalendarStore.set(calendar);
    } else {
      userStore.set(null);
      userCalendarStore.set(null);
    }
  });
</script>

<Router>
  <div class="app">
    <SideBar />
    <div class="app__page-content">
      <Route path="/" component={Main} />
      <Route path="/calendar">
        <Calendar {calendar} />
      </Route>
      <Route path="/notes" component={Notes} />
    </div>
    {#if modals.show && modals.content}
      <Modal content={modals.content} />
    {/if}
  </div>
</Router>
