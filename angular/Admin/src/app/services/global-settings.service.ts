import { Injectable } from '@angular/core';
import {BlockUI, NgBlockUI} from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class GlobalSettingsService {
  @BlockUI() blockUI: NgBlockUI;
  public loading        = false;
  public blockUIMessage = 'Procesando...';
  constructor() { }
  public showBlockUI(customMessage?: string ): void {
    this.blockUI.start(customMessage || this.blockUIMessage);
  }
  public hideBlockUI(): void {
    this.blockUI.stop();
  }
}
