<script lang="ts">

  import MainButton from './components/MainButton.svelte';
  import Toggle from './components/Toggle.svelte';

  import {opened, started} from './stores/MirageUI.store';

  function startstop(ev:CustomEvent) {
    started.set(ev.detail);
  }


  document.addEventListener('keydown', (event:KeyboardEvent) => {
    if(event.key === 'Escape' && $opened === true) opened.set(false);
  })
</script>

<div class="mirage">
  <div class:opened={$opened}>
    <Toggle checked={$started} on:toggle="{startstop}"></Toggle>
    Vincent
  </div>
  <MainButton started={$started}></MainButton>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  :global(body) {
    min-height: 100vh;
  }

  .mirage {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0 60px 30px 0;
    z-index: 99;
    color: black;
  }

  .mirage * {
    box-sizing: border-box;
  }

  .mirage>div {
    width: 200px;
    height: 200px;
    padding: 5px;
    background-color: white;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 15px;
    box-shadow: 15px 15px 40px rgba(0,0,0,.2);
    transition: all;
    transition-duration: .5s;
    transform: translateX(1000px) ;
    opacity: 0;
  }

  .mirage>div.opened {
    transform: translateX(0);
    opacity: 1;
  }
</style>
