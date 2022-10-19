import {
  RequestAirportType,
  RequestAWBType,
  RequestCategories,
  RequestCommonType,
  RequestPortType,
  RequestShipmentTermsType,
  RequestShippingLineType,
  RequestVehicleType,
  RequestVesselType,
} from '../interfaces/api.interface';

export const requestCatData: RequestCategories = {
  __scp: {},
  name: '',
  max_cbm: 0,
  length: 0,
  width: 0,
  height: 0,
  max_weight: 0,
};

export const requestCommonData: RequestCommonType = {
  __scp: {},
  name: '',
  code: '',
};

export const requestVehicleData: RequestVehicleType = {
  __scp: {},
  name: '',
  code: '',
  container_size: '',
};

export const requestProdData: RequestCommonType = {
  __scp: {},
  name: '',
  code: '',
};

export const requestPortData: RequestPortType = {
  __scp: {},
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
  __scp: {},
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
  __scp: {},
  name: '',
  code: '',
  order: 0,
};

export const requestShippingLine: RequestShippingLineType = {
  __scp: {},
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
  __scp: {},
  name: '',
  code: '',
  imo: '',
  mmsi: '',
  flag: '',
  type: '',
};

export const requestAWBData: RequestAWBType = {
  __scp: {},
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
