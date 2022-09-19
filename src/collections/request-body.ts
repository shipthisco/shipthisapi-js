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

// export const r = {
//   reqbody: {

//     job_id: 'AIR00277',
//     quotation_reference: {
//       _id: {
//         $oid: '62e9a3a1117aaaf06262025e',
//       },
//       quotation_number: 'Q-004439',
//       _cls_: 'quotation',
//       __display: 'Q-004439',
//     },
//     shipment_class: 'house',
//     master_reference: {
//       _id: {
//         $oid: '63187c551043bbea0d141a74',
//       },
//       job_id: 'AIR00272',
//       _cls_: 'air_shipment',
//       __display: 'AIR00272',
//     },
//     customer_name: {
//       _id: {
//         $oid: '629a6511a094b76b497b04ec',
//       },
//       company: {
//         name: 'Shipthis',
//         phone: '123452644',
//         website: 'jhondoe.example.com',
//         is_agent: false,
//       },
//       primary_contact_person: {
//         salutation: 'mr',
//         name: 'John Doe',
//         email: '123@shipthis.co',
//         phone: '090078601',
//         enable_portal_access: true,
//         first_name: 'John',
//         last_name: 'Doe',
//         additional_emails: [],
//       },
//       _cls_: 'customer',
//       __warn: false,
//       __display: 'Shipthis',
//     },
//     shipment_type: 'cross_trade',
//     shipment_term: {
//       _id: {
//         $oid: '5738c34a8752f565965ec2f7',
//       },
//       name: 'CARRIAGE PAID TO',
//       _cls_: 'shipment_term',
//       code: 'CPT',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'CPT - CARRIAGE PAID TO',
//     },
//     shipment_name: 'This a test',
//     is_consolidated_shipment: true,
//     master_shipment_cost_allocation: 'per_kg_chargeable_wt',
//     enable_automated_tracking: true,
//     custom: {
//       abc: {
//         $date: 1663286400000,
//       },
//       is_exhibition: false,
//     },
//     order_ref_no: ['cdygcuysegce'],
//     mawb_no: 'efewufyew',
//     airline: {
//       _id: {
//         $oid: '5738c3498752f565965ec248',
//       },
//       _cls_: 'airline',
//       prefix_code: '555',
//       name: 'Aeroflot Cargo',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'Aeroflot Cargo - 555',
//     },
//     hawb_no: 'hihiyiy',
//     booking_no: 'efhiwehfiwrefw',
//     flight_no: 'fehwihfewf',
//     additional_notes: 'eefewfwrfewfwerfewfewewfewfewfwref',
//     special_instruction: 'fewhfuweihfewbfew',
//     release_instruction: 'fiweyfyewg',
//     shipper_declared_value: {
//       currency: {
//         _id: {
//           $oid: '61af86901a4db0eb74c1fee3',
//         },
//         name: 'CLP',
//         _cls_: 'currency',
//         _operation: {
//           edit: true,
//           delete: true,
//         },
//         __display: 'CLP',
//       },
//       amount: 6000,
//     },
//     country_of_origin: {
//       description: 'Houston, TX, USA',
//       bold: 'Houston',
//       lat: 29.7604267,
//       lng: -95.3698028,
//       query_type: 'place_id',
//       type: 'city',
//       province: 'Texas',
//       province_code: 'TX',
//       city: 'Houston',
//       country: 'United States',
//       country_code: 'US',
//     },
//     insurance: {
//       need_insurance: true,
//       currency: {
//         _id: {
//           $oid: '5ab0b81a3a90d4d4b7a30767',
//         },
//         name: 'CAD',
//         _cls_: 'currency',
//         _operation: {
//           edit: true,
//           delete: true,
//         },
//         __display: 'CAD',
//       },
//       amount: 5000,
//     },
//     cartage_by: {
//       _id: {
//         $oid: '606189b318a677b698d6bd9d',
//       },
//       company: {
//         name: 'Monter Global Logistics (S) Pte Ltd',
//         vendor_type: ['carrier'],
//         nick_name: 'Monter',
//       },
//       primary_contact_person: {
//         salutation: 'mrs',
//         name: 'Mrs. Poovai',
//         enable_portal_access: false,
//         first_name: 'Poovai',
//         last_name: 'Kasinathan',
//         additional_emails: [],
//       },
//       address: {
//         city: {},
//       },
//       _cls_: 'vendor',
//       __display: 'Monter Global Logistics (S) Pte Ltd',
//     },
//     cartage_cost_currency: {
//       _id: {
//         $oid: '6024c18ca8786c22a46bc5b6',
//       },
//       name: 'MXN',
//       _cls_: 'currency',
//       __display: 'MXN',
//     },
//     cartage_cost_amount: 8000,
//     customs_clearance_by: {
//       _id: {
//         $oid: '606189b318a677b698d6bd9d',
//       },
//       company: {
//         name: 'Monter Global Logistics (S) Pte Ltd',
//         vendor_type: ['carrier'],
//         nick_name: 'Monter',
//       },
//       primary_contact_person: {
//         salutation: 'mrs',
//         name: 'Mrs. Poovai',
//         enable_portal_access: false,
//         first_name: 'Poovai',
//         last_name: 'Kasinathan',
//         additional_emails: [],
//       },
//       address: {
//         city: {},
//       },
//       _cls_: 'vendor',
//       __display: 'Monter Global Logistics (S) Pte Ltd',
//     },
//     place_of_receipt: {
//       location: {
//         description: 'Yellowstone National Park, United States',
//         bold: 'Yellowstone National Park',
//         lat: 44.427963,
//         lng: -110.588455,
//         query_type: 'place_id',
//         type: 'establishment',
//         province: null,
//         province_code: null,
//         sub_area: null,
//         area: null,
//         zipcode: null,
//         city: 'United States',
//         country: 'United States',
//         country_code: 'US',
//       },
//       arrival_date: {
//         $date: 1663891200000,
//       },
//       original_arrival_date: {
//         $date: 1663891200000,
//       },
//     },
//     port_of_loading: {
//       port: {
//         _id: {
//           $oid: '5fc97c63d6990771aa56ed4c',
//         },
//         name: 'Istanbul',
//         code: 'ISL',
//         location: {
//           description: 'İstanbul, Turkey',
//           bold: 'İstanbul',
//           lat: 41.0082376,
//           lng: 28.9783589,
//           query_type: 'place_id',
//           type: 'city',
//           province: 'İstanbul',
//           province_code: 'İstanbul',
//           city: 'İstanbul',
//           country: 'Turkey',
//           country_code: 'TR',
//         },
//         _cls_: 'airport',
//         __display: 'ISL - Istanbul',
//       },
//       departure_date: {
//         $date: 1663027200000,
//       },
//       original_departure_date: {
//         $date: 1663027200000,
//       },
//       transit_time: 1,
//     },
//     port_of_discharge: {
//       port: {
//         _id: {
//           $oid: '5acda46a4affc629d93e85c2',
//         },
//         name: 'Chek Lap Kok International Airport',
//         code: 'HKG',
//         location: {
//           description: 'Hong Kong Island, Hong Kong',
//           bold: 'Hong Kong Island',
//           lat: 22.2587586,
//           lng: 114.1910696,
//           query_type: 'place_id',
//           type: 'establishment',
//           province: 'Hong Kong Island',
//           province_code: 'Hong Kong Island',
//           sub_area: null,
//           area: null,
//           zipcode: null,
//           city: 'Hong Kong',
//           country: 'Hong Kong',
//           country_code: 'HK',
//         },
//         _cls_: 'airport',
//         __display: 'HKG - Chek Lap Kok International Airport',
//       },
//       arrival_date: {
//         $date: 1663113600000,
//       },
//       original_arrival_date: {
//         $date: 1663977600000,
//       },
//     },
//     place_of_delivery: {
//       location: {
//         description: 'Boston, MA, USA',
//         bold: 'Boston',
//         lat: 42.3600825,
//         lng: -71.0588801,
//         query_type: 'place_id',
//         type: 'city',
//         province: 'Massachusetts',
//         province_code: 'MA',
//         city: 'Boston',
//         country: 'United States',
//         country_code: 'US',
//       },
//       delivery_date: {
//         $date: 1663718400000,
//       },
//       original_delivery_date: {
//         $date: 1663718400000,
//       },
//     },
//     operation_executive: {
//       _id: {
//         $oid: '5ea15383dc21e40008482067',
//       },
//       name: 'Ashish',
//       __display: 'Ashish',
//       email: 'ashishkmr2210@gmail.com',
//       _cls_: 'employee',
//     },
//     sales_executive: {
//       _id: {
//         $oid: '62558efebde912fc22c9179b',
//       },
//       name: 'Testing Group',
//       _cls_: 'employee_group',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'Testing Group',
//     },
//     shipper_name: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     consignee_name: {
//       _id: {
//         $oid: '629a80a9e34a3df399817887',
//       },
//       company: {
//         name: 'XYZ',
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'customer_party',
//       __display: 'XYZ',
//     },
//     shipper_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     consignee_address: '',
//     pickup: {
//       _id: {
//         $oid: '629a80a9e34a3df399817887',
//       },
//       company: {
//         name: 'XYZ',
//         party_type: ['consignee'],
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'customer_party',
//       __display: 'XYZ',
//     },
//     delivery: {
//       _id: {
//         $oid: '629a80a9e34a3df399817887',
//       },
//       company: {
//         name: 'XYZ',
//         party_type: ['consignee'],
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'customer_party',
//       __display: 'XYZ',
//     },
//     forwarding_agent: {
//       _id: {
//         $oid: '6214be0d02f1e63b6afee4dc',
//       },
//       company: {
//         name: 'Agent no 2',
//         vendor_type: ['agent'],
//         nick_name: 'dubai agent',
//         vendor_id: '13232343',
//         phone: '971000000',
//         shipthis_code: '12345',
//       },
//       primary_contact_person: {
//         salutation: 'mr',
//         email: '',
//         enable_portal_access: false,
//         first_name: 'Rajiv',
//         last_name: 'Agarwal',
//         additional_emails: [],
//       },
//       address: {
//         city: {},
//       },
//       full_address: 'T :971000000',
//       _cls_: 'vendor',
//       __display: 'Agent no 2',
//     },
//     forwarding_agent_show_on_master: true,
//     destination_agent: {
//       _id: {
//         $oid: '62bac8d1aeacac5c45584d30',
//       },
//       company: {
//         name: 'XYZ company',
//         vendor_type: ['customs_agent'],
//         nick_name: 'XYZ',
//         vendor_id: 'SAPV123',
//         website: 'xyzagents.com',
//         customer_segment: [
//           {
//             _id: {
//               $oid: '61f7eeebaeb6a0c5e01b1d9d',
//             },
//             name: 'Pharma & Life Sciences',
//             _cls_: 'customer_segment',
//             __display: 'Pharma & Life Sciences',
//           },
//         ],
//       },
//       primary_contact_person: {
//         salutation: 'mr',
//         name: 'Mr. Sartaj Beary',
//         email: '',
//         enable_portal_access: true,
//         first_name: 'Sartaj',
//         last_name: 'Beary',
//         additional_emails: [],
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'vendor',
//       __display: 'XYZ company',
//     },
//     destination_agent_show_on_master: true,
//     forwarding_agent_address: 'T :971000000',
//     destination_agent_address: '',
//     consolidator: {
//       _id: {
//         $oid: '5f92882bd6c8f20134c23e15',
//       },
//       company: {
//         name: 'Vanguard Logistics',
//         vendor_type: ['consolidator'],
//         website: 'www.vls-global.com',
//       },
//       address: {
//         line_1: 'asdad',
//         line_2: 'asdasdas',
//         city: {},
//       },
//       full_address: 'asdad\r\nasdasdas',
//       _cls_: 'vendor',
//       __display: 'Vanguard Logistics',
//     },
//     consolidator_address: 'asdad\r\nasdasdas',
//     place_of_consolidation_address: '',
//     notify_party: {
//       _id: {
//         $oid: '629a80a9e34a3df399817887',
//       },
//       company: {
//         name: 'XYZ',
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'customer_party',
//       __display: 'XYZ',
//     },
//     also_notify_party: {
//       _id: {
//         $oid: '629a80a9e34a3df399817887',
//       },
//       company: {
//         name: 'XYZ',
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'customer_party',
//       __display: 'XYZ',
//     },
//     notify_party_address: '',
//     carrier_code: '77777',
//     portOfDischarge: {
//       _id: {
//         $oid: '5e459faf0e6f36000a5154d8',
//       },
//       name: 'test',
//       code: 'test',
//       _cls_: 'customs_port',
//       __display: 'test - test',
//     },
//     portOfDestination: {
//       _id: {
//         $oid: '5fd78f407b332b4a8fe3ec36',
//       },
//       name: 'TORONTO',
//       code: 'YYZ',
//       _cls_: 'customs_port',
//       __display: 'YYZ - TORONTO',
//     },
//     dischargeSublocationCode: {
//       _id: {
//         $oid: '5fd7a29cf4515919b6c0de66',
//       },
//       name: 'Swissport Canada Handling Inc.',
//       sub_loc_code: '2689',
//       customs_code: '0396',
//       address: {
//         line_1: '',
//         line_2: '101-800 Stuart Graham, S',
//         pincode: 'H4Y 1J6',
//         city: {
//           description: 'Dorval, QC, Canada',
//           bold: 'Dorval',
//           lat: 45.4503213,
//           lng: -73.75004849999999,
//           query_type: 'place_id',
//           type: 'city',
//           province: 'Quebec',
//           province_code: 'QC',
//           city: 'Dorval',
//           country: 'Canada',
//           country_code: 'CA',
//         },
//       },
//       _cls_: 'customs_sub_location',
//       __display: '2689 - Swissport Canada Handling Inc.',
//     },
//     destinationSublocationCode: {
//       _id: {
//         $oid: '5fd7b2ae9ad492c5058f6606',
//       },
//       name: 'GTA World Cargo',
//       sub_loc_code: '5502',
//       customs_code: '0497',
//       address: {
//         line_1: '2710 Britannia rd, E, building C2',
//         pincode: 'L5P 1B2',
//         city: {
//           description: 'Mississauga, ON, Canada',
//           bold: 'Mississauga',
//           lat: 43.5890452,
//           lng: -79.6441198,
//           query_type: 'place_id',
//           type: 'city',
//           province: 'Ontario',
//           province_code: 'ON',
//           city: 'Mississauga',
//           country: 'Canada',
//           country_code: 'CA',
//         },
//       },
//       _cls_: 'customs_sub_location',
//       __display: '5502 - GTA World Cargo',
//     },
//     primaryCCN: 'cefcfecv',
//     previousCCN: 'vcrvrgv',
//     consolidationIndicator: 'N',
//     override_cargo_control_number: 'cfevvrvr',
//     pod_documents: [],
//     skus: [],
//     under_watchlist: false,
//     notify_events_via_email: false,
//     tags: [],
//     mawb_rate_class_code: 'B',
//     pick_charge_from_invoice: false,
//     hawb_override_dimensions: false,
//     hawb_rate_class_code: 'B',
//     hawb_rate_or_charge: 0,
//     hawb_rate_total: 0,
//     hawb_has_other_charges: false,
//     documents: [],
//     customer_documents: [],
//     customer_uploaded_documents: [],
//     job_status: 'open',
//     shipment_status: 'opened',
//     __events: {
//       opened__date: {
//         $date: 1663113600000,
//       },
//       opened__comments: '',
//     },
//     _cls_: 'air_shipment',
//     _last_update: '',
//     __deleted: false,
//     _last_remark: '',
//     __status: {},
//     __scp: {},
//     __import_reference: null,
//     __subscribers: {
//       customers: ['123@shipthis.co'],
//       vendors: [],
//       employee: ['ashishkmr2210@gmail.com'],
//     },
//     __region_id: ['usa'],
//     __location_id: ['new_york'],
//     _created_by: '5ea15383dc21e40008482068',
//     _created_by_name: 'Ashish',
//     _created_by_email: 'ashishkmr2210@gmail.com',
//     _last_modified_by: '5ea15383dc21e40008482068',
//     _last_modified_by_name: 'Ashish',
//     _last_modified_by_email: 'ashishkmr2210@gmail.com',
//     __cache: {
//       house_shipments: {
//         shipment_stats: [],
//       },
//     },
//     'port_of_loading.transit_time': '',
//     hawb_rates: '',
//   },
//   action_op_data: {},
// };

