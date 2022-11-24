import './app.css'
import App from './App.svelte'

import MirageUI from './MirageUI'

console.log(MirageUI.Init())

const app = new App({
  target: document.getElementById('app')
})

export default app
