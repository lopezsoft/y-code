import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils';

import { UserTypes } from './../../models/users-model';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { UsersService } from '../../services/users/users.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('uploadFile') uploadFile: ElementRef;
  @ViewChild('imgUp') imgUp: ElementRef;
  @ViewChild('focusElement') focusElement: ElementRef;

  userTypes: UserTypes[] = [];
  title = 'Perfil de usuario';
  constructor(
    public fb: FormBuilder,
    public api: ApiServerService,
    public msg: MessagesService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    public spinner: NgxSpinnerService,
    private usersSer: UsersService,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.customForm = this.fb.group({
      type_id                       : [1, [Validators.required]],
      name                          : ['',[Validators.required]],
      active                        : [true, [Validators.required]],
      email                         : ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });
  }

  // VALIDATION

  get invalidCompanyName(): boolean{
    return this.customForm.get('name').invalid && this.customForm.get('name').touched;
  }


  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.PutURL   = '/users/update/';
    ts.PostURL  = '/users/create';

    ts.showSpinner();

    ts.usersSer.getUserTpes().subscribe((resp) => {
      ts.userTypes  = resp;
    });

    ts.loadData();
  }

  loadData(id: any = 0): void {
    super.loadData(id);
    const ts    = this;
    const frm   = ts.customForm;
    ts.usersSer.getProfile().subscribe((resp) => {
      localStorage.setItem('oldRoute', '/');
      ts.editing  = true;
      ts.hideSpinner();
      ts.uid  = resp[0].id;
      frm.setValue({
        type_id     : resp[0].type_id,
        name        : resp[0].name,
        active      : resp[0].active,
        email       : resp[0].email,
      });
      ts.imgData              = resp[0].logo ? resp[0].logo : '';
    },()=> ts.hideSpinner());
  }

  onResetForm() {
    const ts  = this;
    let frm   = ts.customForm;
    super.onResetForm(frm);
    frm.setValue({
      type_id     : 1,
      name        : '',
      active      : true,
      email       : '',
    });
    ts.imgData = '';
  }

}
