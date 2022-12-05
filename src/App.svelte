<script lang="ts">
  import type { IPet } from "./models/IPet";



  let pets:IPet[] = [];

async function getPets() {
  pets = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((res) => res.json())
}
  
</script>

<main>
  <button on:click={getPets}>Load Pets</button>
  <ul>
    {#each pets as pet}
    <li >{pet.id} - {pet.name}</li>
    {/each}
  </ul>
</main>

<style>
  
</style>