import {
  RequestAirportType,
  RequestAWBType,
  AllQueryFieldsPayload,
  RequestContainerType,
  RequestCommonType,
  RequestPortType,
  RequestShipmentTermsType,
  RequestShippingLineType,
  RequestVehicleType,
  RequestVesselType,
} from '../interfaces/api.interface';

export const requestCatData: RequestContainerType = {
  name: '',
  max_cbm: 0,
  length: 0,
  width: 0,
  height: 0,
  max_weight: 0,
};

export const requestCommonData: RequestCommonType = {
  name: '',
  code: '',
};

export const requestVehicleData: RequestVehicleType = {
  name: '',
  code: '',
  container_size: '',
};

export const requestProdData: RequestCommonType = {
  name: '',
  code: '',
};

export const requestPortData: RequestPortType = {
  location: {
    description: '',
    bold: '',
    lat: 0,
    lng: 0,
    query_type: '',
    type: '',
    province: '',
    province_code: '',
    city: '',
    country: '',
    country_code: '',
  },
  custom: {
    new_port: '',
  },
  name: '',
  code: '',
  numeric_code: '',
  latitude: 0,
  longitude: 0,
};

export const requestAirportData: RequestAirportType = {
  location: {
    description: '',
    bold: '',
    lat: 0,
    lng: 0,
    query_type: '',
    type: '',
    province: '',
    province_code: '',
    city: '',
    country: '',
    country_code: '',
  },
  custom: {
    new_field: '',
  },
  name: '',
  code: '',
};

export const requestShipmentTermsData: RequestShipmentTermsType = {
  name: '',
  code: '',
  order: 0,
};

export const requestShippingLine: RequestShippingLineType = {
  address: {},
  name: '',
  code: '',
  shipthis_code: '',
  cbsa_code: '',
  phone: '',
  fax: '',
  email: '',
};

export const requestVesselData: RequestVesselType = {
  name: '',
  code: '',
  imo: '',
  mmsi: '',
  flag: '',
  type: '',
};

export const requestAWBData: RequestAWBType = {
  available_count: 0,
  used: [],
  used_count: 0,
  all_counts: '',
  locked: false,
  no_of_digits: 0,
  used_codes: [],
  available: [],
  airline: '',
  acquired_on: {
    $date: 0,
  },
  valid_till: {
    $date: 0,
  },
  prefix: '',
  start_number: 0,
  end_number: 0,
};

export const requestqueryData: AllQueryFieldsPayload={
  search_query:"",
  count:0,
  page:0,
  multi_sort:[],
  output_type:"",
  meta:false,
  queryFilterV2:[],
  general_filter:{},
  only:"",
  location:"",
  region_override:false,
}
