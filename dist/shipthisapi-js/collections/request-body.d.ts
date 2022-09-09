export declare const requiredData: string[];
export declare const requiredShipmentType: string[];
export declare const requiredShpmentClass: string[];
export declare const RequestData: {
    port_of_loading: {};
    port_of_discharge: {};
    job_id: string;
    customer_name: {};
    shipment_type: string;
    shipment_name: string;
    shipment_term: {};
    carrier_code: string;
    __scp: {};
    "port_of_loading.transit_time": string;
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
export declare const RequestSeaShipement: {
    __scp: {};
    "port_of_loading.transit_time": string;
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
    customer_name: {
        _id: {
            $oid: string;
        };
        company: {
            name: string;
        };
        primary_contact_person: {
            name: string;
            email: string;
            enable_portal_access: boolean;
            first_name: string;
            last_name: string;
        };
        _cls_: string;
        __warn: boolean;
        __display: string;
    };
    shipment_type: string;
    weight_unit: string;
    volume_unit: string;
    shipment_class: string;
    shipment_term: {
        _id: {
            $oid: string;
        };
        name: string;
        _cls_: string;
        code: string;
        _operation: {
            edit: boolean;
            delete: boolean;
        };
        __display: string;
    };
    shipment_name: string;
    volume: string;
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
    "captcha-response": {};
};
export declare const r: {
    job_id: string;
    shipment_class: string;
    customer_name: {};
    shipment_type: string;
    shipment_term: {};
    shipment_name: string;
    is_consolidated_shipment: boolean;
    master_shipment_cost_allocation: string;
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
    port_of_loading: {
        port: {
            _id: {
                $oid: string;
            };
            name: string;
            code: string;
            location: {
                description: string;
                bold: string;
                lat: number;
                lng: number;
                query_type: string;
                country: string;
                country_code: string;
                city: string;
            };
            _cls_: string;
            __display: string;
        };
    };
    port_of_discharge: {};
    place_of_delivery: {
        location: {};
    };
    operation_executive: {};
    forwarding_agent_show_on_master: boolean;
    destination_agent_show_on_master: boolean;
    carrier_code: string;
    pod_documents: any[];
    skus: any[];
    under_watchlist: boolean;
    notify_events_via_email: boolean;
    tags: any[];
    enable_eawb: boolean;
    mawb_override_dimensions: boolean;
    mawb_rate_class_code: string;
    mawb_rate_or_charge: number;
    mawb_rate_total: number;
    charge_declaration: {
        value_for_carriage: number;
        value_for_custom: number;
        value_for_insurance: number;
    };
    has_other_charges: boolean;
    has_charge_summary: boolean;
    has_other_customs_info: boolean;
    enable_accounting: boolean;
    enable_handling_info: boolean;
    pick_charge_from_invoice: boolean;
    hawb_override_dimensions: boolean;
    hawb_rate_class_code: string;
    hawb_rate_or_charge: number;
    hawb_rate_total: number;
    hawb_has_other_charges: boolean;
    documents: any[];
    customer_documents: any[];
    customer_uploaded_documents: any[];
    job_status: string;
    shipment_status: string;
    __events: {
        opened__date: {
            $date: number;
        };
        opened__comments: string;
    };
    _cls_: string;
    _last_update: string;
    __deleted: boolean;
    _last_remark: string;
    __status: {};
    __scp: {};
    __import_reference: any;
    __subscribers: {
        customers: string[];
        vendors: any[];
        employee: string[];
    };
    __region_id: string[];
    __location_id: string[];
    _created_by: string;
    _created_by_name: string;
    _created_by_email: string;
    _last_modified_by: string;
    _last_modified_by_name: string;
    _last_modified_by_email: string;
    __cache: {
        house_shipments: {
            shipment_stats: any[];
        };
    };
    "port_of_loading.transit_time": string;
    hawb_rates: string;
};
