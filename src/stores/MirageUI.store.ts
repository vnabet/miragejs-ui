import { writable, type Writable } from 'svelte/store';


export let opened:Writable<boolean> = writable(false);
export let started:Writable<boolean> = writable(false);
export let serverError:Writable<string> = writable('You have to initialize MirageUI');

