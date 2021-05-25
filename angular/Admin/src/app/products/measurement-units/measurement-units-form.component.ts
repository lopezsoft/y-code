import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../utils';

import { FormComponent } from './../../core/components/forms/form.component';

import { MeasurementUnits } from './../../models/products-model';
import { MeasurementUnitsService } from './../../services/products/index';


@Component({
  selector: 'app-measurement-units-form',
  templateUrl: './measurement-units-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class MeasurementUnitsFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  units  : MeasurementUnits[] = [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              public unitsSer: MeasurementUnitsService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      base_unit_id      : ['', [Validators.required]],
      unit_description  : ['', [Validators.required, Validators.minLength(2)]],
      factor            : [1],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('unit_description').invalid && this.customForm.get('unit_description').touched;
  }

  get invalidFactor(): boolean{
    return this.customForm.get('factor').invalid && this.customForm.get('factor').touched;
  }

  get invalidAttributeId(): boolean{
    return (this.customForm.get('base_unit_id').value === 0) ? true : false;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.PutURL   = '/products/units/update/';
    ts.PostURL  = '/products/units/create';
    ts.unitsSer.getBase().subscribe((resp) => {
      ts.units = resp;
    });
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.unitsSer.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          base_unit_id      : resp[0].base_unit_id,
          unit_description  : resp[0].unit_description,
          factor            : resp[0].factor,
        });
      });
  }

}
