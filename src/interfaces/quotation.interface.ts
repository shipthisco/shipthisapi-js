import {
  Address,
  Company,
  CountryOfOrigin,
  ID,
  OperationExecutive,
  PrimaryContactPerson,
  ShipthisBasic,
} from './collection.interface';
import { WeightUnit } from './load.interface';

export interface RequestQuotationType {
  stats?: {
    gross_wt?: {
      kg?: number;
      lb?: number;
      mt?: number;
    };
    chargeable_wt_167?: {
      kg?: number;
      lb?: number;
      mt?: number;
    };
    aggregate_chargeable_wt_167?: {
      kg?: number;
      lb?: number;
      mt?: number;
    };
    volume?: {
      cbm?: number;
      cft?: number;
      cbi?: number;
    };
    package_str?: string;
    volume_str?: string;
    total_unit?: number;
    container?: any;
    container_count?: number;
    vehicle?: {
      Shipthis: number;
    };
    vehicle_count: number;
    container_teu: number;
    load_str: string;
  };
  some_random_field: string;
  shipment_type: string;
  order_ref_no: string[];
  origin: {
    location: CountryOfOrigin;
    airport_of_loading: any;
    port_of_loading: any;
    location_type: string;
    pickup_date: {
      $date: number;
    };
    pickup_address: string;
    pincode: string;
  };
  destination: {
    location: CountryOfOrigin;
    airport_of_destination: any;
    port_of_destination: any;
    location_type: string;
    pincode: string;
    drop_address: string;
  };
  documents: [];
  cargo_value: {
    amount: 123000;
    currency: ShipthisBasic;
  };
  insurance: {
    need_insurance: boolean;
  };
  refrigeration: {
    need_refrigeration: boolean;
  };
  additional: {
    is_hazardous: boolean;
    comments: string;
  };
  quotation_number: string;
  lcls: [];
  fcls: [];
  details: [];
  ltls: [];
  shipment_term: ShipthisBasic;
  shipment_movement_type: string;
  customer_name: {
    _id: ID;
    company: Company;
    primary_contact_person: PrimaryContactPerson;
    _cls_: string;
  };
  shipper_name: {
    _id: ID;
    _cls_: string;
    company: Company;
    address: Address;
    full_address: any;
  };
  consignee_name: {
    _id: ID;
    _cls_: string;
    company: Company;
    address: Address;
    full_address: any;
  };
  sales_executive: OperationExecutive;
  request_received_from: string;
  movement_type: string;
  product_type: ShipthisBasic;
  ftls: [
    {
      weight_unit: WeightUnit;
      description: string;
      vehicle_type: ShipthisBasic;
      item_stats: any;
      gross_wt: 345;
      vehicle_count: 123;
    },
  ];
}
