import { ErrorResponse, JsonResponse } from './../../interfaces';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../utils';

import { FormSpinnerComponent } from './../../core/components/forms/index';

import { NgxSpinnerService } from "ngx-spinner";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {
  ItemsTypeAccounts,
  ClassOfProducts,
  MeasurementUnits, ItemsType, AccountTypes
} from './../../models/products-model';
import {
  ClassOfProductsService,
  ItemsTypeService
} from './../../services/products/index';
import { AccountsService } from './../../services/accounting';
import { Accounts } from './../../models/accounting-model';

@Component({
  selector: 'app-groups-form',
  templateUrl: './groups-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class GroupsFormComponent extends FormSpinnerComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('subCatElement') subCatElement: ElementRef;
  @ViewChild('typeElement') typeElement: ElementRef;
  accounttypes: AccountTypes[] = [];
  classof     : ClassOfProducts[] = [];
  mUnits      : MeasurementUnits[] = [];
  accounts    : Accounts[] = [];
  selectAccount  : Accounts;
  selectEdit  : ItemsTypeAccounts;
  active      = 1;
  disabled    = true;
  closeResult = '';
  editModal   = false;
  itemTypeAccounts: ItemsTypeAccounts [] = [];
  selectTypes: AccountTypes;
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              public itemSer: ItemsTypeService,
              public classSer: ClassOfProductsService,
              public accountSer: AccountsService,
              private modalService: NgbModal
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      product_class_id      : [1],
      name_type             : ['', [Validators.required, Validators.minLength(2)]]
    });

    this.modalForm  = this.fb.group({
      account_type_id   : [1],
      account_id        : [''],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('name_type').invalid && this.customForm.get('name_type').touched;
  }

  get invalidClassId(): boolean{
    return (this.customForm.get('product_class_id').value === 0) ? true : false;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.PutURL   = '/products/groups/update/';
    ts.PostURL  = '/products/groups/create';
    ts.showSpinner();
    ts.classSer.getData().subscribe((resp) => {
      ts.classof = resp;
    });

    ts.itemSer.getType({}).subscribe((resp) => {
      ts.accounttypes = resp;
    });

    ts.accountSer.getsubAccounts({}).subscribe((resp) => {
      ts.accounts = resp;
      ts.fullLoad();
    });

  }

  saveData(): void {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    let values: any = {};
    if (!frm.invalid) {
      ts.showSpinner();
      values  = frm.value;
      if(ts.changeImage) {
        values.imgdata = ts.imgData;
        values.imgname = ts.imgname;
      }

      const data = {
        records   : JSON.stringify(values),
        accounts  : JSON.stringify(ts.itemTypeAccounts),
      };
      if (ts.editing) {
        ts.api.put(`${ts.PutURL}${ts.uid}`, data)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
            ts.editing = false;
            if (ts.toClose) {
              ts.close();
            } else {
              ts.onResetForm(frm);
              ts.focusElement.nativeElement.focus();
            }
            ts.hideSpinner();
            ts.disabledLoading();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
            ts.hideSpinner();
          });
      } else {
        ts.api.post(ts.PostURL, data)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
            if (ts.toClose) {
              ts.close();
            } else {
              ts.onResetForm(frm);
              ts.focusElement.nativeElement.focus();
            }
            ts.disabledLoading();
            ts.hideSpinner();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
            ts.hideSpinner();
          });
      }
    }
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.itemSer.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          product_class_id    : resp[0].product_class_id,
          name_type           : resp[0].name_type,
        });
        ts.itemSer.getItemTypeAccounts({pid: resp[0].id}).subscribe((resp) => {
          ts.itemTypeAccounts = resp;
          ts.fullLoad();
        },() => ts.fullLoad());
      }, () => {
        ts.fullLoad();
      });
  }

  delMeasurementUnit(i: number) {
    const ts  = this;
    const item  = ts.itemTypeAccounts[i];
    if(ts.itemTypeAccounts.indexOf(item) !== -1){
      if(item.id > 0){
        const url = `/products/groups/delete/itemTypeAccounts/${item.id}`;
        ts.showSpinner();
        ts.api.delete(url).subscribe((resp) => {
          ts.itemTypeAccounts.splice(i, 1);
          ts.hideSpinner();
        }, (err) => {
          ts.hideSpinner();
          ts.msg.toastMessage('Error', 'Error al tratar de eliminar la unidad de medida.', 4);
        });
      }else{
        ts.itemTypeAccounts.splice(i, 1);
      }
    }
  }

  EditMeasurementUnit(i: number, content) {
    const ts      = this;
    const item    = ts.itemTypeAccounts[i];
    if(ts.itemTypeAccounts.indexOf(item) !== -1){
      ts.modalForm.setValue({
        account_id      : item.account_id,
        account_type_id : item.account_type_id,
      });
      ts.selectEdit = item;
      ts.onChangeTypes(item.account_type_id);
      ts.open(content, true);
    }
  }

  open(content, edit: boolean) {
    const ts      = this;
    ts.editModal  = edit;
    ts.selectAccount = null;
    if(!ts.editModal){
      ts.modalForm.setValue({
        account_type_id   : 1,
        account_id        : '',
      });
      this.onChangeTypes(1);
    }

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      const ts      = this;
      const values  = ts.modalForm.getRawValue() as ItemsTypeAccounts;

      if(result === 'Save'){
         if(ts.editModal){ // Edition mode
          let item = ts.selectEdit;
          if(ts.selectAccount){
            item.account_id      = ts.selectAccount.id;
            item.account_name    = ts.selectAccount.account_name;
            item.account_number  = ts.selectAccount.account_number;
          }
          item.name_type        = ts.selectTypes.name_type;
          item.account_type_id  = values.account_type_id;
        }else{ // insert mode
          ts.itemTypeAccounts.push({
            id              : 0,
            account_id      : ts.selectAccount.id,
            account_name    : ts.selectAccount.account_name,
            account_number  : ts.selectAccount.account_number,
            account_type_id : values.account_type_id,
            name_type       : ts.selectTypes.name_type,
          });
        }
      }
    }, (reason) => {
      console.log(reason);
    });
  }

  onChangeAccounts(e: number): void {
    const ts  = this;
    const frm = ts.modalForm;
    ts.showSpinner();
    ts.accountSer.getData({uid: e}).subscribe((resp) => {
      ts.selectAccount   = resp[0];
      ts.hideSpinner();
    }, (err: any) => {
      console.log(err);
      ts.hideSpinner();
    });
  }

  onChangeTypes(e: number): void {
    const ts  = this;
    const frm = ts.modalForm;
    ts.showSpinner();
    ts.itemSer.getType({uid: e}).subscribe((resp) => {
      ts.selectTypes   = resp[0];
      ts.hideSpinner();
    }, (err: any) => {
      console.log(err);
      ts.hideSpinner();
    });
  }


}
