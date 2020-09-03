export interface Taxes{
  id: number;
  name_taxe: string;
  description: string;
  state: number;
}

export interface CurrencySys{
  id: number;
  currency_id: number;
  exchange_rate_value: number;
  national_currency:   number;
  currency_name: string;
  plural_name:  string;
  singular_name:string;
  denomination: string;
  CurrencyISO: string;
  state: number;
}

export interface Currency{
  id: number;
  CurrencyISO: string;
  Language: string;
  CurrencyName: string;
  Money: string;
  Symbol: string;
  image: string;
}

export interface TaxRates
{
  id: number;
  tax_gruop_id: number;
  rate_name: string;
  rate_abbre: string;
  rate_value: number;
  decimal_rate: number;
  state: number;
}
