import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import Swal, {SweetAlertIcon, SweetAlertResult} from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import {GlobalSettingsService} from '../services/global-settings.service';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  constructor(
    private toastr: ToastrService,
    public translateService: TranslateService,
    public settings: GlobalSettingsService
  ) {
  }
  toastMessage(title: string, msg: string, type: number = 0): void {
    switch (type) {
      case 2:
        this.toastr.info(msg, title, {positionClass: 'toast-bottom-full-width'});
        break;
      case 3:
        this.toastr.warning(msg, title, {positionClass: 'toast-bottom-full-width'});
        break;
      case 4:
        this.toastr.error(msg, title, {positionClass: 'toast-bottom-full-width'});
        break;
      default:
        this.toastr.success(msg, title, {positionClass: 'toast-bottom-full-width'});
        break;
    }
  }
  onMessage(title: string, msg: string, iconMsg: SweetAlertIcon = 'info'): void {
    const titleMsg = (title.length > 1) ? title :  'Y-CODE APP';
    Swal.fire({
      title: '<strong>' + titleMsg + '</strong>',
      icon: iconMsg,
      html: msg,
    }).then();
  }
  errorMessage(title: string, msg: string): void {
    Swal.fire((title.length > 1) ? title :  'Error Y-CODE APP', msg, 'error');
  }
  confirm(title: string, message: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title,
      html: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translateService.instant('buttons.yes'),
      cancelButtonText: this.translateService.instant('buttons.not'),
    });
  }
  error(err: any): void {
    if (err.error) {
      if (err.error.message) {
        this.errorMessage('', err.error.message);
      } else {
        this.errorMessage('', err.error);
      }
    } else {
      this.errorMessage('', err);
    }
  }
}
