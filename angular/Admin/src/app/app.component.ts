import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ApiServerService } from './utils/api-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private config: NgSelectConfig, private authService: ApiServerService) {
		this.config.appendTo = 'body';
	}
  ngOnInit() {
    //  document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");  
  }

}
