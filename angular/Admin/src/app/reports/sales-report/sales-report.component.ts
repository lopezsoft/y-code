import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormComponent } from './../../core/components/forms';
import { ResolutionsService } from './../../services/general';
import { ReportsService } from './../../services/global';
import { MessagesService, ApiServerService } from './../../utils';
import { AccountingDocuments } from './../../models/accounting-model';


@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent  extends FormComponent implements OnInit, AfterViewInit {
  pathfile    = "";
  modal       : NgbModalRef;
  aDocuments: AccountingDocuments[]= [];
  constructor(
    public fb: FormBuilder,
    public msg: MessagesService,
    public api: ApiServerService,
    public reporstSer: ReportsService,
    public spinner: NgxSpinnerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    private resSer: ResolutionsService,
    private modalService: NgbModal,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.customForm = this.fb.group({});
    let fecha       = new Date();
    fecha.setDate(fecha.getDate() - 60);

    this.modalForm  = this.fb.group({
      date_from       : [fecha.toISOString().split('T')[0]],
      date_up         : [new Date().toISOString().split('T')[0]],
      invoice_type_id : [7],
    });
   }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    // let   frm   = ts.customForm;
    const param = {
      where : JSON.stringify({"active":"1"})
    };

    ts.resSer.getAccountingDocuments(param).subscribe((resp) => {
      ts.aDocuments  = resp;
      // frm.get('invoice_type_id').setValue(7);
      this.modalForm.get('invoice_type_id').setValue(7);
    });
  }

   /**
   * Genera informe de ventas
   */
  onReport(content) {
    const ts    = this;
    const frm   = ts.modalForm;
    const values= frm.getRawValue();
    ts.showSpinner('Generando informe de ventas');
    ts.reporstSer.getSalesReport({
      initDate  : values.date_from,
      finalDate : values.date_up,
      typeId    : values.invoice_type_id,
      typeReport: 1, // Tamaño Carta
    }).subscribe((resp) => {
      ts.hideSpinner();
      let path    = `${ts.api.getAppUrl()}${resp.pathFile}`;
      ts.pathfile = path;
      ts.onViewDocs(content);
    },(err) => {
      ts.hideSpinner();
      console.log(err);
    });
  }

  onViewDocs(content){
    this.modal = this.modalService.open(content, {windowClass: 'fullscreen-modal', backdrop: false});
  }


}