// const l = {
//   __scp: {},
//   __events: {
//     opened__date: {
//       $date: 1663200000000,
//     },
//     opened__comments: '',
//   },
//   master_shipment_revenue_allocation: 'per_kg_gross_wt',
//   master_shipment_cost_allocation: 'per_kg_gross_wt',
//   enable_automated_tracking: false,
//   custom: {
//     booth_no: 'jgftfthfhhvkukykhhkyfjjyjjyy',
//   },
//   order_ref_no: ['vhftftff'],
//   shipper_declared_value: {
//     amount: 6000,
//     currency: {
//       _id: {
//         $oid: '5fa1a747882ef25be597ed00',
//       },
//       name: 'BWP',
//       _cls_: 'currency',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'BWP',
//     },
//   },
//   country_of_origin: {
//     description: 'Chennai, Tamil Nadu, India',
//     bold: 'Chennai',
//     lat: 13.0826802,
//     lng: 80.2707184,
//     query_type: 'place_id',
//     type: 'city',
//     province: 'Tamil Nadu',
//     province_code: 'TN',
//     city: 'Chennai',
//     country: 'India',
//     country_code: 'IN',
//   },
//   insurance: {
//     need_insurance: true,
//     amount: 3000,
//     currency: {
//       _id: {
//         $oid: '5fa1a72de4f947690e53d5bf',
//       },
//       name: 'ZAR',
//       _cls_: 'currency',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'ZAR',
//     },
//   },
//   origin: {
//     location: {
//       description:
//         'Yorkdale Shopping Centre, Dufferin Street, Toronto, ON, Canada',
//       bold: 'Yorkdale Shopping Centre',
//       lat: 43.725435,
//       lng: -79.4521692,
//       query_type: 'place_id',
//       type: 'establishment',
//       province: 'Ontario',
//       province_code: 'ON',
//       sub_area: null,
//       area: 'North York',
//       zipcode: 'M6A 2T9',
//       city: 'Toronto',
//       country: 'Canada',
//       country_code: 'CA',
//     },
//     pickup_date: {
//       $date: 1662737640000,
//     },
//     departure_date: {
//       $date: 1663632000000,
//     },
//   },
//   destination: {
//     location: {
//       description: 'Gurun Sahara',
//       bold: 'Sahara Desert',
//       lat: 23.4162027,
//       lng: 25.66283,
//       query_type: 'place_id',
//       type: 'establishment',
//       province: null,
//       province_code: null,
//       sub_area: null,
//       area: null,
//       zipcode: null,
//       city: null,
//       country: null,
//       country_code: null,
//     },
//     arrival_date: {
//       $date: 1663200000000,
//     },
//     delivered_date: {
//       $date: 1663618080000,
//     },
//   },
//   operation_executive: {
//     _id: {
//       $oid: '5ea15383dc21e40008482067',
//     },
//     name: 'Ashish',
//     __display: 'Ashish',
//     email: 'ashishkmr2210@gmail.com',
//     _cls_: 'employee',
//   },
//   pod_documents: [],
//   skus: ['jewddwfwfbhiw'],
//   under_watchlist: true,
//   notify_events_via_email: true,
//   tags: ['cbhwewu'],
//   documents: [],
//   customer_documents: [],
//   customer_uploaded_documents: [],
//   shipment_status: 'opened',
//   job_id: 'LAND000098',
//   shipment_name: 'gfh',
//   customer_name: {
//     _id: {
//       $oid: '629a6511a094b76b497b04ec',
//     },
//     company: {
//       name: 'Shipthis',
//       phone: '123452644',
//       website: 'jhondoe.example.com',
//       is_agent: false,
//     },
//     primary_contact_person: {
//       salutation: 'mr',
//       name: 'John Doe',
//       email: '123@shipthis.co',
//       phone: '090078601',
//       enable_portal_access: true,
//       first_name: 'John',
//       last_name: 'Doe',
//       additional_emails: [],
//     },
//     address: {
//       line_1: 'abc street',
//       line_2: 'near metro station',
//       city: {
//         description: 'Indiranagar, Bengaluru, Karnataka, India',
//         bold: 'Indiranagar',
//         lat: 12.9783692,
//         lng: 77.6408356,
//         query_type: 'place_id',
//         type: 'area',
//         zipcode: null,
//         province: 'Karnataka',
//         province_code: 'KA',
//         area: 'Indiranagar',
//         city: 'Bengaluru',
//         city_code: 'Bengaluru',
//         country: 'India',
//         country_code: 'IN',
//       },
//       pincode: '455550550',
//     },
//     need_insurance: false,
//     _cls_: 'customer',
//     __warn: false,
//     __display: 'Shipthis',
//   },
//   quotation_reference: {
//     _id: {
//       $oid: '63034abc1a638eaee7306e73',
//     },
//     quotation_number: 'Q-004443',
//     created_at: {
//       $date: 1661160124163,
//     },
//     _cls_: 'quotation',
//     __cache: {
//       responses: {
//         accepted_response: {
//           quotation_response_currency: {
//             __display: 'USD',
//             _cls_: 'currency',
//             _id: {
//               $oid: '58144f4d3a90d4b7eacdcf39',
//             },
//             name: 'USD',
//           },
//           quotation_response_total: 1200000,
//         },
//       },
//     },
//     __display: 'Q-004443',
//   },
//   shipment_class: 'house',
//   movement_type: 'port_to_port',
//   master_reference: {
//     _id: {
//       $oid: '631ed9cb078ad285633bb136',
//     },
//     job_id: 'SEA000967',
//     _cls_: 'sea_shipment',
//     __display: 'SEA000967',
//   },
//   shipment_term: {
//     _id: {
//       $oid: '5738c34a8752f565965ec2f9',
//     },
//     name: 'COST INSURANCE  FREIGHT',
//     _cls_: 'shipment_term',
//     code: 'CIF',
//     _operation: {
//       edit: true,
//       delete: true,
//     },
//     __display: 'CIF - COST INSURANCE  FREIGHT',
//   },
//   product_type: {
//     _id: {
//       $oid: '5fb4fac17c74b6bbb327def7',
//     },
//     name: 'Pharmaceutical',
//     code: 'pharmaceutical',
//     _cls_: 'product_type',
//     _operation: {
//       edit: true,
//       delete: true,
//     },
//     __display: 'Pharmaceutical',
//   },
//   booking_no: ' bhjgyufyuftyjfyjfyfyfykflug',
//   tracking_no: 'buykg7yiiyfhvyhfyhvyhfyf',
//   truck_no: 'ygyigyjghygvytfrtdr',
//   carrier: {
//     _id: {
//       $oid: '5f77469b750aca653e8d9cd0',
//     },
//     company: {
//       name: 'Test Customer',
//       vendor_type: [
//         'agent',
//         'carrier',
//         'trade',
//         'consolidator',
//         'customs_agent',
//       ],
//       nick_name: 'test',
//     },
//     primary_contact_person: {
//       name: 'ABC def',
//       enable_portal_access: false,
//       first_name: 'ABC',
//       last_name: 'def',
//       additional_emails: [],
//     },
//     address: {
//       city: {},
//     },
//     full_address: '',
//     _cls_: 'vendor',
//     __display: 'Test Customer',
//   },
//   carrier_quote_no: ' mhvttgh',
//   additional_notes: ' nmhvyjfyjfftfy',
//   special_instruction: 'b bncvghg ',
//   release_instruction: 'dgewgfduwgfturwf',
//   freight_charge_term: 'collect',
//   intermediate_points: [
//     {
//       location: {
//         description: 'Gurun Sahara',
//         bold: 'Sahara Desert',
//         lat: 23.4162027,
//         lng: 25.66283,
//         query_type: 'place_id',
//         type: 'establishment',
//         province: null,
//         province_code: null,
//         sub_area: null,
//         area: null,
//         zipcode: null,
//         city: null,
//         country: null,
//         country_code: null,
//       },
//       cartage_by: {
//         _id: {
//           $oid: '5f77469b750aca653e8d9cd0',
//         },
//         company: {
//           name: 'Test Customer',
//           vendor_type: [
//             'agent',
//             'carrier',
//             'trade',
//             'consolidator',
//             'customs_agent',
//           ],
//           nick_name: 'test',
//         },
//         primary_contact_person: {
//           name: 'ABC def',
//           enable_portal_access: false,
//           first_name: 'ABC',
//           last_name: 'def',
//           additional_emails: [],
//         },
//         address: {
//           city: {},
//         },
//         full_address: '',
//         _cls_: 'vendor',
//         __display: 'Test Customer',
//       },
//       arrival_date: {
//         $date: 1663804800000,
//       },
//       departure_date: {
//         $date: 1663200000000,
//       },
//       notes: 'uuuuuv',
//       pickup_address: 'ugyfugv',
//     },
//   ],
//   sales_executive: {
//     _id: {
//       $oid: '62558efebde912fc22c9179b',
//     },
//     name: 'Testing Group',
//     _cls_: 'employee_group',
//     _operation: {
//       edit: true,
//       delete: true,
//     },
//     __display: 'Testing Group',
//   },
//   shipper_name: {
//     _id: {
//       $oid: '629a6512a094b76b497b04ee',
//     },
//     _cls_: 'customer_party',
//     company: {
//       name: 'Shipthis',
//       phone: '123452641',
//       email: null,
//     },
//     address: {
//       line_1: 'abc street',
//       line_2: 'near metro station',
//       city: {
//         description: 'Indiranagar, Bengaluru, Karnataka, India',
//         bold: 'Indiranagar',
//         lat: 12.9783692,
//         lng: 77.6408356,
//         query_type: 'place_id',
//         type: 'area',
//         zipcode: null,
//         province: 'Karnataka',
//         province_code: 'KA',
//         area: 'Indiranagar',
//         city: 'Bengaluru',
//         city_code: 'Bengaluru',
//         country: 'India',
//         country_code: 'IN',
//       },
//       pincode: '455550550',
//     },
//     full_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     __display: 'Shipthis',
//   },
//   consignee_name: {
//     _id: {
//       $oid: '629a6512a094b76b497b04ee',
//     },
//     _cls_: 'customer_party',
//     company: {
//       name: 'Shipthis',
//       phone: '123452641',
//       email: null,
//     },
//     primary_contact_person: {
//       salutation: 'mr',
//       name: 'John Doe',
//       email: '123@shipthis.co',
//       phone: '090078601',
//       enable_portal_access: true,
//       first_name: 'John',
//       last_name: 'Doe',
//       additional_emails: [],
//     },
//     address: {
//       line_1: 'abc street',
//       line_2: 'near metro station',
//       city: {
//         description: 'Indiranagar, Bengaluru, Karnataka, India',
//         bold: 'Indiranagar',
//         lat: 12.9783692,
//         lng: 77.6408356,
//         query_type: 'place_id',
//         type: 'area',
//         zipcode: null,
//         province: 'Karnataka',
//         province_code: 'KA',
//         area: 'Indiranagar',
//         city: 'Bengaluru',
//         city_code: 'Bengaluru',
//         country: 'India',
//         country_code: 'IN',
//       },
//       pincode: '455550550',
//     },
//     full_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     __display: 'Shipthis',
//   },
//   consignee_address:
//     'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//   shipper_address:
//     'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//   pickup_notes: 'edudueiydedhiey',
//   delivery_notes: 'dehdwiudweuidudw',
//   notify_party: {
//     _id: {
//       $oid: '629a6512a094b76b497b04ee',
//     },
//     _cls_: 'customer_party',
//     company: {
//       name: 'Shipthis',
//     },
//     address: {
//       line_1: 'abc street',
//       line_2: 'near metro station',
//       city: {
//         description: 'Indiranagar, Bengaluru, Karnataka, India',
//         bold: 'Indiranagar',
//         lat: 12.9783692,
//         lng: 77.6408356,
//         query_type: 'place_id',
//         type: 'area',
//         zipcode: null,
//         province: 'Karnataka',
//         province_code: 'KA',
//         area: 'Indiranagar',
//         city: 'Bengaluru',
//         city_code: 'Bengaluru',
//         country: 'India',
//         country_code: 'IN',
//       },
//       pincode: '455550550',
//     },
//     full_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     __display: 'Shipthis',
//   },
//   notify_party_address:
//     'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//   intermediate_consignee: {
//     _id: {
//       $oid: '629a6512a094b76b497b04ee',
//     },
//     _cls_: 'customer_party',
//     company: {
//       name: 'Shipthis',
//     },
//     address: {
//       line_1: 'abc street',
//       line_2: 'near metro station',
//       city: {
//         description: 'Indiranagar, Bengaluru, Karnataka, India',
//         bold: 'Indiranagar',
//         lat: 12.9783692,
//         lng: 77.6408356,
//         query_type: 'place_id',
//         type: 'area',
//         zipcode: null,
//         province: 'Karnataka',
//         province_code: 'KA',
//         area: 'Indiranagar',
//         city: 'Bengaluru',
//         city_code: 'Bengaluru',
//         country: 'India',
//         country_code: 'IN',
//       },
//       pincode: '455550550',
//     },
//     full_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     __display: 'Shipthis',
//   },
//   intermediate_consignee_address:
//     'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//   forwarding_agent: {
//     _id: {
//       $oid: '606189b318a677b698d6bd9d',
//     },
//     company: {
//       name: 'Monter Global Logistics (S) Pte Ltd',
//     },
//     address: {
//       city: {},
//     },
//     full_address: '',
//     _cls_: 'vendor',
//     __display: 'Monter Global Logistics (S) Pte Ltd',
//   },
//   forwarding_agent_address: 'diejdouewuidewudhwiuhwud',
//   destination_agent: {
//     _id: {
//       $oid: '606189b318a677b698d6bd9d',
//     },
//     company: {
//       name: 'Monter Global Logistics (S) Pte Ltd',
//     },
//     address: {
//       city: {},
//     },
//     full_address: '',
//     _cls_: 'vendor',
//     __display: 'Monter Global Logistics (S) Pte Ltd',
//   },
//   destination_agent_address:
//     'I’m sorry 😢 😣 I was just trying not to be rude and not even the answer to me',
//   proof_of_delivery_date: {
//     $date: 1663027200000,
//   },
//   pod_received_by: 'xuixieqdyi',
//   shipment_type: 'domestic',
// };

