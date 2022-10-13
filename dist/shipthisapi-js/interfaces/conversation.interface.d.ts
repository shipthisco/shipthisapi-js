import { ShipMethod } from './collection.interface';
export interface ConversationPayload {
    conversation: {
        type: string;
        body: string;
    };
    document_id: string;
    view_name: string;
    message_type: string;
}
export declare enum WeightUnit {
    Kg = "kg",
    Lb = "lb"
}
export declare enum LengthUnit {
    Cm = "cm",
    Mtr = "mtr",
    Inches = "inches",
    Ft = "ft"
}
export interface ltlPackage {
    shipment?: string[];
    description?: string;
    __scp?: any;
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
export interface AddNewCustomerData {
    __scp?: any;
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
        account_credit_block: false;
        block_reason: string;
        currency: any;
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
    __scp?: any;
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
