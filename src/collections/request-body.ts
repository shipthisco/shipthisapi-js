export const requiredData = [
  'customer_name',
  'shipment_class',
  'shipment_type',
  'shipment_term',
  'shipment_name',
  'operation_executive',
  'port_of_discharge',
  'port_of_loading',
  'carrier_code',
];
export const requiredShipmentType = ['import', 'export', 'cross_trade'];
export const requiredShipmentClass = ['direct', 'house', 'master'];
export const movementType = [
  'door_to_door',
  'door_to_port',
  'port_to_port',
  'port_to_door',
];
export const freightChargeTeam = ['prepaid', 'collect', 'third_party'];

// request data for Air shipment
export const requestAirShipment = {
  port_of_loading: {},
  port_of_discharge: {},
  job_id: '',
  customer_name: {},
  shipment_type: '',
  shipment_name: '',
  shipment_term: {},
  carrier_code: '',
  __scp: {},
  'port_of_loading.transit_time': '',
  hawb_rates: '',
  __events: {
    opened__date: {
      $date: new Date().getTime(), // pass current date in milliseconds
    },
    opened__comments: '',
  },
  is_consolidated_shipment: false,
  enable_automated_tracking: false,
  custom: {
    is_exhibition: false,
  },
  order_ref_no: [],
  shipper_declared_value: {
    amount: 0,
  },
  country_of_origin: {},
  insurance: {
    need_insurance: false,
  },
  cartage_cost_amount: 0,
  place_of_receipt: {
    location: {},
  },
  place_of_delivery: {
    location: {},
  },
  operation_executive: {},
  forwarding_agent_show_on_master: true,
  destination_agent_show_on_master: true,
  pod_documents: [],
  skus: [],
  under_watchlist: false,
  notify_events_via_email: false,
  tags: [],
  pick_charge_from_invoice: false,
  hawb_override_dimensions: false,
  hawb_rate_class_code: 'B',
  hawb_rate_or_charge: 0,
  hawb_rate_total: 0,
  hawb_has_other_charges: false,
  documents: [],
  customer_documents: [],
  customer_uploaded_documents: [],
  shipment_status: 'opened',
  shipment_class: '',
  master_shipment_cost_allocation: '',
};

// request data for sea shipemnt
export const requestSeaShipement = {
  __scp: {},
  'port_of_loading.transit_time': '',
  __events: {
    opened__date: {
      $date: new Date().getTime(),
    },
    opened__comments: '',
  },
  enable_automated_tracking: false,
  enable_inter_branch: false,
  custom: {
    is_removal_shipment: false,
  },
  order_ref_no: [],
  shipper_declared_value: {
    amount: 0,
  },
  country_of_origin: {},
  insurance: {
    need_insurance: false,
  },
  cartage_cost_amount: 0,
  place_of_pickup: {
    location: {},
  },
  place_of_receipt: {
    location: {},
  },
  port_of_loading: {},
  port_of_discharge: {},
  port_of_destination: {},
  place_of_delivery: {
    location: {},
  },
  final_destination: {},
  forwarding_agent_show_on_master: false,
  destination_agent_show_on_master: false,
  has_switch_bl: false,
  pod_documents: [],
  skus: [],
  under_watchlist: false,
  notify_events_via_email: false,
  tags: [],
  documents: [],
  customer_documents: [],
  customer_uploaded_documents: [],
  shipment_status: '',
  job_id: '',
  product_type: '',
  customer_name: {},
  shipment_type: '',
  weight_unit: '',
  volume_unit: '',
  shipment_class: '',
  shipment_term: {},
  shipment_name: '',
  volume: '',
};

// request data for land shipment
export const requestLandShipment = {
  __scp: {},
  __events: {
    opened__date: {
      $date: new Date().getTime(),
    },
    opened__comments: '',
  },
  master_shipment_revenue_allocation: 'per_cbm',
  master_shipment_cost_allocation: 'per_cbm',
  enable_automated_tracking: false,
  custom: {},
  order_ref_no: [],
  shipper_declared_value: {
    amount: 0,
  },
  country_of_origin: {},
  insurance: {
    need_insurance: false,
  },
  origin: {
    location: {},
  },
  destination: {
    location: {},
  },
  operation_executive: {},
  pod_documents: [],
  skus: [],
  under_watchlist: false,
  notify_events_via_email: false,
  tags: [],
  documents: [],
  customer_documents: [],
  customer_uploaded_documents: [],
  shipment_status: 'opened',
  job_id: '',
  shipment_class: '',
  customer_name: {},
  shipment_type: '',
  movement_type: '',
  master_reference: {},
  shipment_term: {},
  shipment_name: '',
};

