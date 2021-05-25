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