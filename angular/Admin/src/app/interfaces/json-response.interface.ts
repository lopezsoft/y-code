import { CheckIn } from '../models/sales-model';

export interface Report {
  success : boolean;
  pathFile : boolean;
}

export interface JsonResponse {
  success: boolean;
  message: string;
  pathFile: string;
  report  : Report;
  records: [];
  total: number;
  error: string;
	checkIn: CheckIn; 
}

