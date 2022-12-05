import type {Server} from 'miragejs';
import MirageUIComponent from './MirageUI.svelte';

export default class MirageUI {
  private static _instance:MirageUI;
  
  private static _app:MirageUIComponent;

  serverInitializer:()=>Server;
  server:Server;

  private constructor(serverInitializer?:()=>Server) {
    if(!MirageUI._app) {
      MirageUI._app = new MirageUIComponent({
        target: document.body
      });

      this.serverInitializer = serverInitializer;

      this.server = serverInitializer();
    }
  }

  public static Init(serverInitializer?:()=>Server):MirageUI {
    if(!MirageUI._instance) {
      MirageUI._instance = new MirageUI(serverInitializer);
    }
    return MirageUI._instance;
  }
}