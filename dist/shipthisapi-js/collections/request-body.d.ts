export declare const requiredData: string[];
export declare const requiredShipmentType: string[];
export declare const requiredShipmentClass: string[];
export declare const movementType: string[];
export declare const freightChargeTeam: string[];
export declare const requestAirShipment: {
    port_of_loading: {};
    port_of_discharge: {};
    job_id: string;
    customer_name: {};
    shipment_type: string;
    shipment_name: string;
    shipment_term: {};
    carrier_code: string;
    __scp: {};
    'port_of_loading.transit_time': string;
    hawb_rates: string;
    __events: {
        opened__date: {
            $date: number;
        };
        opened__comments: string;
    };
    is_consolidated_shipment: boolean;
    enable_automated_tracking: boolean;
    custom: {
        is_exhibition: boolean;
    };
    order_ref_no: any[];
    shipper_declared_value: {
        amount: number;
    };
    country_of_origin: {};
    insurance: {
        need_insurance: boolean;
    };
    cartage_cost_amount: number;
    place_of_receipt: {
        location: {};
    };
    place_of_delivery: {
        location: {};
    };
    operation_executive: {};
    forwarding_agent_show_on_master: boolean;
    destination_agent_show_on_master: boolean;
    pod_documents: any[];
    skus: any[];
    under_watchlist: boolean;
    notify_events_via_email: boolean;
    tags: any[];
    pick_charge_from_invoice: boolean;
    hawb_override_dimensions: boolean;
    hawb_rate_class_code: string;
    hawb_rate_or_charge: number;
    hawb_rate_total: number;
    hawb_has_other_charges: boolean;
    documents: any[];
    customer_documents: any[];
    customer_uploaded_documents: any[];
    shipment_status: string;
    shipment_class: string;
    master_shipment_cost_allocation: string;
};
export declare const requestSeaShipement: {
    __scp: {};
    'port_of_loading.transit_time': string;
    __events: {
        opened__date: {
            $date: number;
        };
        opened__comments: string;
    };
    enable_automated_tracking: boolean;
    enable_inter_branch: boolean;
    custom: {
        is_removal_shipment: boolean;
    };
    order_ref_no: any[];
    shipper_declared_value: {
        amount: number;
    };
    country_of_origin: {};
    insurance: {
        need_insurance: boolean;
    };
    cartage_cost_amount: number;
    place_of_pickup: {
        location: {};
    };
    place_of_receipt: {
        location: {};
    };
    port_of_loading: {};
    port_of_discharge: {};
    port_of_destination: {};
    place_of_delivery: {
        location: {};
    };
    final_destination: {};
    forwarding_agent_show_on_master: boolean;
    destination_agent_show_on_master: boolean;
    has_switch_bl: boolean;
    pod_documents: any[];
    skus: any[];
    under_watchlist: boolean;
    notify_events_via_email: boolean;
    tags: any[];
    documents: any[];
    customer_documents: any[];
    customer_uploaded_documents: any[];
    shipment_status: string;
    job_id: string;
    product_type: string;
    customer_name: {};
    shipment_type: string;
    weight_unit: string;
    volume_unit: string;
    shipment_class: string;
    shipment_term: {};
    shipment_name: string;
    volume: string;
};
export declare const requestLandShipment: {
    __scp: {};
    __events: {
        opened__date: {
            $date: number;
        };
        opened__comments: string;
    };
    master_shipment_revenue_allocation: string;
    master_shipment_cost_allocation: string;
    enable_automated_tracking: boolean;
    custom: {};
    order_ref_no: any[];
    shipper_declared_value: {
        amount: number;
    };
    country_of_origin: {};
    insurance: {
        need_insurance: boolean;
    };
    origin: {
        location: {};
    };
    destination: {
        location: {};
    };
    operation_executive: {};
    pod_documents: any[];
    skus: any[];
    under_watchlist: boolean;
    notify_events_via_email: boolean;
    tags: any[];
    documents: any[];
    customer_documents: any[];
    customer_uploaded_documents: any[];
    shipment_status: string;
    job_id: string;
    shipment_class: string;
    customer_name: {};
    shipment_type: string;
    movement_type: string;
    master_reference: {};
    shipment_term: {};
    shipment_name: string;
};
export declare const partiesPayload: {
    fields: string[];
    display_fields: string[];
    filter_txt: string;
    input_filters: string;
    general_filters: string;
};
export declare const referencePortPayload: {
    fields: string[];
    display_fields: string[];
    filter_txt: string;
    input_filters: string;
    general_filters: string;
};
export declare const referenceCustomerPayload: {
    fields: string[];
    display_fields: string[];
    filter_txt: string;
    input_filters: string;
    general_filters: string;
};
export declare const invoiceRequiredData: string[];
export declare const invoiceRequestData: {
    reqbody: {
        items: any[];
        invoice_payment_term: {};
        __scp: {};
        invoice_total: number;
        invoice_tax_total: number;
        invoice_sub_total: number;
        invoice_service_total: number;
        invoice_currency_sub_total: {};
        invoice_tax_breakup: any[];
        invoice_rcm_breakup: any[];
        invoice_rcm_tax_total: number;
        invoice_sub_total_base_currency: number;
        invoice_tax_total_base_currency: number;
        invoice_additional_charge: number;
        charges_breakup: any[];
        invoice_additional_charge_base_currency: number;
        invoice_total_base_currency: number;
        invoice_date: {
            $date: number;
        };
        invoice_due_date: {
            $date: number;
        };
        custom: {};
        adjustment_text: string;
        adjustment_amount: number;
        documents: any[];
        invoice_number: string;
        invoice_currency: {
            _id: {
                $oid: string;
            };
            name: string;
            _cls_: string;
            _operation: {
                edit: boolean;
                delete: boolean;
            };
            __display: string;
        };
        exchange_rate: number;
        customer: {
            _id: {
                $oid: string;
            };
            company: {
                name: string;
            };
            primary_contact_person: {
                name: string;
            };
            _cls_: string;
            __display: string;
        };
    };
    action_op_data: {};
    'captcha-response': {};
};
export declare const createNewCustomer: {
    __scp: {};
    opening_balance: {};
    account_contact_person: {
        same_as_primary: boolean;
        additional_emails: any[];
        enable_portal_access: boolean;
    };
    company: {
        is_agent: boolean;
        name: string;
        phone: string;
        client_code: string;
    };
    primary_contact_person: {
        additional_emails: any[];
        enable_portal_access: boolean;
        first_name: string;
        last_name: string;
        name: string;
        email: string;
    };
    address: {
        city: {};
    };
    __events: {
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
        currency: {};
        is_inter_branch: boolean;
        need_insurance: boolean;
        automatic_ar_reminder: {
            enable_automatic_reminder: boolean;
        };
        automatic_ar_aging_reminder: {
            enable_automatic_reminder: boolean;
        };
        notification: {
            sea_shipment: {};
            air_shipment: {};
            land_shipment: {};
            clearance_job: {};
            documentation_job: {};
        };
        documents: any[];
        customer_lifecycle: string;
        full_address: string;
        full_address_field_compute: string;
    };
};
export declare const createNewShipper: {
    __scp: {};
    company: {
        party_type: any[];
        name: string;
        phone: string;
    };
    primary_contact_person: {};
    account_contact_person: {};
    address: {
        city: {};
    };
    full_address: string;
    full_address_field: string;
};
