import type {Server} from 'miragejs';
import MirageUIComponent from './MirageUI.svelte';

export default class MirageUI {
  private static _instance:MirageUI;
  
  private static _app:MirageUIComponent;

  private constructor(server?:Server) {
    MirageUI._app = new MirageUIComponent({
      target: document.body
    });
  }

  public static Init(server?:Server):MirageUI {
    if(!MirageUI._instance) {
      MirageUI._instance = new MirageUI(server);
    }
    return MirageUI._instance;
  }
}