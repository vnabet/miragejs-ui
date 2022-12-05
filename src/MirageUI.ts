import type {Server} from 'miragejs';
import MirageUIComponent from './MirageUI.svelte';
import {mirageUIService} from './services/MirageUI.service';

export interface IMirageUI {
  init(serverInitializer:()=>Server):void;
}

class MirageUI implements IMirageUI {

  private _app:MirageUIComponent;

  constructor(serverInitializer?:()=>Server) {
    this._app = new MirageUIComponent({
      target: document.body
    });
  }

  public init(serverInitializer:()=>Server):void {
    mirageUIService.startServer(serverInitializer);
  }
}

export const mirageUI:IMirageUI = new MirageUI();