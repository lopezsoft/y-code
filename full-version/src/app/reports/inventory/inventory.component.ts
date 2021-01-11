import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormComponent } from 'src/app/core/components/forms';
import { ReportsService } from 'src/app/services/global';
import { MessagesService, ApiServerService } from 'src/app/utils';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent extends FormComponent implements OnInit, AfterViewInit {
  pathfile    = "";
  modal       : NgbModalRef;
  constructor(
    public fb: FormBuilder,
    public msg: MessagesService,
    public api: ApiServerService,
    public reporstSer: ReportsService,
    public spinner: NgxSpinnerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    private modalService: NgbModal,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.customForm = this.fb.group({});
   }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onInventoryReport(content) {
    const ts    = this;
    ts.showSpinner('Generando informe');
    ts.reporstSer.getInventoryReport({
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
