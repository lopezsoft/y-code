import { BranchOffice } from "./companies-model";
import { 
	CurrencySys, 
	MeansPayment, 
	PaymentMethods, 
	Persons, 
	TaxLevel, 
	TaxRates, 
	TimeLimits 
} from "./general-model";


export interface CheckIn {
	currencySys: CurrencySys[];
	paymentMethods: PaymentMethods[];
	meansPayment: MeansPayment[];
	taxLevel: TaxLevel[];
	taxRates: TaxRates[];
	timeLimits: TimeLimits[];
	customers: Persons[];
	pointOfSales: BranchOffice[];
}

export interface SaleInterface {
  active: boolean;
  cash: number;
  currency_id: number;
  discount: number;
  expiration_date: string;
  id: number;
  invoice_date: string;
  invoice_nro: number;
  invoice_time: string;
  invoice_type_id:number;
  notes: string;
  path_report: string;
  path_ticket: string;
  payment_change: number;
  payment_method_id: number;
  point_of_sale_id: number;
  prefix: string;
  resolution_id: number;
  status: number;
  subtotal: number;
  tax_value: number;
  time_limit_id: number;
  timestamp: string;
  total: number;
  total_allowance: number;
  total_charges: number;
  means_payment_id: number;
  customer_id: number;
}


export interface SaleDetailInterface {
  active: boolean;
  admission_date: string;
  amount: number;
  barcode: string;
  batch: string;
  expiration_date: string;
  fabrication_date: string;
  freight: number;
  id: number;
  sale_id: number;
  tax_sales_id: number;
  internal_code: string;
  invoice_id: number;
  perishable: boolean;
  product_id: number;
  product_name: string;
  discount: number;
  sale_price: number;
  state: number;
  decimal_rate: number;
  tax_bill: number;
  tax_bill_id: number;
  tax_sale: number;
  tax_sale_id: number;
  total_cost: number;
  unit_cost: number;
  vat_included: boolean;
}
