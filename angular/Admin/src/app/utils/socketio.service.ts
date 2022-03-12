import { Injectable } from '@angular/core';

import { io } from "socket.io-client";
import { environment } from './../../environments/environment';

import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  constructor(
    private toastr: ToastrService,
  ) {
  }

  getSocket() {
    const ts  = this;
		const socket = io( environment.SOCKET_URL, { forceNew: true });
    // client-side
    socket.on("disconnect", () => {
      console.log('socket.connected'); // false
    });
    socket.on('connect_error', (error: any) => {
      console.log(error);
      ts.toastr.error('No hay conexión con el servidor de sockets, contacte al administrador del sistema.','Conexión servidor de sockets', {positionClass: 'toast-top-full-width'});
      setTimeout(() => {
        socket.connect();
      }, 5000);
      socket.close();
    });
		return socket;
  }
}
