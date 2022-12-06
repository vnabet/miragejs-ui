
import './app.css'
import App from './App.svelte'

import {mirageUI} from './MirageUI';
import {mirageJSServer} from './MirageJS.server';


mirageUI.init(mirageJSServer)

const app = new App({
  target: document.getElementById('app')
})

export default app
