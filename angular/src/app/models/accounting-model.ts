
export interface ClassOfAccounting {
  id: number;
  name: string;
  number: number;
  state?: number;
}

export interface AccountingGroups {
  id: number;
  class_account_id: number;
  accounting_group_name: string;
  number: number;
  state?: number;
}

export interface Accounts {
  id: number;
  account_type_id?: number;
  account_id?: number;
  accounting_group_id: number;
  currency_id: number;
  tax_rate_id: number;
  account_name: string;
  description: string;
  account_number: string;
  initial_date?: string;
  is_subaccount: boolean;
  state?: number;
}
