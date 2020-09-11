import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { TaxesComponent } from './taxes/taxes.component';
import { CurrencyComponent } from './currency/currency.component';
import { EditTaxesComponent } from './taxes/edit-taxes/edit-taxes.component';
import { EditCurrencyComponent } from './currency/edit-currency/edit-currency.component';
import { TaxRatesComponent } from './tax-rates/tax-rates.component';
import { IdentityDocumentsComponent } from './identity-documents/identity-documents.component';
import { EditIdentitydocsComponent } from './identity-documents/edit-identitydocs/edit-identitydocs.component';
import { EditTaxratesComponent } from './tax-rates/edit-taxrates/edit-taxrates.component';
const routes: Routes = [{
  path      : '',
  component : GeneralComponent,
  children: [
    {
      path: 'taxes',
      component: TaxesComponent,
    },
    {
      path: 'taxes/edit/:id',
      component: EditTaxesComponent
    },
    {
      path: 'taxes/create',
      component: EditTaxesComponent
    },
    {
      path: 'currency',
      component: CurrencyComponent
    },
    {
      path: 'currency/edit/:id',
      component: EditCurrencyComponent
    },
    {
      path: 'currency/create',
      component: EditCurrencyComponent
    },
    {
      path: 'taxrates',
      component: TaxRatesComponent
    },
    {
      path: 'taxrates/edit/:id',
      component: EditTaxratesComponent
    },
    {
      path: 'taxrates/create',
      component: EditTaxratesComponent
    },
    {
      path: 'identitydocuments',
      component: IdentityDocumentsComponent
    },
    {
      path: 'identitydocuments/edit/:id',
      component: EditIdentitydocsComponent
    },
    {
      path: 'identitydocuments/create',
      component: EditIdentitydocsComponent
    },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
