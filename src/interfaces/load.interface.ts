import { ID, ShipMethod, ShipthisBasic } from './collection.interface';

export enum HazardousLevelType {
  NA = 'na',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum Temp {
  F = 'fahrenheit',
  C = 'celsius',
}

export interface HazardUnNumber {
  _id: ID;
  description?: string;
  number?: string;
  _cls_: string;
}

export interface HazardClass {
  _id: ID;
  name?: string;
  _cls_: string;
}

export interface fclPackage {
  description?: string;
  package_type: LoadType;
  package_quantity: number;
  length_unit?: LengthUnit;
  weight_unit?: WeightUnit;
}

export interface TypeShipment {
  _cls_: string;
  _id: {
    $oid: number;
  };
}

export interface Dimensions {
  no_of_pieces?: number;
  length_unit?: string;
  length?: number;
  width?: number;
  height?: number;
  cbm?: number;
  cft?: number;
}

export interface RequestBulkSeaLoad {
  shipment: TypeShipment;
  description?: string;
  hazard_details?: {
    is_hazardous?: boolean;
    un_number?: HazardUnNumber;
    hazard_class?: HazardClass;
    hazardouse_level?: string;
    temp_unit?: string;
    flash_point?: number;
    emergency_contact?: string;
    hazard_special_instruction?: string;
  };
  bulk_cargo_type?: string;
  gross_wt?: number;
  loading_rate?: number;
  discharging_rate?: number;
  additional_information?: string;
}

export interface RequestRoroSeaLoad {
  shipment: TypeShipment;
  description?: string;
  package_quantity: number;
  total_units?: number;
  weight_unit?: WeightUnit;
  length_unit?: LengthUnit;
  hazard_details?: {
    is_hazardous?: boolean;
    un_number?: HazardUnNumber;
    hazard_class?: HazardClass;
    hazardouse_level?: string;
    temp_unit?: string;
    emergency_contact?: string;
    flash_point?: number;
    hazard_special_instruction?: string;
  };
  package_type: LoadType;
  per_unit_weight?: number;
  gross_wt?: number;
  chargeable_wt?: number;
  length?: number;
  width?: number;
  height?: number;
  cbm?: number;
  cft?: number;
  vin_no?: string;
  make?: string;
  model?: string;
  year?: string;
}

export interface RequestfclSeaLoad {
  shipment?: TypeShipment;
  description?: string;
  weight_unit?: string;
  hazard_details?: {
    is_hazardous: boolean;
  };
  container_type: ShipthisBasic;
  container_no?: string;
  gross_wt?: number;
  net_wt?: number;
  cbm?: number;
  cft?: number;
  seal_no?: string;
  custom_seal_no?: string;
  pickup_number?: string;
  packages?: fclPackage[];
}

export interface RequestAirLoad {
  shipment?: TypeShipment;
  description?: string;
  cbm_compute?: string;
  weight_unit: WeightUnit;
  dimensions?: Dimensions[];
  hazard_details?: {
    is_hazardous: boolean;
  };
  package_type: LoadType;
  package_quantity: number;
  total_units?: number;
  chargeable_wt?: number;
  net_wt?: number;
  gross_wt?: number;
  cft?: number;
  cbm?: number;
  gross_wt_kg?: number;
}

export interface RequestlclSeaLoad {
  shipment: TypeShipment;
  description?: string;
  package_quantity: number;
  total_units?: number;
  weight_unit?: WeightUnit;
  length_unit?: LengthUnit;
  custom?: {
    vehicle_type: string;
  };
  hazard_details?: {
    is_hazardous: boolean;
    un_number: HazardUnNumber;
    hazard_class: HazardClass;
    hazardouse_level: string;
    temp_unit: Temp;
    flash_point: number;
    emergency_contact: string;
    hazard_special_instruction: string;
  };
  container_type?: LoadType;
  package_type: LoadType;
  container_no?: string;
  marks_and_no?: string;
  seal_no?: string;
  custom_seal_no?: string;
  number_and_kind_of_package_override?: string;
  hs_code?: string;
  per_unit_weight?: number;
  gross_wt?: number;
  net_wt?: number;
  chargeable_wt?: number;
  length?: number;
  width?: number;
  height?: number;
  cbm?: number;
  cft?: number;
}

export interface RequestftlLandLoad {
  shipment: TypeShipment;
  description: string;
  weight_unit: string;
  hazard_details: {
    is_hazardous: boolean;
  };
  packages: [
    {
      description: string;
      length_unit: string;
      weight_unit: string;
      package_type: ShipMethod;
      package_quantity: number;
      length: number;
      width: number;
      height: number;
      cbm: number;
      cft: number;
      gross_wt: number;
      net_wt: number;
    },
  ];
  marks_and_no: string;
  vehicle_type: ShipMethod;
  vehicle_no: string;
  seal_no: string;
  gross_wt: number;
  net_wt: number;
}

export interface LoadType {
  _id: ID;
  name: string;
  code?: string;
  _cls_: string;
}

export enum WeightUnit {
  Kg = 'kg',
  Lb = 'lb',
}

export enum LengthUnit {
  Cm = 'cm',
  Mtr = 'mtr',
  Inches = 'inches',
  Ft = 'ft',
}
export interface ltlPackage {
  shipment?: TypeShipment;
  description?: string;
  _auto_generated?: string;
  package_quantity?: number;
  total_units?: number;
  weight_unit?: WeightUnit;
  length_unit?: string;
  hazard_details?: {
    is_hazardous: boolean;
  };
  vehicle_type: ShipMethod;
  vehicle_no?: string;
  marks_and_no?: string;
  hs_code?: string;
  seal_no?: string;
  package_type: ShipMethod;
}

export interface fclLandLoad {
  shipment: TypeShipment;
  description: string;
  weight_unit: string;
  hazard_details: {
    is_hazardous: false;
  };
  container_type: ShipthisBasic;
  container_no: string;
  marks_and_no: string;
  gross_wt: number;
  net_wt: number;
  number_and_kind_of_package_override: string;
  cbm: number;
  cft: number;
  seal_no: string;
  custom_seal_no: string;
  pickup_number: string;
  packages: [
    {
      description: string;
      length_unit: string;
      weight_unit: string;
      package_type: LoadType;
      package_quantity: 0;
      length: 0;
      width: 0;
      height: 7;
      cbm: 0.010332;
      cft: 0.365;
      gross_wt: 5;
      total_units: 4;
    },
  ];
}

export interface AddNewCustomerData {
  opening_balance?: any;
  account_contact_person?: {
    same_as_primary: boolean;
    additional_emails: [];
    enable_portal_access: boolean;
  };
  company: {
    is_agent?: boolean;
    name: string;
    phone: string;
    client_code?: string;
  };
  primary_contact_person: {
    additional_emails?: [];
    enable_portal_access: boolean;
    first_name: string;
    last_name: string;
    name: string;
    email: string;
  };
  address?: {
    city: any;
  };
  __events?: {
    lead__date: {
      $date: number;
    };
    lead__comments: string;
  };
  accounting: {
    credit_limit: number;
    external_balance: number;
    account_credit_block: boolean;
    block_reason: string;
    currency: string; // refernce field currency
    is_inter_branch: boolean;
    need_insurance: boolean;
    automatic_ar_reminder: {
      enable_automatic_reminder: boolean;
    };
    automatic_ar_aging_reminder: {
      enable_automatic_reminder: boolean;
    };
    notification: {
      sea_shipment: any;
      air_shipment: any;
      land_shipment: any;
      clearance_job: any;
      documentation_job: any;
    };
    documents: [];
    customer_lifecycle: string;
    full_address: string;
    full_address_field_compute: string;
  };
}

export interface AddNewShipper {
  company: {
    party_type: string[];
    name: string;
    phone?: string;
  };
  primary_contact_person?: any;
  account_contact_person?: any;
  address?: {
    city: any;
  };
  full_address?: string;
  full_address_field?: string;
}
