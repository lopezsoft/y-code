
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
