import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import { AuthGuard } from "./core/guards/auth.guard";
import { AuthGuard } from './services/auth-guard.service';
import { LayoutComponent } from "./layouts/layout.component";
const routes: Routes = [
    {
        path: "auth",
        loadChildren: () =>
            import("./auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path			: "",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./pages/pages.module").then((m) => m.PagesModule),
        canActivate: [AuthGuard],
    },
    {
        path			: "sales",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./sales/sales.module").then((m) => m.SalesModule),
        canActivate: [AuthGuard],
    },
    {
        path			: "shopping",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./shopping/shopping.module").then((m) => m.ShoppingModule),
        canActivate: [AuthGuard],
    },
    {
        path			: "products",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./products/products.module").then((m) => m.ProductsModule),
        canActivate: [AuthGuard],
    },
    {
        path			: "accounting",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./accounting/accounting.module").then((m) => m.AccountingModule),
        canActivate: [AuthGuard],
    },
    {
        path			: "companies",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./companies/companies.module").then((m) => m.CompaniesModule),
        canActivate: [AuthGuard],
    },
    {
        path			: "users",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./users/users.module").then((m) => m.UsersModule),
        canActivate: [AuthGuard],
    },
    {
        path			: "general",
        component	: LayoutComponent,
        loadChildren: () =>
            import("./general/general.module").then((m) => m.GeneralModule),
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: "top",
            relativeLinkResolution: "legacy",
						useHash: true,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
