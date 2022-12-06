import type { IPet } from './models/IPet';
import './app.css'
import App from './App.svelte'

import {mirageUI} from './MirageUI';
import {createServer, Server} from "miragejs";


function serverMirage():Server {
  return createServer({
    routes() {
      this.urlPrefix = 'https://petstore.swagger.io';
      this.namespace = '/v2';
  
      this.get('/pet/findByStatus',(schema, request):IPet[] => {
        console.log(request.queryParams);
        return [
          {name: 'TOTO', id: 123},
          {name: 'TITI', id: 124},
          {name: 'TUTU', id: 125},
          {name: 'TATA', id: 126},
  
        ]
      })
    }
  })
}

mirageUI.init(serverMirage)

const app = new App({
  target: document.getElementById('app')
})

export default app