// const s = {
//   reqbody: {
//     __scp: {},
//     'port_of_loading.transit_time': '',
//     __events: {
//       opened__date: {
//         $date: 1663200000000,
//       },
//       opened__comments: '',
//     },
//     enable_automated_tracking: true,
//     enable_inter_branch: true,
//     custom: {
//       is_removal_shipment: true,
//       ciffa_member: 'no',
//       new_field: 'Ftbf4 is going with me to ',
//     },
//     order_ref_no: ['bucfecgyrcbg'],
//     shipper_declared_value: {
//       amount: 4774000,
//       currency: {
//         _id: {
//           $oid: '6024c18ca8786c22a46bc5b6',
//         },
//         name: 'MXN',
//         _cls_: 'currency',
//         _operation: {
//           edit: true,
//           delete: true,
//         },
//         __display: 'MXN',
//       },
//     },
//     country_of_origin: {
//       description: 'Guadalajara, Jalisco, Mexico',
//       bold: 'Guadalajara',
//       lat: 20.6596988,
//       lng: -103.3496092,
//       query_type: 'place_id',
//       type: 'city',
//       province: 'Jalisco',
//       province_code: 'Jal.',
//       city: 'Guadalajara',
//       country: 'Mexico',
//       country_code: 'MX',
//     },
//     insurance: {
//       need_insurance: true,
//       amount: 4000,
//       currency: {
//         _id: {
//           $oid: '5ab0b81a3a90d4d4b7a30767',
//         },
//         name: 'CAD',
//         _cls_: 'currency',
//         _operation: {
//           edit: true,
//           delete: true,
//         },
//         __display: 'CAD',
//       },
//     },
//     cartage_cost_amount: 44000,
//     place_of_pickup: {
//       location: {
//         description: 'Guadalajara, Jalisco, Mexico',
//         bold: 'Guadalajara',
//         lat: 20.6596988,
//         lng: -103.3496092,
//         query_type: 'place_id',
//         type: 'city',
//         province: 'Jalisco',
//         province_code: 'Jal.',
//         city: 'Guadalajara',
//         country: 'Mexico',
//         country_code: 'MX',
//       },
//       pickup_date: {
//         $date: 1663342320000,
//       },
//       original_pickup_date: {
//         $date: 1663342320000,
//       },
//     },
//     place_of_receipt: {
//       location: {
//         description: 'Toronto, ON, Canada',
//         bold: 'Toronto',
//         lat: 43.653226,
//         lng: -79.3831843,
//         query_type: 'place_id',
//         type: 'city',
//         province: 'Ontario',
//         province_code: 'ON',
//         city: 'Toronto',
//         country: 'Canada',
//         country_code: 'CA',
//       },
//       arrival_date: {
//         $date: 1662595200000,
//       },
//       original_arrival_date: {
//         $date: 1662595200000,
//       },
//     },
//     port_of_loading: {
//       port: {
//         _id: {
//           $oid: '614032d2f5d48f62f623cf2e',
//         },
//         name: 'Delhi Gate',
//         code: '0000',
//         location: {
//           description:
//             'Delhi Gate, Netaji Subhash Marg, Daryaganj, New Delhi, Delhi, India',
//           bold: 'Delhi Gate',
//           lat: 28.6411903,
//           lng: 77.2405826,
//           query_type: 'place_id',
//           type: 'establishment',
//           province: 'Delhi',
//           province_code: 'DL',
//           sub_area: null,
//           area: 'Daryaganj',
//           zipcode: '110006',
//           city: 'New Delhi',
//           country: 'India',
//           country_code: 'IN',
//         },
//         _cls_: 'port',
//         __display: '0000 - Delhi Gate',
//       },
//       departure_date: {
//         $date: 1663804800000,
//       },
//       original_departure_date: {
//         $date: 1663977600000,
//       },
//       transit_time: -6,
//     },
//     port_of_discharge: {
//       port: {
//         _id: {
//           $oid: '614032d2f5d48f62f623cf2e',
//         },
//         name: 'Delhi Gate',
//         code: '0000',
//         location: {
//           description:
//             'Delhi Gate, Netaji Subhash Marg, Daryaganj, New Delhi, Delhi, India',
//           bold: 'Delhi Gate',
//           lat: 28.6411903,
//           lng: 77.2405826,
//           query_type: 'place_id',
//           type: 'establishment',
//           province: 'Delhi',
//           province_code: 'DL',
//           sub_area: null,
//           area: 'Daryaganj',
//           zipcode: '110006',
//           city: 'New Delhi',
//           country: 'India',
//           country_code: 'IN',
//         },
//         _cls_: 'port',
//         __display: '0000 - Delhi Gate',
//       },
//       arrival_date: {
//         $date: 1663286400000,
//       },
//       original_arrival_date: {
//         $date: 1663286400000,
//       },
//     },
//     port_of_destination: {
//       port: {
//         _id: {
//           $oid: '630de71256cb432095b1dc6c',
//         },
//         name: 'rfr',
//         code: '556',
//         location: {
//           description: 'Cancún, Quintana Roo, Mexico',
//           bold: 'Cancún',
//           lat: 21.161908,
//           lng: -86.8515279,
//           query_type: 'place_id',
//           type: 'city',
//           province: 'Quintana Roo',
//           province_code: 'Q.R.',
//           city: 'Cancún',
//           country: 'Mexico',
//           country_code: 'MX',
//         },
//         _cls_: 'port',
//         __display: '556 - rfr',
//       },
//       arrival_date: {
//         $date: 1661990400000,
//       },
//       original_arrival_date: {
//         $date: 1663286400000,
//       },
//     },
//     place_of_delivery: {
//       location: {
//         description: 'Rajkot, Gujarat, India',
//         bold: 'Rajkot',
//         lat: 22.3038945,
//         lng: 70.80215989999999,
//         query_type: 'place_id',
//         type: 'city',
//         province: 'Gujarat',
//         province_code: 'GJ',
//         city: 'Rajkot',
//         country: 'India',
//         country_code: 'IN',
//       },
//       delivery_date: {
//         $date: 1662595200000,
//       },
//       original_delivery_date: {
//         $date: 1662595200000,
//       },
//     },
//     final_destination: {},
//     operation_executive: {
//       _id: {
//         $oid: '5ea15383dc21e40008482067',
//       },
//       name: 'Ashish',
//       __display: 'Ashish',
//       email: 'ashishkmr2210@gmail.com',
//       _cls_: 'employee',
//     },
//     forwarding_agent_show_on_master: true,
//     destination_agent_show_on_master: true,
//     has_switch_bl: true,
//     pod_documents: [],
//     skus: [],
//     under_watchlist: false,
//     notify_events_via_email: false,
//     tags: [],
//     documents: [],
//     customer_documents: [],
//     customer_uploaded_documents: [],
//     shipment_status: 'opened',
//     job_id: 'SEA000974',
//     quotation_reference: {
//       _id: {
//         $oid: '62f44bba7de80162137b7f55',
//       },
//       quotation_number: 'Q-004442',
//       created_at: {
//         $date: 1660177338230,
//       },
//       _cls_: 'quotation',
//       __cache: {
//         responses: {
//           accepted_response: {
//             quotation_response_currency: {
//               __display: 'USD',
//               _cls_: 'currency',
//               _id: {
//                 $oid: '58144f4d3a90d4b7eacdcf39',
//               },
//               name: 'USD',
//             },
//             quotation_response_total: 100000,
//           },
//         },
//       },
//       __display: 'Q-004442',
//     },
//     shipment_class: 'house',
//     shipment_type: 'export',
//     weight_unit: 'kg',
//     volume_unit: 'm3',
//     customer_name: {
//       _id: {
//         $oid: '629a6511a094b76b497b04ec',
//       },
//       company: {
//         name: 'Shipthis',
//         phone: '123452644',
//         website: 'jhondoe.example.com',
//         is_agent: false,
//       },
//       primary_contact_person: {
//         salutation: 'mr',
//         name: 'John Doe',
//         email: '123@shipthis.co',
//         phone: '090078601',
//         enable_portal_access: true,
//         first_name: 'John',
//         last_name: 'Doe',
//         additional_emails: [],
//       },
//       _cls_: 'customer',
//       __warn: false,
//       __display: 'Shipthis',
//     },
//     shipment_term: {
//       _id: {
//         $oid: '602be55948c04c39742043e3',
//       },
//       name: 'DOOR TO PORT',
//       code: 'DTP',
//       _cls_: 'shipment_term',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'DTP - DOOR TO PORT',
//     },
//     shipment_name: 'tftgb4fy4tyfy4gf',
//     product_type: {
//       _id: {
//         $oid: '607693de78fa03bafdd8601a',
//       },
//       name: 'Construction Material',
//       code: 'construction_material',
//       _cls_: 'product_type',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'Construction Material',
//     },
//     branches: ['fwcto', 'ABC Location'],
//     shipping_line: {
//       _id: {
//         $oid: '602c1053e42f8d2d2b193bd8',
//       },
//       name: 'UPS EUROPE SA',
//       shipthis_code: 'UEUR',
//       _cls_: 'shipping_line',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'UPS EUROPE SA - ',
//     },
//     previous_carrier_code: '',
//     mbl_no: 'bcufcu4bcy4fcb4f',
//     hbl_no: 'duyedyedby4ebd',
//     booking_no: 'fby4bfy4fby4f4',
//     vessel: null,
//     voyage_no: 'gb4fy4bfy4bf4',
//     additional_notes: 'Fb4bf is the one that you have on the phone ',
//     special_instruction: 'I’m not going back in my car and ',
//     release_instruction: 'I don’t know 🤷‍♀️ 🤷‍♂️ 🤔 but I don’t ',
//     cargo_ready_date: {
//       $date: 1662422400000,
//     },
//     last_free_date: {
//       $date: 1663027200000,
//     },
//     cartage_by: {
//       _id: {
//         $oid: '5fd77a167b332b4a8fe3ec30',
//       },
//       company: {
//         name: 'MTL Express',
//         vendor_type: ['cartage'],
//       },
//       primary_contact_person: {
//         name: 'Dispatch',
//         enable_portal_access: false,
//         first_name: 'dispatch',
//         additional_emails: [],
//       },
//       address: {
//         line_1: '555 dollar ave',
//         city: {
//           description: 'Lasalle, Montreal, QC, Canada',
//           bold: 'Lasalle',
//           lat: 45.4306269,
//           lng: -73.6348015,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Quebec',
//           province_code: 'QC',
//           area: 'Lasalle',
//           city: 'Montreal',
//           city_code: 'Montreal',
//           country: 'Canada',
//           country_code: 'CA',
//         },
//         pincode: 'Quebec',
//         city_un_code: 'CA',
//       },
//       _cls_: 'vendor',
//       __display: 'MTL Express',
//     },
//     cartage_cost_currency: {
//       _id: {
//         $oid: '5fa1a72de4f947690e53d5bf',
//       },
//       name: 'ZAR',
//       _cls_: 'currency',
//       __display: 'ZAR',
//     },
//     customs_clearance_by: {
//       _id: {
//         $oid: '606189b318a677b698d6bd9d',
//       },
//       company: {
//         name: 'Monter Global Logistics (S) Pte Ltd',
//         vendor_type: ['carrier'],
//         nick_name: 'Monter',
//       },
//       primary_contact_person: {
//         salutation: 'mrs',
//         name: 'Mrs. Poovai',
//         enable_portal_access: false,
//         first_name: 'Poovai',
//         last_name: 'Kasinathan',
//         additional_emails: [],
//       },
//       address: {
//         city: {},
//       },
//       _cls_: 'vendor',
//       __display: 'Monter Global Logistics (S) Pte Ltd',
//     },
//     sales_executive: {
//       _id: {
//         $oid: '6235ade7ef26a68274402574',
//       },
//       name: 'w',
//       _cls_: 'employee_user',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'w',
//     },
//     shipper_name: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     shipper_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     consignee_name: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//         phone: '123452641',
//       },
//       primary_contact_person: {
//         salutation: 'mr',
//         name: 'John Doe',
//         email: '123@shipthis.co',
//         phone: '090078601',
//         enable_portal_access: true,
//         first_name: 'John',
//         last_name: 'Doe',
//         additional_emails: [],
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     consignee_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     pickup: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//         phone: '123452641',
//         email: null,
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     pickup_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     delivery: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//         phone: '123452641',
//         email: null,
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     delivery_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     pickup_notes:
//       'No 👎 de los que se ha convertido en un proyecto de ley para la ',
//     delivery_notes: 'La verdad es muy buena aplicación y muy ',
//     forwarding_agent: {
//       _id: {
//         $oid: '606189b318a677b698d6bd9d',
//       },
//       company: {
//         name: 'Monter Global Logistics (S) Pte Ltd',
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'vendor',
//       __display: 'Monter Global Logistics (S) Pte Ltd',
//     },
//     forwarding_agent_address: 'La policía 👮‍♀️ 🚓 que no 👎 ',
//     destination_agent: {
//       _id: {
//         $oid: '5fd77a167b332b4a8fe3ec30',
//       },
//       company: {
//         name: 'MTL Express',
//       },
//       address: {
//         line_1: '555 dollar ave',
//         city: {
//           description: 'Lasalle, Montreal, QC, Canada',
//           bold: 'Lasalle',
//           lat: 45.4306269,
//           lng: -73.6348015,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Quebec',
//           province_code: 'QC',
//           area: 'Lasalle',
//           city: 'Montreal',
//           city_code: 'Montreal',
//           country: 'Canada',
//           country_code: 'CA',
//         },
//         pincode: 'Quebec',
//         city_un_code: 'CA',
//       },
//       full_address: '555 dollar ave\r\nLasalle, Montreal, QC, Canada - Quebec',
//       _cls_: 'vendor',
//       __display: 'MTL Express',
//     },
//     destination_agent_address:
//       '555 dollar ave\r\nLasalle, Montreal, QC, Canada - Quebec',
//     clearance_agent_address: '7 en las fuerzas armadas y a los que se han ',
//     consolidator: {
//       _id: {
//         $oid: '5f77469b750aca653e8d9cd0',
//       },
//       company: {
//         name: 'Test Customer',
//         vendor_type: [
//           'agent',
//           'carrier',
//           'trade',
//           'consolidator',
//           'customs_agent',
//         ],
//         nick_name: 'test',
//       },
//       address: {
//         city: {},
//       },
//       full_address: '',
//       _cls_: 'vendor',
//       __display: 'Test Customer',
//     },
//     consolidator_address: '7 con el alma en la vida que no 👎 ',
//     place_of_consolidation: null,
//     place_of_consolidation_address: '',
//     notify_party: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     notify_party_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     also_notify_party: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     also_notify_party_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     switch_bl_shipper_name: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     switch_bl_shipper_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     switch_bl_consignee_name: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//         phone: '123452641',
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     switch_bl_consignee_address:
//       'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//     switch_bl_notify_party: {
//       _id: {
//         $oid: '629a6512a094b76b497b04ee',
//       },
//       _cls_: 'customer_party',
//       company: {
//         name: 'Shipthis',
//       },
//       address: {
//         line_1: 'abc street',
//         line_2: 'near metro station',
//         city: {
//           description: 'Indiranagar, Bengaluru, Karnataka, India',
//           bold: 'Indiranagar',
//           lat: 12.9783692,
//           lng: 77.6408356,
//           query_type: 'place_id',
//           type: 'area',
//           zipcode: null,
//           province: 'Karnataka',
//           province_code: 'KA',
//           area: 'Indiranagar',
//           city: 'Bengaluru',
//           city_code: 'Bengaluru',
//           country: 'India',
//           country_code: 'IN',
//         },
//         pincode: '455550550',
//       },
//       tin_no: null,
//       full_address:
//         'abc street\r\nnear metro station\r\nIndiranagar, Bengaluru, Karnataka, India - 455550550\r\nE :123@shipthis.co\r\nT :123452644',
//       __display: 'Shipthis',
//     },
//     switch_bl_notify_party_address:
//       'La policía de las fuerzas armadas y la policía y ',
//     master_reference: {
//       _id: {
//         $oid: '62ce68b35fb4fe31ead6c561',
//       },
//       job_id: 'SEA000911',
//       _cls_: 'sea_shipment',
//       __display: 'SEA000911',
//     },
//     volume: '',
//   },
//   action_op_data: {},
//   'captcha-response': {},
// };

