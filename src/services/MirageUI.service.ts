import type { Server } from 'miragejs';
import {started, serverError} from '../stores/MirageUI.store';
import {get} from 'svelte/store'

export interface IMirageUIService {
  //startServer(serverInitializer?:()=>Server);
  //stopServer();
  init(serverInitializer:()=>Server);
}

class MirageUIService implements IMirageUIService {

  private _serverInitializer:()=>Server;
  private _server:Server | null;

  constructor() {
    started.subscribe((value) => {
      if(value && get(serverError)) {
        started.set(false);
      } else {
        if(value) {
          this._startServer();
        } else {
          this._stopServer();
        }
      }
    })
  }

  public init(serverInitializer:()=>Server) {
    this._serverInitializer = serverInitializer;
    serverError.set('')
    started.set(true);
  }

  private _startServer() {
    if(!this._server) {
      this._server = this._serverInitializer();
      if(!this._server || !this._server.shutdown) {
        serverError.set('Your initializer function must return a MirageJS server');
        this._server = null;
        started.set(false);
      }
    };
  }

  private _stopServer() {
    if(this._server) {
      this._server.shutdown();
      this._server = null;
    }
  }
}

export const mirageUIService:IMirageUIService = new MirageUIService();