import { writable } from "svelte/store";

export const userStore = writable<TUserData | null>(null);
export const userCalendarStore = writable<TUserCalendar | null>(null);