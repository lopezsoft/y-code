import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { CompanyService } from './services/companies';
import { ApiServerService } from './utils';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    interval = 60000;
    constructor(
        private config: NgSelectConfig,
        private authService: ApiServerService,
        private company: CompanyService,
        private router: Router
    ) {
        this.config.appendTo = 'body';
    }
    ngAfterViewInit(): void {
        const ts = this;
        const token = ts.authService.getToken();
        if (!token) {
            return;
        }
        if (token.companyCreated) {
            this.company.getData({}).subscribe((resp) => {
                if (!(resp.length > 0)) {
                    this.router.navigate(['/companies/company']);
                    this.startTimer();
                }
            });
        } else {
            ts.startTimer();
        }
    }
    ngOnInit() {
        //  document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }

    startTimer(): void {
        const ts = this;
        const token = ts.authService.getToken();
        if (!token) {
            return;
        }
        setInterval(() => {
            if (token.companyCreated) {
                ts.company.getData({}).subscribe((resp) => {
                    if (resp.length > 0) {
                        ts.interval = 0;
                    } else {
                        ts.router.navigate(['/companies/company']);
                    }
                });
            }
        }, ts.interval);
    }
}
