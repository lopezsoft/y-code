import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class GeneralComponent implements OnInit{
  constructor(){}

  ngOnInit():void{

  }
}
