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
  currency_id: number;
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
  web: string;
}

export interface TypePersons {
  id: number;
  description: string;
  active?: boolean;
}
