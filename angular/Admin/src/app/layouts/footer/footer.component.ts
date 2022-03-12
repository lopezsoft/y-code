import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

/**
 * Footer component
 */
export class FooterComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();
  version: string = environment.VERSION;

  constructor() { }

  ngOnInit() {
  }

}
