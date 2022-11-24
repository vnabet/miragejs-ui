<script lang="ts">
  let opened:boolean = false;
  function mainButtonHandler():void {
    opened = !opened;
  }
</script>

<div class="mirage">
  <div class:opened={opened}>
    <button class="onoff">
      toggle
    </button>COUCOU
    <input type="checkbox">
  </div>
  <button class:opened={opened} on:click={mainButtonHandler}>
    <svg style="stroke-width:1.5;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="100" viewBox="0 0 100 100" xml:space="preserve">
      <g transform="matrix(0.96 0 0 0.96 50 61.83)"  >
      <path style="stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-37.36, -45.96)" d="M -2.84217094e-14 45.956 L 74.724 45.956" stroke-linecap="round" />
      </g>
      <g transform="matrix(0.96 0 0 0.96 50.04 71.46)"  >
      <path style="stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-37.36, -55.96)" d="M 15.346 55.956 L 59.377 55.956" stroke-linecap="round" />
      </g>
      <g transform="matrix(0.96 0 0 0.96 50.11 81.17)"  >
      <path style="stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-37.36, -65.96)" d="M 30.694 65.956 L 44.029 65.956" stroke-linecap="round" />
      </g>
      <g transform="matrix(0.96 0 0 0.96 65.47 47.32)" id="logo-and-name_svg__logo-and-name_svg__Path"  >
      <polyline style="stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  points="-13.16,-0.46 -3.56,-14.91 13.16,14.91 " />
      </g>
      <g transform="matrix(0.96 0 0 0.96 64.88 29.51)"  >
      <path style="stroke-width: 0;stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-52.66, -12.62)" d="M 52.661 -1.77635684e-15 C 59.8440155 -1.77635684e-15 65.667 5.82298454 65.667 13.006 C 65.667 18.6437838 62.0798555 23.4437451 57.0634462 25.2480043 L 55.1941169 21.9111027 C 59.0746424 20.8093965 61.917 17.2396323 61.917 13.006 C 61.917 7.89405236 57.7729476 3.75 52.661 3.75 C 47.5490524 3.75 43.405 7.89405236 43.405 13.006 C 43.405 15.2129486 44.1773904 17.2394958 45.4665957 18.8300659 L 43.3230653 22.0591357 C 41.0526191 19.7177165 39.655 16.525074 39.655 13.006 C 39.655 5.82298454 45.4779845 -1.77635684e-15 52.661 -1.77635684e-15 Z" stroke-linecap="round" />
      </g>
      <g transform="matrix(0.96 0 0 0.96 42.09 45.18)" id="logo-and-name_svg__logo-and-name_svg__Path"  >
      <polyline style="stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  points="-20.79,17.11 -1.55,-17.11 20.78,17.11 " />
      </g>
  </button>
</div>

<style>
:global(body) {
  min-height: 100vh;
}

.mirage {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 60px 30px 0;
  z-index: 99;
  color: black;
}

.mirage>div {
  width: 200px;
  height: 200px;
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

.mirage>button {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  outline: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: -25px;
  /* margin: 20px; */
  width: 60px;
  height: 60px;
  cursor: pointer;
  background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(5,199,126,1) 0%, rgba(21,125,85,1) 100%);
  opacity: 0.5;
  transform: scale(1);
  border-radius: 50%;
  border: none;
  z-index: 99;
  transition: transform;
  transition-duration: .3s;
  /* border: 1px solid rgb(5,199,126); */
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  /* box-shadow: 0px 0px 15px rgba(5,199,126,.7); */
}

.mirage>button:hover {
  opacity: 1;
  transform: scale(1.05);
}

.mirage>button.opened {
  opacity: 1;
  transform: scale(1);
}

.mirage>button.stopped {
  background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(199,5,59,1) 0%, rgba(125,21,43,1) 100%);
}

.mirage>button svg {
  position: relative;
  width: 95%;
  height: 95%;
  fill: white; stroke: white;
  /* fill: rgb(5,199,126); stroke: rgb(5,199,126);  */
}

.mirage input[type=checkbox] {
  margin: 0;
  padding: 0;
  position: relative;
  display: block;
  appearance: none;
  outline: none;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(199,5,59,1) 0%, rgba(125,21,43,1) 100%);
  box-shadow: inset 0px 2px 2px rgba(0,0,0,.5);
}

.mirage input[type=checkbox]::before {
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

.mirage input:checked[type=checkbox]::before {
  left:25px;
}

.mirage input:checked[type=checkbox] {
  background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(5,199,126,1) 0%, rgba(21,125,85,1) 100%);
}

</style>
