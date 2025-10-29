import {Users} from '../models/users-model';
export interface  Company {
  dni: string;
  address: string;
  company_name: string;
  email: string;
}
export interface UserCompany extends Users {
  company: Company;
}
export interface AccessToken {
  access_token: string;
  expires_at: string;
  message: string;
  token_type: string;
  user: UserCompany;
  success: boolean;
  companyCreated: boolean;
  company: Company;
}
