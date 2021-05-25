export interface  UserType {
  active: number;
  id: number;
  type: number;
  user_type_name: string;
}
export interface  Company {
  company_name: string;
  email: string;
  id: number;
  image: string;
  trade_name: string;
}


export interface AccessToken {
  access_token  : string;
  expires_at    : string;
  mail          : string;
  firstName     : string;
  lastName      : string;
  avatar        : string;
  message       : string;
  token_type    : string;
  user          : string;
  success       : boolean;
  userType      : UserType;
  company       : Company[];
}
