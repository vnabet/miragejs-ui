<script lang="ts">
  import type { IPet } from "./models/IPet";

  import { JSONEditor } from 'svelte-jsoneditor'



  let pets:IPet[] = [];

  let content = {
    text: undefined, // can be used to pass a stringified JSON document instead
    json: {
      array: [1, 2, 3],
      boolean: true,
      color: '#82b92c',
      null: null,
      number: 123,
      object: { a: 'b', c: 'd' },
      string: 'Hello World'
    }
  }

async function getPets() {
  pets = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((res) => res.json())
}
  
</script>

<main>
  <div class="my-json-editor jse-theme-dark">
    <JSONEditor bind:content mainMenuBar={true} navigationBar={true} indentation={' '} width="1200"></JSONEditor>
  </div>
  
  <button on:click={getPets}>Load Pets</button>
  <ul>
    {#each pets as pet}
    <li >{pet.id} - {pet.name}</li>
    {/each}
  </ul>
</main>

<style>

@import 'svelte-jsoneditor/themes/jse-theme-dark.css';

.my-json-editor {
  /* --jse-font-family: 'Poppins', sans-serif; */
  /* over all fonts, sizes, and colors */
  /* over all fonts, sizes, and colors */
  --jse-theme-color: rgb(5,199,126);
  --jse-theme-color-highlight: rgb(21,125,85);
}
  
</style>