export const partiesPayload = {
  fields: [
    'company.name',
    'full_address',
    'address',
    'tin_no',
    'company.phone',
  ],
  display_fields: ['company.name'],
  filter_txt: '',
  input_filters: '{}',
  general_filters: '{}',
};
export const referencePortPayload = {
  fields: ['name', 'location', 'code'],
  display_fields: ['code', 'name'],
  filter_txt: '',
  input_filters: '{}',
  general_filters: '{}',
};
export const referenceCustomerPayload = {
  fields: [
    'primary_contact_person',
    'company',
    'sales_person',
    'payment_term',
    'currency',
    '__warn',
    'customs_agent',
    'cartage_by',
  ],
  display_fields: ['company.name'],
  filter_txt: '',
  input_filters: '{}',
  general_filters: '{}',
};

export const invoiceRequiredData = ['customer', 'invoice_currency'];
export const invoiceRequestData = {
  reqbody: {
    items: [],
    invoice_payment_term: {},
    __scp: {},
    invoice_total: 0,
    invoice_tax_total: 0,
    invoice_sub_total: 0,
    invoice_service_total: 0,
    invoice_currency_sub_total: {},
    invoice_tax_breakup: [],
    invoice_rcm_breakup: [],
    invoice_rcm_tax_total: 0,
    invoice_sub_total_base_currency: 0,
    invoice_tax_total_base_currency: 0,
    invoice_additional_charge: 0,
    charges_breakup: [],
    invoice_additional_charge_base_currency: 0,
    invoice_total_base_currency: 0,
    invoice_date: {
      $date: 1662508800000,
    },
    invoice_due_date: {
      $date: 1662508800000,
    },
    custom: {},
    adjustment_text: 'Adjustment',
    adjustment_amount: 0,
    documents: [],
    invoice_number: 'INV000283',
    invoice_currency: {
      _id: {
        $oid: '595e2af33a90d475eead24d2',
      },
      name: 'EUR',
      _cls_: 'currency',
      _operation: {
        edit: true,
        delete: true,
      },
      __display: 'EUR',
    },
    exchange_rate: 0.988352,
    customer: {
      _id: {
        $oid: '62f43e1ebca73696c1ac45d4',
      },
      company: {
        name: 'upen parik inc',
      },
      primary_contact_person: {
        name: 'Upen',
      },
      _cls_: 'customer',
      __display: 'upen parik inc',
    },
  },
  action_op_data: {},
  'captcha-response': {},
};

export const createNewCustomer = {
  opening_balance: {},
  account_contact_person: {
    same_as_primary: false,
    additional_emails: [],
    enable_portal_access: false,
  },
  company: {
    is_agent: false,
    name: '',
    phone: '',
    client_code: '',
  },
  primary_contact_person: {
    additional_emails: [],
    enable_portal_access: false,
    first_name: '',
    last_name: '',
    name: '',
    email: '',
  },
  address: {
    city: {},
  },
  __events: {
    lead__date: {
      $date: new Date().getTime(),
    },
    lead__comments: '',
  },
  accounting: {
    credit_limit: 0,
    external_balance: 0,
    account_credit_block: false,
    block_reason: 'Exceeded Credit Terms',
    currency: {}, // refernce field currency
    is_inter_branch: false,
    need_insurance: false,
    automatic_ar_reminder: {
      enable_automatic_reminder: false,
    },
    automatic_ar_aging_reminder: {
      enable_automatic_reminder: false,
    },
    notification: {
      sea_shipment: {},
      air_shipment: {},
      land_shipment: {},
      clearance_job: {},
      documentation_job: {},
    },
    documents: [],
    customer_lifecycle: 'lead',
    full_address: '\r\nE :cargoson@gmail.com\r\nT :93848928993',
    full_address_field_compute: '',
  },
};

export const createNewShipper = {
  company: {
    party_type: [],
    name: '',
    phone: '',
  },
  primary_contact_person: {},
  account_contact_person: {},
  address: {
    city: {},
  },
  full_address: '',
  full_address_field: '',
};

