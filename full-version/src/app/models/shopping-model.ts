export interface Shopping {
  admission_date: string;
  branch_name:  string;
  closed: boolean;
  discount: number;
  freight: number;
  full_name: string;
  id: number;
  invoice_nro: string;
  vat: number;
  rfte: number;
  notes: string;
  pay_day: string;
  payment_method_id: number;
  payment_id?: number;
  point_of_sale_id: number;
  warehouse_id: number;
  provider_id: number;
  state: number;
  sub_total: number;
  total: number;
}


export interface ShoppingDetail {
  active: boolean;
  admission_date: string;
  amount: number;
  barcode: string;
  batch: string;
  expiration_date: string;
  fabrication_date: string;
  freight: number;
  id: number;
  internal_code: string;
  invoice_id: number;
  perishable: boolean;
  product_id: number;
  product_name: string;
  sale_price: number;
  state: number;
  tax_bill: number;
  tax_bill_id: number;
  tax_sale: number;
  tax_sale_id: number;
  total_cost: number;
  unit_cost: number;
  vat_included: boolean;
}
