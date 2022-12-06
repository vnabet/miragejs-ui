<script lang="ts">
  export let label:string = '';
  export let green:boolean = false;
  export let red:boolean = false;

  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  function clickHandler() {
    dispatch('click')
  }
</script>

<button class:green={green} class:red={red} on:click={clickHandler}>{label}</button>

<style>
  button {
    cursor: pointer;
    outline: none;
    border: none;
    display: flex;
    height: 30px;
    min-width: 50px;
    justify-content: center;
    align-items: center;
    font-size: .8em;
    background: lightgray;
    color: #222;
    margin: 0;
    padding: 10px;
    border-radius: 5px;
  }

  button.green {
    color: white;
    background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(5,199,126,1) 0%, rgba(21,125,85,1) 100%);
    
  }

  button.red {
    color: white;
    background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(199,5,59,1) 0%, rgba(125,21,43,1) 100%);
  }
</style>