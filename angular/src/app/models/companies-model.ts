export class CompaniesModel {
}

export interface Company {
  address: string;
  company_name: string;
  country_id: number;
  currency_id: number;
  number_employees: number;
  dni: string;
  dv: string;
  email: string;
  id: number;
  identity_document_id: number;
  image: string;
  location: string;
  mime: string;
  mobile: string;
  phone: string;
  postal_code: string;
  type_organization_id: number;
  web: string;
}

export interface TypeOrganization {
  id: number;
  code: number;
  description: string;
}
