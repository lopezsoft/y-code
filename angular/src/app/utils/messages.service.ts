import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(private toastr: ToastrService) {

  }

  toastMessage(title: string, msg: string, type: number){
    switch (type) {
      case 2:
        this.toastr.info(msg, title, {positionClass: 'toast-top-full-width'});
        break;
      case 3:
        this.toastr.warning(msg, title, {positionClass: 'toast-top-full-width'});
        break;
      case 4:
        this.toastr.error(msg, title, {positionClass: 'toast-top-full-width'});
        break;
      default:
        this.toastr.success(msg, title, {positionClass: 'toast-top-full-width'});
        break;
    }
  }

}