// const Invoice = {
//   reqbody: {
//     items: [
//       {
//         quantity: 1,
//         minimum_charge: 3000,
//         currency: {
//           _id: {
//             $oid: '6024c18ca8786c22a46bc5b6',
//           },
//           name: 'MXN',
//           _cls_: 'currency',
//           _operation: {
//             edit: true,
//             delete: true,
//           },
//           __display: 'MXN',
//         },
//         exchange_rate: 2,
//         total_amount: 3000,
//         total_amount_invoice_currency: 6000,
//         total_tax: 280,
//         total_rcm_tax: 0,
//         price: -4000,
//         description: {
//           _id: {
//             $oid: '626e795bc2da8165023b913a',
//           },
//           description: 'Palletizing Fee',
//           sale_book: {
//             _id: {
//               $oid: '5d8b58c5038bbb01c0f81a98',
//             },
//             name: 'Destination Charges',
//             account_type: {
//               _id: {
//                 $oid: '5cdec8fb2b505972c34d0200',
//               },
//               _cls_: 'sub_account_type',
//               name: 'Income',
//               main_account_type: {
//                 _id: {
//                   $oid: '5a7aa2db3a90d489472cebb1',
//                 },
//                 name: 'Income',
//                 code: 'income',
//                 _cls_: 'main_account_type',
//               },
//               code: 'income',
//               __display: 'Income',
//             },
//             code: '',
//             parent_account_book: {
//               _id: {
//                 $oid: '5d57ef942b50591d38cd1aeb',
//               },
//               _cls_: 'account_book',
//               name: 'Sales',
//               code: 'sales',
//               account_type: {
//                 _id: {
//                   $oid: '5cdec8fb2b505972c34d0200',
//                 },
//                 name: 'Income',
//                 main_account_type: {
//                   _id: {
//                     $oid: '5a7aa2db3a90d489472cebb1',
//                   },
//                   name: 'Income',
//                   code: 'income',
//                   _cls_: 'main_account_type',
//                 },
//                 _cls_: 'sub_account_type',
//                 code: 'income',
//               },
//               __display: '',
//             },
//             _cls_: 'account_book',
//             _operation: {
//               edit: true,
//               delete: true,
//             },
//             __display: 'Destination Charges',
//           },
//           expense_book: {
//             _id: {
//               $oid: '5d8b58c5038bbb01c0f81a97',
//             },
//             name: 'Destination Charges',
//             account_type: {
//               _id: {
//                 $oid: '5cdec9012b505972c34d0211',
//               },
//               name: 'Cost of Goods Sold',
//               _cls_: 'sub_account_type',
//               main_account_type: {
//                 _id: {
//                   $oid: '5a7aa2e93a90d489472cebb2',
//                 },
//                 name: 'Expenses',
//                 code: 'expenses',
//                 _cls_: 'main_account_type',
//               },
//               code: 'cost_of_goods_sold',
//             },
//             code: '',
//             parent_account_book: {
//               _id: {
//                 $oid: '5d57ef942b50591d38cd1ae8',
//               },
//               name: 'Purchases',
//               editable: false,
//               _last_update: '',
//               account_type: {
//                 _id: {
//                   $oid: '5d57ef942b50591d38cd1acf',
//                 },
//                 name: 'Cost of Goods Sold',
//                 __display: 'Cost of Goods Sold',
//                 main_account_type: {
//                   code: 'expenses',
//                   _id: {
//                     $oid: '5a7aa2e93a90d489472cebb2',
//                   },
//                   _cls_: 'main_account_type',
//                   name: 'Expenses',
//                   __display: 'Expenses',
//                 },
//                 _cls_: 'sub_account_type',
//               },
//               code: 'purchases',
//               _cls_: 'account_book',
//               _state: 'default',
//               __status: {},
//               __region_id: ['usa'],
//             },
//             _cls_: 'account_book',
//             _operation: {
//               edit: true,
//               delete: true,
//             },
//             __display: 'Destination Charges',
//           },
//           charge_code: 'PLT',
//           buy_price: 0,
//           price: 0,
//           _cls_: 'product_service',
//           __display: 'Palletizing Fee',
//         },
//         sale_book: {
//           _id: {
//             $oid: '5d8b58c5038bbb01c0f81a98',
//           },
//           name: 'Destination Charges',
//           account_type: {
//             _id: {
//               $oid: '5cdec8fb2b505972c34d0200',
//             },
//             _cls_: 'sub_account_type',
//             name: 'Income',
//             main_account_type: {
//               _id: {
//                 $oid: '5a7aa2db3a90d489472cebb1',
//               },
//               name: 'Income',
//               code: 'income',
//               _cls_: 'main_account_type',
//             },
//             code: 'income',
//             __display: 'Income',
//           },
//           description: 'Sales - Destination Charges',
//           code: '',
//           parent_account_book: {
//             _id: {
//               $oid: '5d57ef942b50591d38cd1aeb',
//             },
//             _cls_: 'account_book',
//             name: 'Sales',
//             code: 'sales',
//             account_type: {
//               _id: {
//                 $oid: '5cdec8fb2b505972c34d0200',
//               },
//               name: 'Income',
//               main_account_type: {
//                 _id: {
//                   $oid: '5a7aa2db3a90d489472cebb1',
//                 },
//                 name: 'Income',
//                 code: 'income',
//                 _cls_: 'main_account_type',
//               },
//               _cls_: 'sub_account_type',
//               code: 'income',
//             },
//             __display: '',
//           },
//           _cls_: 'account_book',
//           __display: 'Destination Charges',
//         },
//         charge_type: {
//           _id: {
//             $oid: '617679b527d4700d8788925b',
//           },
//           name: 'Per Square Mt',
//           value: 'per_square_mtr',
//           _cls_: 'charge_type',
//           _operation: {
//             edit: true,
//             delete: true,
//           },
//           __display: 'Per Square Mt',
//         },
//         tax: [
//           {
//             _id: {
//               $oid: '605c73dd18a677b698d6b3a6',
//             },
//             name: 'SGST  2.4 T',
//             rate: 2.4,
//             _cls_: 'tax_rate',
//             _operation: {
//               edit: true,
//               delete: true,
//             },
//             __display: 'SGST  2.4 T',
//           },
//           {
//             _id: {
//               $oid: '605c28cc824b7e555297e26a',
//             },
//             name: 'SGST 2.4 A',
//             rate: 2.4,
//             _cls_: 'tax_rate',
//             _operation: {
//               edit: true,
//               delete: true,
//             },
//             __display: 'SGST 2.4 A',
//           },
//         ],
//       },
//     ],
//     invoice_payment_term: {
//       _id: {
//         $oid: '5b83ebd43a90d40532b4b797',
//       },
//       _cls_: 'payment_term',
//       no_of_days: 0,
//       name: 'Custom',
//       order: 5,
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'Custom',
//     },
//     __scp: {},
//     invoice_total: 572280,
//     invoice_tax_total: 280,
//     invoice_sub_total: 6000,
//     invoice_service_total: 0,
//     invoice_currency_sub_total: {},
//     invoice_tax_breakup: [
//       {
//         tax_type: {
//           _id: {
//             $oid: '605c73dd18a677b698d6b3a6',
//           },
//           name: 'SGST  2.4 T',
//           rate: 2.4,
//           _cls_: 'tax_rate',
//           _operation: {
//             edit: true,
//             delete: true,
//           },
//           __display: 'SGST  2.4 T',
//         },
//         amount: 140,
//         amount_base_currency: 10,
//         taxable_amount: 6000,
//         taxable_amount_base_currency: 299,
//       },
//       {
//         tax_type: {
//           _id: {
//             $oid: '605c28cc824b7e555297e26a',
//           },
//           name: 'SGST 2.4 A',
//           rate: 2.4,
//           _cls_: 'tax_rate',
//           _operation: {
//             edit: true,
//             delete: true,
//           },
//           __display: 'SGST 2.4 A',
//         },
//         amount: 140,
//         amount_base_currency: 10,
//         taxable_amount: 6000,
//         taxable_amount_base_currency: 299,
//       },
//     ], // items finished
//     invoice_rcm_breakup: [],
//     invoice_rcm_tax_total: 0,
//     invoice_sub_total_base_currency: 299,
//     invoice_tax_total_base_currency: 14,
//     invoice_additional_charge: 0,
//     charges_breakup: [],
//     invoice_additional_charge_base_currency: 0,
//     invoice_total_base_currency: 28480,
//     invoice_date: {
//       $date: 1663286400000,
//     },
//     invoice_due_date: {
//       $date: 1663286400000,
//     },
//     custom: {
//       abc: 'khnvkhskv',
//     },
//     adjustment_text: 'Adjustment',
//     adjustment_amount: 566000,
//     documents: [],
//     invoice_number: 'INV000289',
//     customer: {
//       _id: {
//         $oid: '62fcffb91adcce1393d3cfec',
//       },
//       company: {
//         name: 'Markup',
//       },
//       primary_contact_person: {
//         name: 'Justin',
//       },
//       _cls_: 'customer',
//       __display: 'Markup',
//     },
//     invoice_currency: {
//       _id: {
//         $oid: '6024c18ca8786c22a46bc5b6',
//       },
//       name: 'MXN',
//       _cls_: 'currency',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'MXN',
//     },
//     customer_notes: 'Customer Notes',
//     exchange_rate: 0.049758,
//     invoice_order_reference: {
//       _id: {
//         $oid: '6320163f5b7d1ad843692588',
//       },
//       job_id: 'LAND000093',
//       master_reference: {},
//       customer_name: {
//         _id: {
//           $oid: '62fcffb91adcce1393d3cfec',
//         },
//         _cls_: 'customer',
//         primary_contact_person: {
//           name: 'Justin',
//           email: 'justin@markup.com',
//           enable_portal_access: true,
//           first_name: 'Justin',
//           last_name: 'Markup',
//         },
//         company: {
//           name: 'Markup',
//         },
//         sales_person: '',
//         payment_term: '',
//         currency: '',
//         address: '',
//         __warn: '',
//         need_insurance: '',
//         __display: '',
//       },
//       shipment_type: 'import',
//       shipment_name: 'This is a test for land shipment',
//       custom: {},
//       order_ref_no: [],
//       operation_executive: {
//         _id: {
//           $oid: '62e8c89a98e538deacd98368',
//         },
//         _cls_: 'employee_user',
//         name: 'Test User',
//         __display: '',
//       },
//       shipment_status: 'opened',
//       _cls_: 'land_shipment',
//       created_at: {
//         $date: 1663047231270,
//       },
//       __display: 'LAND000093',
//     },
//     bank_details: {
//       _id: {
//         $oid: '5fa1a85837f404b13f839568',
//       },
//       description: 'FNBB',
//       currency: {
//         _id: {
//           $oid: '5fa1a747882ef25be597ed00',
//         },
//         name: 'BWP',
//         _cls_: 'currency',
//         _operation: {
//           edit: true,
//           delete: true,
//         },
//         __display: 'BWP',
//       },
//       _cls_: 'bank_detail',
//       __display: 'FNBB',
//     },
//     sales_person: {
//       _id: {
//         $oid: '62558efebde912fc22c9179b',
//       },
//       name: 'Testing Group',
//       _cls_: 'employee_group',
//       _operation: {
//         edit: true,
//         delete: true,
//       },
//       __display: 'Testing Group',
//     },
//   },
//   action_op_data: {},
//   'captcha-response': {},
// };
