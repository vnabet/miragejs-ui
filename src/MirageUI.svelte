<script lang="ts">

  import MainButton from './components/MainButton.svelte';
  import Popup from './components/Popup.svelte';

  import {opened} from './stores/MirageUI.store';

  document.addEventListener('keydown', (event:KeyboardEvent) => {
    if(event.key === 'Escape' && $opened === true) opened.set(false);
  })
</script>

<div class="mirage">
  <Popup></Popup>
  <MainButton></MainButton>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  :global(body) {
    min-height: 100vh;
  }

  :global(.mirage, .mirage *) {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  .mirage {
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
</style>
