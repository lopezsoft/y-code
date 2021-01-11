export interface Taxes {
  id: number;
  name_taxe: string;
  description: string;
  state: number;
  is_vat: boolean;
}

export interface CurrencySys {
  id: number;
  currency_id: number;
  exchange_rate_value: number;
  national_currency: number;
  currency_name: string;
  plural_name: string;
  singular_name: string;
  denomination: string;
  CurrencyISO: string;
  CurrencyName?: string;
  Money?: string;
  Symbol?: string;
  image?: string;
  state: number;
}

export interface Currency {
  id: number;
  CurrencyISO: string;
  Language: string;
  CurrencyName: string;
  Money: string;
  Symbol: string;
  image: string;
}

export interface CurrencyChange {
  success: boolean;
  value: number;
  amount: number;
}

export interface TaxRates {
  id: number;
  shipping_frequency_id: number;
  account_id?: number;
  tax_gruop_id: number;
  rate_name: string;
  name_taxe?: string;
  rate_abbre: string;
  fecuency_name?: string;
  account_name?: string;
  rate_value: number;
  decimal_rate: number;
  state: number;
  is_exempt: boolean;
}

export interface ShippingFrequency {
  id: number;
  name: string;
  rate?: number;
  active?: boolean;
}

export interface TaxAccountingAccount {
  id: number;
  tax_rate_id: number;
  account_id: number;
  rate_value?: number;
  rate_name?: string;
  account_name?: string;
  rate_abbre?: number;
  state?: number;
}


export interface Persons {
  address: string;
  city_name: string;
  company_name: string;
  country_id: number;
  type_organization_id: number;
  tax_rate_id?: number;
  parent_id?: number;
  means_payment_id?: number;
  sales_term?: number;
  accounting_account_id?: number;
  initial_balance?: number;
  currency_id: number;
  time_limit_id: number;
  initial_date?: string;
  description: string;
  dni: string;
  email: string;
  full_name: string;
  id: number;
  last_name: string;
  location: string;
  mobile: string;
  names: string;
  person_type_id: string;
  phone: string;
  postal_code: string;
  state: string;
  state_name: string;
  timestamp: string;
  title: string;
  is_secondary?: boolean;
  web: string;
}

export interface TypePersons {
  id: number;
  description: string;
  active?: boolean;
}

export interface MeansPayment {
  id: number;
  payment_method: string;
  code?: string;
  active?: boolean;
  state?: boolean;
}

export interface TimeLimit {
  id: number;
  term_name: string;
  term_value?: number;
  months?: number;
  active?: boolean;
  state?: boolean;
}


export interface Resolutions {
  id: number;
  active:number;
  company_id:number;
  date_from: string;
  date_up: string;
  footline1: string;
  footline2: string;
  footline3: string;
  footline4: string;
  headerline1: string;
  headerline2: string;
  image: string;
  initial_number: number;
  invoice_name: string;
  mime: string;
  prefix: string;
  range_from: number;
  range_up: number;
  resolution_number: string;
  state: number;
  type_document_id: number;
  voucher_name: string;
}


export interface PaymentMethods {
  id: number;
  payment_method: string;
  code: string;
  active: boolean;
}

export interface TimeLimits {
  id: number;
  term_name: string;
  term_value: number;
  months: number;
  active: boolean;
}

export interface TaxLevel {
  id          : number;
  code        : string;
  description : string;
}

export interface TaxRegime{
  id          : number;
  code        : string;
  description : string;
  active      : number;
}

export interface IdentityDocuments {
  id: number;
  code: string;
  document_name: string;
  abbrev: string;
  active: number;
  state: number,
}
