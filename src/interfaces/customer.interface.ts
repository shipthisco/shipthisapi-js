import {
  ID,
  PrimaryContactPerson,
  ShipthisBasic,
} from './collection.interface';

export interface RequestCustomerSegmentType {
  code: string;
  name: string;
}

export interface PaymentTermType {
  _id: ID;
  no_of_days?: number;
  name: string;
  order: number;
  _cls_: string;
  currency: ShipthisBasic;
}

export interface CompanyType {
  is_agent: boolean;
  name: string;
  phone: string;
  client_code: string;
  website: string;
  fax_no: string;
}

export interface RequestCustomerType {
  reqbody: {
    opening_balance: any;
    account_contact_person: {
      same_as_primary: boolean;
      additional_emails: [];
      enable_portal_access: boolean;
    };
    company: CompanyType;
    primary_contact_person: PrimaryContactPerson;
    address: {
      city: any;
    };
    __events: {
      lead__date: {
        $date: number;
      };
      lead__comments: string;
    };
    accounting: {
      credit_limit: 0;
      external_balance: 0;
      account_credit_block: boolean;
      block_reason: string;
      payment_term: PaymentTermType;
      is_inter_branch: false;
      need_insurance: false;
      automatic_ar_reminder: {
        enable_automatic_reminder: false;
      };
      automatic_ar_aging_reminder: {
        enable_automatic_reminder: false;
      };
      notification: {
        sea_shipment: any;
        air_shipment: any;
        land_shipment: any;
        clearance_job: any;
        documentation_job: any;
      };
      documents: [];
      customer_lifecycle: '';
      full_address: '';
      full_address_field_compute: '';
    };
    action_op_data: any;
    'captcha-response': any;
  };
}
