import { NbMenuService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';

import { FormComponent } from 'src/app/core/components/forms/form.component';
import { FormBuilder } from '@angular/forms';
import { ApiServerService, MessagesService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent extends FormComponent implements OnInit {

  constructor(private menuService: NbMenuService,
      public fb: FormBuilder,
      public msg: MessagesService,
      public api: ApiServerService,
      public router: Router,
      public translate: TranslateService,
      public aRouter: ActivatedRoute,
    ) {
    super(fb, msg, api, router, translate, aRouter);
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
