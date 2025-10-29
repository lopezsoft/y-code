import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss']
})
export class NotAuthorizedComponent implements OnInit {
  public coreConfig: any;

  /**
   * Constructor
   *
   */
  constructor(
  ) {
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
  }
}
