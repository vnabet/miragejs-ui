import { writable, type Writable } from 'svelte/store';

export let opened:Writable<Boolean> = writable(false);