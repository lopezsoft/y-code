import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
    HttpClient,
} from "@angular/common/http";

import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgFallimgModule } from "ng-fallimg";

import { environment } from "../environments/environment";

import {
    NgbNavModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbModule,
} from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-owl-carousel-o";

import { LayoutsModule } from "./layouts/layouts.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { initFirebaseBackend } from "./authUtils";
import { ErrorInterceptor } from "./core/helpers/error.interceptor";
import { JwtInterceptor } from "./core/helpers/jwt.interceptor";
import { FakeBackendInterceptor } from "./core/helpers/fake-backend";

if (environment.defaultauth === "firebase") {
    initFirebaseBackend(environment.firebaseConfig);
} else {
    // tslint:disable-next-line: no-unused-expression
    FakeBackendInterceptor;
}

import { AuthGuard } from "./services/auth-guard.service";

import { AuthInterceptor } from "./interceptors/auth-interceptor";
import { ServiceWorkerModule } from '@angular/service-worker';

export function createTranslateLoader(http: HttpClient): any {
    return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        ToastrModule.forRoot(),
        NgxSpinnerModule,
        LayoutsModule,
        AppRoutingModule,
        CarouselModule,
        NgbAccordionModule,
        NgbNavModule,
        NgbTooltipModule,
        NgFallimgModule.forRoot({
            default: "assets/avatars/no-image.png",
            user: "assets/avatars/unknown_img.png",
            product: "assets/img/Product_32px.png",
        }),
        NgbModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuard,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthInterceptor,
					multi: true
				},
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FakeBackendInterceptor,
            multi: true,
        },
    ],
})
export class AppModule {}