export const fclSeaLoad = {
  shipment: [
    {
      _cls_: 'sea_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  weight_unit: '',
  hazard_details: {
    is_hazardous: false,
  },
  container_type: {},
  container_no: '',
  gross_wt: 0,
  net_wt: 0,
  cbm: 0,
  cft: 0,
  seal_no: '',
  custom_seal_no: '',
  pickup_number: '',
  packages: [],
};

export const Airload = {
  shipment: [
    {
      _cls_: 'air_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  cbm_compute: '',
  weight_unit: '',
  dimensions: [],
  hazard_details: {
    is_hazardous: false,
  },
  package_type: {},
  package_quantity: 0,
  total_units: 0,
  chargeable_wt: 0,
  net_wt: 0,
  gross_wt: 0,
  cft: 0,
  cbm: 0,
  gross_wt_kg: 0,
};

export const lclSeaLoad = {
  shipment: [
    {
      _cls_: 'sea_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  package_quantity: 0,
  total_units: 0,
  weight_unit: '',
  length_unit: '',
  custom: {
    vehicle_type: '',
  },
  hazard_details: {
    is_hazardous: false,
    un_number: {},
    hazard_class: {},
    hazardouse_level: '',
    temp_unit: '',
    emergency_contact: '',
    flash_point: 0,
    hazard_special_instruction: '',
  },
  container_type: {},
  package_type: {},
  container_no: '',
  marks_and_no: '',
  seal_no: '',
  custom_seal_no: '',
  number_and_kind_of_package_override: '',
  hs_code: '',
  per_unit_weight: 0,
  gross_wt: 0,
  net_wt: 0,
  chargeable_wt: 0,
  length: 0,
  width: 0,
  height: 0,
  cbm: 0,
  cft: 0,
};

export const RoroSeaLoad = {
  shipment: [
    {
      _cls_: 'sea_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  package_quantity: 0,
  total_units: 0,
  weight_unit: '',
  length_unit: '',
  hazard_details: {
    is_hazardous: false,
    un_number: {},
    hazard_class: {},
    hazardouse_level: '',
    temp_unit: '',
    emergency_contact: '',
    flash_point: 0,
    hazard_special_instruction: '',
  },
  package_type: {},
  per_unit_weight: 0,
  gross_wt: 0,
  chargeable_wt: 0,
  length: 0,
  width: 0,
  height: 0,
  cbm: 0,
  cft: 0,
  vin_no: '',
  make: '',
  model: '',
  year: '',
};

export const BulkSeaLoad = {
  shipment: [
    {
      _cls_: 'sea_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  hazard_details: {
    is_hazardous: false,
    un_number: {},
    hazard_class: {},
    hazardouse_level: '',
    temp_unit: '',
    flash_point: 0,
    emergency_contact: '',
    hazard_special_instruction: '',
  },
  bulk_cargo_type: '',
  gross_wt: 0,
  loading_rate: 0,
  discharging_rate: 0,
  additional_information: '',
};

export const ftlLandLoad = {
  shipment: [
    {
      _cls_: 'land_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  weight_unit: '',
  hazard_details: {
    is_hazardous: false,
  },
  packages: [
    {
      description: '',
      length_unit: '',
      weight_unit: '',
      package_type: {},
      package_quantity: 0,
      length: 0,
      width: 0,
      height: 0,
      cbm: 0,
      cft: 0,
      gross_wt: 0,
      net_wt: 0,
    },
  ],
  marks_and_no: '',
  vehicle_type: {},
  vehicle_no: '',
  seal_no: '',
  gross_wt: 0,
  net_wt: 0,
};

export const ltlLandLoad = {
  shipment: [
    {
      _cls_: 'land_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  package_quantity: 0,
  total_units: 0,
  weight_unit: '',
  length_unit: '',
  hazard_details: {
    is_hazardous: false,
  },
  vehicle_type: {},
  vehicle_no: '',
  marks_and_no: '',
  hs_code: '',
  seal_no: '',
  package_type: {},
  per_unit_weight: 0,
  gross_wt: 0,
  chargeable_wt: 0,
  length: 0,
  width: 0,
  height: 0,
  cbm: 0,
  cft: 0,
};

export const fclLandLoad = {
  shipment: [
    {
      _cls_: 'land_shipment',
      _id: {
        $oid: '',
      },
    },
  ],
  description: '',
  weight_unit: '',
  hazard_details: {
    is_hazardous: false,
  },
  container_type: {},
  container_no: '',
  marks_and_no: '',
  gross_wt: 0,
  net_wt: 0,
  number_and_kind_of_package_override: '',
  cbm: 0,
  cft: 0,
  seal_no: '',
  custom_seal_no: '',
  pickup_number: '',
  packages: [
    {
      description: '',
      length_unit: '',
      weight_unit: '',
      package_type: {},
      package_quantity: 0,
      length: 0,
      width: 0,
      height: 7,
      cbm: 0.010332,
      cft: 0.365,
      gross_wt: 5,
      total_units: 4,
    },
  ],
};
