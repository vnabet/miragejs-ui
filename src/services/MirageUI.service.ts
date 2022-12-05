import type { Server } from 'miragejs';
import {started} from '../stores/MirageUI.store';

export interface IMirageUIService {
  startServer(serverInitializer?:()=>Server);
  stopServer();
}

class MirageUIService implements IMirageUIService {

  private _serverInitializer:()=>Server;
  private _server:Server | null;

  public startServer(serverInitializer?:()=>Server) {
    this._serverInitializer = serverInitializer || this._serverInitializer;

    this._server = this._server || this._serverInitializer();

    started.set(true);
  }

  public stopServer() {
    this._server?.shutdown();
    this._server = null;
    started.set(false);
  }
}

export const mirageUIService:IMirageUIService = new MirageUIService();