import { CountryOfOrigin, PortOfDestination } from './collection.interface';

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

export interface RequestContainerType {
  name: string;
  max_cbm?: number;
  length?: number;
  width?: number;
  height?: number;
  max_weight?: number;
}
export interface RequestVehicleType {
  name: string;
  code: string;
  container_size: string;
}

export interface RequestCommonType {
  name: string;
  code: string;
}

export interface RequestPortType {
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
  location?: CountryOfOrigin;
  custom?: {
    new_field: string;
  };
  name: string;
  code: string;
}

export interface RequestShipmentTermsType {
  name: string;
  code: string;
  order?: number;
}

export interface RequestShippingLineType {
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
  name: string;
  code: string;
  imo: string;
  mmsi: string;
  flag: string;
  type: string;
}

export interface RequestAWBType {
  available_count: number;
  used: [];
  used_count: number;
  all_counts: string;
  locked: boolean;
  no_of_digits: number;
  used_codes: [];
  available: [];
  airline: string | PortOfDestination;
  acquired_on: {
    $date: number;
  };
  valid_till: {
    $date: number;
  };
  prefix: string;
  start_number: number;
  end_number: number;
}

export interface AllQueryFieldsPayload{
  search_query:string,
  count:number,
  page:number,
  multi_sort:MultiSort[],
  output_type:string,
  meta:boolean,
  queryFilterV2:[],
  general_filter:any,
  only:string,
  location:string,
  region_override:boolean,
}

export interface MultiSort{
  sort_by:string,
  sort_order:string,
}

// export interface GeneralFilters{
//   job_status?:GeneralFilterStatus,
//   _state?:GeneralFilters_state,
// }

// export interface GeneralFilterStatus{
//   $in:Array<string>,
// }

// export interface GeneralFilters_state{
//   $nin:Array<string>,
// }