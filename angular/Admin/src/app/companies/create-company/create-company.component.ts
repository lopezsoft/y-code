import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import NgxSpinner from 'src/app/core/class/NgxSpinner';
import { JsonResponse } from 'src/app/interfaces';
import { ApiServerService, MessagesService } from 'src/app/utils';

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styles: [
    ]
})
export class CreateCompanyComponent implements OnInit {

    creating    : boolean = false;
    constructor(
        private _api: ApiServerService,
        private spinner: NgxSpinnerService,
        private msg: MessagesService,
        private router: Router,
    ) { }

    ngOnInit(): void {

    }

    onCreateData(): void {
        const ts    = this;
        NgxSpinner.show(ts.spinner);
        ts.creating = true;
        ts._api.post('/company/createDb')
            .subscribe({
                next: (resp: JsonResponse) => {
                    NgxSpinner.hide(ts.spinner);
                    ts.creating = false;
                    ts.msg.onMessage('','Empresa creada exitosamente');
                    let token = ts._api.getToken();
                    token.companyCreated = true;
                    ts._api.setToken(token);
                    setTimeout(() => {
                        ts.router.navigate(['/companies/company']);
                    }, 1000);
                },
                error: (error: string) => {
                    NgxSpinner.hide(ts.spinner);
                    console.log(error);
                    ts.msg.errorMessage('', error);
                    ts.creating = false;
                }
            });
    }

}
