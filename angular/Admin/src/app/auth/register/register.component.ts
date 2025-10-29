import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { MessagesService, ApiServerService } from '../../utils';

import { TranslateService } from '@ngx-translate/core';

// Interfaces
import { CountriesService, Country } from 'src/app/services/global';
import { CurrencySys } from 'src/app/models/general-model';
import {AuthMasterComponent} from '../auth-master/auth-master.component';
import {GlobalSettingsService} from '../../services/global-settings.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends AuthMasterComponent implements OnInit, AfterViewInit {
    @ViewChild('focusElement') focusElement: ElementRef;
    countries: Country[] = [];
    currency: CurrencySys[] = [];
    submitted = false;
    constructor(public fb: FormBuilder,
                public api: ApiServerService,
                public msg: MessagesService,
                public router: Router,
                public translate: TranslateService,
                public aRouter: ActivatedRoute,
                private cnt: CountriesService,
                public settings: GlobalSettingsService
    ) {
        super(translate, api, router);
        this.customForm = this.fb.group({
            first_name: ['', [Validators.required, Validators.minLength(3)]],
            last_name: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            password_confirmation: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            country_id: [113, [Validators.required]],
            company_name: ['', [Validators.required, Validators.minLength(6)]],
            dni: ['', [Validators.required]],
            address: ['', [Validators.required]],
        });
    }
    ngOnInit(): void {
        super.ngOnInit();
        const ts = this;
        ts.cnt.getPublicCountries().subscribe((resp) => {
            ts.countries = resp;
        });

    }

    ngAfterViewInit(): void {
        this.focusElement.nativeElement.focus();
    }

    get invalidFirstName(): boolean {
        return this.isInvalid('first_name');
    }
    get invalidLastName(): boolean {
        return this.isInvalid('last_name');
    }

    get invalidPassword(): boolean {
        return this.isInvalid('password');
    }
    get invalidConfirmPassword(): boolean {
        return this.isInvalid('password_confirmation');
    }
    get invalidEmail(): boolean {
        return this.isInvalid('email');
    }

    // placeholder

    get placeholderEmail(): string {
        return this.translate.instant('placeholder.email');
    }
    get placeholderPassw(): string {
        return this.translate.instant('placeholder.password');
    }

    get placeholderConfirmPassw(): string {
        return this.translate.instant('placeholder.confirmPassword');
    }

    get placeholderFirstName(): string {
        return this.translate.instant('register.placeholder.firstName');
    }

    get placeholderLastName(): string {
        return this.translate.instant('register.placeholder.lastName');
    }

    // VALIDATION

    get invalidAddress(): boolean {
        return this.isInvalid('address');
    }

    get invalidDni(): boolean {
        return this.isInvalid('dni');
    }

    get invalidCompanyName(): boolean {
        return this.isInvalid('company_name');
    }

    get invalidCountry(): boolean {

        return (this.customForm.get('country_id').value <= 0);
    }

    // GET PLACEHOLDERS
    get placeholderCompanyName(): string {
        return this.translate.instant('companies.company_name');
    }

    get placeholderDni(): string {
        return this.translate.instant('companies.dni');
    }

    get placeholderAddress(): string {
        return this.translate.instant('companies.address');
    }

    onValidPassword(): boolean {
        const passw1 = this.customForm.get('password').value;
        const passw2 = this.customForm.get('password_confirmation').value;
        return (passw2 === passw1);
    }

    onSave(): void {
        const me = this.customForm;
        const ts = this;
        const lang = this.translate;
        ts.activeLoading();
        if (me.invalid) {
            ts.onValidateForm(me);
            ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
            ts.disabledLoading();
        } else {
            if (ts.onValidPassword()) {
                ts.settings.showBlockUI(lang.instant('register.button.creatingAccount'));
                ts.api.post('/auth/register', me.value)
                    .subscribe({
                        next: () => {
                            ts.settings.hideBlockUI();
                            ts.disabledLoading();
                            this.submitted = true;
                            ts.customForm.reset();
                            ts.msg.toastMessage(lang.instant('register.messages.successfulRegistration'),
                              'Se ha enviado un correo de confirmación a su correo electrónico', 0);
                        },
                        error: (err: string) => {
                            ts.settings.hideBlockUI();
                            ts.disabledLoading();
                            ts.msg.errorMessage(lang.instant('general.error'), err);
                            ts.onValidateForm(me);
                        }
                    });
            } else {
                ts.disabledLoading();
                ts.msg.toastMessage(lang.instant('general.error'), lang.instant('register.messages.differentPasswords'), 4);
            }
        }
    }
}
