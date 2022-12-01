<script lang="ts">

  import MainButton from './components/MainButton.svelte';
  import Toggle from './components/Toggle.svelte';

  let opened:boolean = false;
  function mainButtonHandler():void {
    opened = !opened;
  }
</script>

<div class="mirage">
  <div class:opened={opened}>
    <Toggle></Toggle>
  </div>
  <MainButton></MainButton>
</div>

<style>
:global(body) {
  min-height: 100vh;
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
