import { writable, type Writable } from 'svelte/store';


export let opened:Writable<boolean> = writable(false);
export let started:Writable<boolean> = writable(false);

