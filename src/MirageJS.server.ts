import type { IPet } from './models/IPet';
import {createServer, Server} from "miragejs";

export function mirageJSServer():Server {
  return createServer({
    routes() {
      this.urlPrefix = 'https://petstore.swagger.io';
      this.namespace = '/v2';
  
      this.get('/pet/findByStatus',(schema, request):IPet[] => {
        console.log(request.queryParams);
        return [
          {name: 'TOTO N', id: 123},
          {name: 'TITI O', id: 124},
          {name: 'TUTU P', id: 125},
          {name: 'TATA Q', id: 126},
  
        ]
      })
    }
  })
}