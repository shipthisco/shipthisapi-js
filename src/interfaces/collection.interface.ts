export interface CollectionResponse<T> {
  items?:       T[];
  pagination?:  Pagination;
  multi_sort?:  MultiSort[];
  permissions?: Permissions;
  disable_add?: boolean;
}

export interface SeaShipment {
  _id?:               ID;
  job_id?:            string;
  customer_name?:     CustomerName;
  shipment_status?:   string;
  _cls_?:             string;
  __cache?:           Cache;
  port_of_discharge?: PortOfDischarge;
  port_of_loading?:   PortOfLoading;
  _operation?:        Operation;
  mbl_no?:            string;
  hbl_no?:            null;
}

export type Cache = any

export interface ID {
  $oid?: string;
}

export interface Operation {
  edit?:   boolean;
  delete?: boolean;
}

export interface CustomerName {
  _id?:                    ID;
  company?:                Company;
  primary_contact_person?: PrimaryContactPerson;
  _cls_?:                  string;
  credit_limit?:           string;
  currency?:               string;
  payment_term?:           string;
  sales_person?:           string;
  __warn?:                 string;
  address?:                Address;
  cartage_by?:             string;
  customs_agent?:          string;
  __display?:              string;
}

export interface Address {
  city?: Cache;
}

export interface Company {
  name?:     string;
  is_agent?: boolean;
}

export interface PrimaryContactPerson {
  name?:                 string;
  email?:                string;
  phone?:                string;
  enable_portal_access?: boolean;
  additional_emails?:    any[];
}

export interface PortOfDischarge {
  port?:         Port;
  arrival_date?: ArrivalDateClass;
}

export interface ArrivalDateClass {
  $date?: number;
}

export interface Port {
  _id?:       ID;
  name?:      string;
  code?:      string;
  location?:  Location;
  _cls_?:     string;
  __display?: string;
}

export interface Location {
  description?:  string;
  bold?:         string;
  lat?:          number;
  lng?:          number;
  query_type?:   string;
  country?:      string;
  country_code?: string;
  city?:         string;
  type?:         string;
}

export interface PortOfLoading {
  port?:           Port;
  departure_date?: ArrivalDateClass;
}

export interface MultiSort {
  sort_by?:    string;
  sort_order?: string;
}

export interface Pagination {
  count?: number;
  page?:  number;
  pages?: number;
  size?:  number;
}

export interface Permissions {
  read?:   boolean;
  write?:  boolean;
  edit?:   boolean;
  delete?: boolean;
}
