import {
  Company,
  Currency,
  ID,
  MasterReference,
  Operation,
  OperationExecutive,
  PrimaryContactPerson,
} from './collection.interface';
import { ICustomDate } from './custom-date';

export interface InvoiceInterface {
  items?: Array<Items>;
  invoice_payment_term: InvoicePaymentTerm;

  invoice_rcm_breakup: [];
  invoice_rcm_tax_total: number;
  invoice_sub_total_base_currency: number;
  invoice_tax_total_base_currency: number;
  invoice_additional_charge: number;
  charges_breakup: [];
  invoice_additional_charge_base_currency: number;
  invoice_total_base_currency: number;
  invoice_date: ICustomDate;
  invoice_due_date: ICustomDate;
  custom: { abc?: string };
  adjustment_text?: string;
  adjustment_amount: number;
  documents: [];
  invoice_number?: string;
  customer?: {
    _id: ID;
    company?: {
      name: string;
    };
    primary_contact_person?: {
      name: string;
    };
    _cls_?: string;
    __display?: string;
  };
  invoice_currency?: CurrencyType;
  customer_notes?: string;
  exchange_rate?: number;
  invoice_order_reference?: InvoiceOrderReference;
  bank_details?: BankDetails;
  sales_person: SalesPerson;
}

export interface Items {
  quantity?: number;
  minimum_charge?: number;
  currency?: Currency;
  exchange_rate?: number;
  total_amount?: number;
  total_amount_invoice_currency?: number;
  total_tax?: number;
  total_rcm_tax?: number;
  price?: number;
  description?: {
    _id: ID;
    description?: string;
    sale_book?: {
      _id: ID;
      name: string;
      account_type?: {
        _id: ID;
        _cls_?: string;
        name?: string;
        main_account_type?: {
          _id: ID;
          name: string;
          code?: string;
          _cls_?: string;
        };
        code?: string;
        __display?: string;
      };
      code?: string;
      parent_account_book?: ParentAccountBook;
      _cls_?: string;
      _operation?: Operation;
      __display?: string;
    };
    expense_book?: SalesExBook;
    charge_code?: string;
    buy_price?: number;
    price?: number;
    _cls_?: string;
    __display?: string;
  };
  sale_book?: SalesExBook;
  charge_type?: CurrencyType;
  tax?: Array<Tax>;
}

export interface ParentAccountBook {
  _id: ID;
  _cls_?: string;
  name?: string;
  editable?: boolean;
  _last_update?: string;
  code?: string;
  account_type?: AccountType;
  __display?: string;
  _state?: string;
  __status?: string;
  __region_id?: Array<string>;
}

export interface SalesExBook {
  _id: ID;
  name: string;
  account_type?: AccountType;
  description?: string;
  code?: string;
  parent_account_book?: ParentAccountBook;
  _cls_?: string;
  _operation?: Operation;
  __display?: string;
}

export interface AccountType {
  _id: ID;
  name?: string;
  main_account_type?: {
    _id: ID;
    name?: string;
    code?: string;
    _cls_?: string;
  };
  _cls_?: string;
  code?: string;
}

export interface CurrencyType {
  _id: ID;
  name?: string;
  value?: string;
  _cls_?: string;
  _operation?: Operation;
  __display?: string;
}

export interface Tax {
  _id: ID;
  name?: string;
  rate?: number;
  _cls_?: string;
  _operation?: Operation;
  __display?: string;
}

export interface InvoicePaymentTerm {
  _id: ID;
  _cls_?: string;
  no_of_days?: string;
  name?: string;
  order?: number;
  _operation?: Operation;
  __display?: string;
  __scp?: any;
  invoice_total?: number;
  invoice_tax_total?: number;
  invoice_sub_total?: number;
  invoice_service_total?: number;
  invoice_currency_sub_total?: any;
  invoice_tax_breakup?: Array<InvoiceTaxBreakup>;
}

export interface InvoiceTaxBreakup {
  tax_type?: TaxType;
  amount?: number;
  amount_base_currency?: number;
  taxable_amount?: number;
  taxable_amount_base_currency?: number;
}

export interface TaxType {
  _id: ID;
  name?: string;
  rate?: number;
  _cls_?: string;
  _operation?: Operation;
  __display?: string;
}

export interface InvoiceOrderReference {
  _id: ID;
  job_id: string;
  master_reference?: MasterReference;
  customer_name?: {
    _cls_?: string;
    primary_contact_person?: PrimaryContactPerson;
    company?: Company;
    sales_person?: string;
    payment_term?: string;
    currency?: string;
    address?: string;
    __warn?: string;
    need_insurance?: string;
    __display?: string;
  };
  shipment_type?: string;
  shipment_name?: string;
  custom?: any;
  order_ref_no?: [];
  operation_executive?: OperationExecutive;
  shipment_status?: string;
  _cls_?: string;
  created_at?: ICustomDate;
  __display?: string;
}

export interface BankDetails {
  _id: ID;
  description?: string;
  currency?: Currency;
  _cls_?: string;
  __display?: string;
}

export interface SalesPerson {
  _id: ID;
  name?: string;
  _cls_?: string;
  _operation?: Operation;
  __display?: string;
}
