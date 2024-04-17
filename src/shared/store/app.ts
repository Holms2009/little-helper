import { writable } from "svelte/store";

export const modalsStore = writable<TModalsStore>({
  show: false,
  content: null,
})