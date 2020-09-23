
export interface Brands {
  id: number;
  brand_name: string;
  state?: number;
}

export interface ClassOfProducts {
  id: number;
  product_class_name: string;
  active?: boolean;
}

export interface Attributes {
  id: number;
  attribute_name: string;
  state?: number;
}

export interface Terms {
  id: number;
  attribute_id: number;
  term_name: string;
  term_description: string;
  attribute_name?: string;
  term_color?: string;
  term_img?: string;
  state?: number;
}

export interface Items {
  product_class_name: string;
  sku?: string;
  qr_code: string;
  product_name: string;
  notes: string;
  description_sales: string;
  shopping_description: string;
  barcode: string;
  rate_name: string;
  internal_code: string;
  state: number;
  sale_price: number;
  purchase_cost: number;
  tax_sales: number;
  tax_bill: number;
  stock_min: number;
  stock_max: number;
  tax_sales_id: number;
  brand_id?: number;
  category_id?: number;
  sub_category_id?: number;
  percentage_gain: number;
  tax_bill_id: number;
  item_type_id: number;
  class_id: number;
  average_cost: number;
  recipe: boolean;
  perishable: boolean;
  id: number;
}

export interface Categories {
  id: number;
  parent_id?: number;
  category_name: string;
  imagen?: string;
  parent_name?: string;
  state?: number;
}
