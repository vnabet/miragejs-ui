<script lang="ts">
  import Toggle from './Toggle.svelte';
  import Button from './Button.svelte';

  import {opened, started, serverError} from '../stores/MirageUI.store';
  import {mirageUIService} from '../services/MirageUI.service';

  function dumpDB() {
    mirageUIService.dump();
  }
</script>

<div class:opened={$opened} class="popup">
  <div class="header">MirageUI</div>
  <div class="content">
    {#if $serverError}
      <p class="error">{$serverError}</p>
    {:else} 
      <div>
        <Toggle bind:checked={$started} label="Server started"></Toggle>
      </div>

      <div>
        <Button label="db dump" on:click={dumpDB} green></Button>
      </div>
    {/if}
  </div>
</div>

<style>
  .popup {
    width: 200px;
    height: 200px;
    /* padding: 5px; */
    background-color: white;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 15px;
    box-shadow: 15px 15px 40px rgba(0,0,0,.2);
    transition: all;
    transition-duration: .5s;
    transform: translateX(1000px) ;
    opacity: 0;
    position: relative;
  }

  .popup.opened {
    transform: translateX(0);
    opacity: 1;
  }

  .header {
    height: 2rem;
    background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(5,199,126,1) 0%, rgba(21,125,85,1) 100%);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px 15px 0 0;
    color: white;
  }

  .content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .error {
    color: rgb(199,5,59);
  }
</style>