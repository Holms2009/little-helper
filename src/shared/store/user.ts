import { writable } from "svelte/store";

export const authStore = writable<TAuthData>();

export const userStore = writable();