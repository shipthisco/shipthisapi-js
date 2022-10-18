import { CountryOfOrigin } from './collection.interface';

export interface ApiEssentials {
  x_api_key: string;
  organisation_id: string;
  user_type: string;
  region_id: string;
  location_id: string;
}

export type UserType = 'employee' | 'customer' | 'vendor';

export interface ApiOptions {
  organisationId: string;
  userType: UserType;
  xApiKey?: string;
  authorization?: string;
  locationId?: string;
  regionId?: string;
}

export interface RequestOptions {
  queryParams?: string;
  requestData?: any;
  params?: any;
}

export interface RequestCategories {
  __scp?: any;
  name: string;
  max_cbm?: number;
  length?: number;
  width?: number;
  height?: number;
  max_weight?: number;
}
export interface RequestVehicleType {
  __scp: any;
  name: string;
  code: string;
  container_size: string;
}

export interface RequestCommonType {
  __scp?: any;
  name: string;
  code: string;
}

export interface RequestPortType {
  __scp?: any;
  location: CountryOfOrigin;
  custom?: {
    new_port: string;
  };
  name: string;
  code: string;
  numeric_code?: string;
  latitude?: number;
  longitude?: number;
}

export interface RequestAirportType {
  __scp: any;
  location: CountryOfOrigin;
  custom: {
    new_field: string;
  };
  name: string;
  code: string;
}

export interface RequestShipmentTermsType {
  __scp?: any;
  name: string;
  code: string;
  order?: number;
}

export interface RequestShippingLineType {
  __scp: any;
  address: any;
  name: string;
  code: string;
  shipthis_code: string;
  cbsa_code: string;
  phone: string;
  fax: string;
  email: string;
}

export interface RequestVesselType {
  __scp: any;
  name: string;
  code: string;
  imo: string;
  mmsi: string;
  flag: string;
  type: string;
}
