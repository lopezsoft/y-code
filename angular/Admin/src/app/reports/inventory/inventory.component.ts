import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BranchOffice } from 'src/app/models/companies-model';
import { BranchOfficeService } from 'src/app/services/companies';
import { FormComponent } from './../../core/components/forms';
import { ReportsService } from './../../services/global';
import { MessagesService, ApiServerService } from './../../utils';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent extends FormComponent implements OnInit, AfterViewInit {
    pathfile = "";
    modal: NgbModalRef;
    points_of_sale: BranchOffice[] = [];
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
        private pointOfSale: BranchOfficeService
    ) {
        super(fb, msg, api, router, translate, aRouter, spinner);
        this.customForm = this.fb.group({
            points_of_sale_id: [0]
        });
    }

    ngOnInit(): void {
        super.ngOnInit();
        const ts = this;
        ts.pointOfSale.getPointsOfSale({})
            .subscribe({
                next: (resp) => {
                    ts.points_of_sale = resp;
                    ts.customForm.get('points_of_sale_id').setValue(resp[0].branch_id);
                }
            });
    }

    onInventoryReport(content) {
        const ts = this;
        ts.showSpinner('Generando informe');
        ts.reporstSer.getInventoryReport({
            typeReport: 1, // Tamaño Carta
            points_of_sale: ts.customForm.get('points_of_sale_id').value
        }).subscribe({
            next: (resp) => {
                ts.hideSpinner();
                let path = `${ts.api.getAppUrl()}${resp.pathFile}`;
                ts.pathfile = path;
                ts.onViewDocs(content);
            },
            error: (err: string) => {
                ts.hideSpinner();
                console.log(err);
                ts.msg.errorMessage('', err);
            }
        });
    }

    onViewDocs(content) {
        this.modal = this.modalService.open(content, { windowClass: 'fullscreen-modal', backdrop: false });
    }

}
