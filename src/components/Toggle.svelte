<script lang="ts">

  import {createEventDispatcher} from 'svelte';

  export let checked:any;// = false;

  const dispatch = createEventDispatcher();

  // function checkboxHandler(ev) {
  //   dispatch('toggle', ev.currentTarget.checked);

  // }
</script>

<input type="checkbox" bind:checked={checked}>


<style>
  input[type=checkbox] {
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  appearance: none;
  outline: none;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(199,5,59,1) 0%, rgba(125,21,43,1) 100%);
  box-shadow: inset 0px 2px 2px rgba(0,0,0,.5);
}

input[type=checkbox]::before {
  display: block;
  content: '';
  position: absolute;
  left: 0px;
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 25px;
  transform: scale(.9);
  transition-duration: .2s;
  box-shadow: inset 0px 2px 2px rgba(0,0,0,.2), inset 0px -2px 2px rgba(0,0,0,.2);
}

input:checked[type=checkbox]::before {
  left:25px;
}

input:checked[type=checkbox] {
  background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(5,199,126,1) 0%, rgba(21,125,85,1) 100%);
}
</style>