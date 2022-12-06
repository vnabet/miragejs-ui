import type { IPet } from '../models/IPet';
import {createServer, Model, Server, RestSerializer, Factory} from "miragejs";

import db from './db';

export function mirageJSServer():Server {
  const serializer = RestSerializer.extend({root: false, embed: true});

  const server = createServer({
    serializers: {
      application: serializer
    },
    models: {
      pet: Model
    },
    // factories: {
    //   pet: Factory.extend({
    //     name() {
    //       return this.name + 'CPIII'
    //     }
    //   })
    // },
    routes() {
      this.urlPrefix = 'https://petstore.swagger.io';
      this.namespace = '/v2';
  
      this.get('/pet/findByStatus',(schema, request) => {
        console.log(request.queryParams);
        //console.log('dump', server.db.dump())
        return schema.all('pet');
      })
    }
  })

  server.db.loadData(db);

  return server;
}