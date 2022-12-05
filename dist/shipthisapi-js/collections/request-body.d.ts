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
export declare const fclSeaLoad: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    weight_unit: string;
    hazard_details: {
        is_hazardous: boolean;
    };
    container_type: {};
    container_no: string;
    gross_wt: number;
    net_wt: number;
    cbm: number;
    cft: number;
    seal_no: string;
    custom_seal_no: string;
    pickup_number: string;
    packages: any[];
};
export declare const Airload: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    cbm_compute: string;
    weight_unit: string;
    dimensions: any[];
    hazard_details: {
        is_hazardous: boolean;
    };
    package_type: {};
    package_quantity: number;
    total_units: number;
    chargeable_wt: number;
    net_wt: number;
    gross_wt: number;
    cft: number;
    cbm: number;
    gross_wt_kg: number;
};
export declare const lclSeaLoad: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    package_quantity: number;
    total_units: number;
    weight_unit: string;
    length_unit: string;
    custom: {
        vehicle_type: string;
    };
    hazard_details: {
        is_hazardous: boolean;
        un_number: {};
        hazard_class: {};
        hazardouse_level: string;
        temp_unit: string;
        emergency_contact: string;
        flash_point: number;
        hazard_special_instruction: string;
    };
    container_type: {};
    package_type: {};
    container_no: string;
    marks_and_no: string;
    seal_no: string;
    custom_seal_no: string;
    number_and_kind_of_package_override: string;
    hs_code: string;
    per_unit_weight: number;
    gross_wt: number;
    net_wt: number;
    chargeable_wt: number;
    length: number;
    width: number;
    height: number;
    cbm: number;
    cft: number;
};
export declare const RoroSeaLoad: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    package_quantity: number;
    total_units: number;
    weight_unit: string;
    length_unit: string;
    hazard_details: {
        is_hazardous: boolean;
        un_number: {};
        hazard_class: {};
        hazardouse_level: string;
        temp_unit: string;
        emergency_contact: string;
        flash_point: number;
        hazard_special_instruction: string;
    };
    package_type: {};
    per_unit_weight: number;
    gross_wt: number;
    chargeable_wt: number;
    length: number;
    width: number;
    height: number;
    cbm: number;
    cft: number;
    vin_no: string;
    make: string;
    model: string;
    year: string;
};
export declare const BulkSeaLoad: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    hazard_details: {
        is_hazardous: boolean;
        un_number: {};
        hazard_class: {};
        hazardouse_level: string;
        temp_unit: string;
        flash_point: number;
        emergency_contact: string;
        hazard_special_instruction: string;
    };
    bulk_cargo_type: string;
    gross_wt: number;
    loading_rate: number;
    discharging_rate: number;
    additional_information: string;
};
export declare const ftlLandLoad: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    weight_unit: string;
    hazard_details: {
        is_hazardous: boolean;
    };
    packages: {
        description: string;
        length_unit: string;
        weight_unit: string;
        package_type: {};
        package_quantity: number;
        length: number;
        width: number;
        height: number;
        cbm: number;
        cft: number;
        gross_wt: number;
        net_wt: number;
    }[];
    marks_and_no: string;
    vehicle_type: {};
    vehicle_no: string;
    seal_no: string;
    gross_wt: number;
    net_wt: number;
};
export declare const ltlLandLoad: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    package_quantity: number;
    total_units: number;
    weight_unit: string;
    length_unit: string;
    hazard_details: {
        is_hazardous: boolean;
        un_number: {};
        hazard_class: {};
        hazardouse_level: string;
        temp_unit: string;
        flash_point: number;
        emergency_contact: string;
        hazard_special_instruction: string;
    };
    vehicle_type: {};
    vehicle_no: string;
    marks_and_no: string;
    hs_code: string;
    seal_no: string;
    package_type: {};
    per_unit_weight: number;
    gross_wt: number;
    chargeable_wt: number;
    length: number;
    width: number;
    height: number;
    cbm: number;
    cft: number;
};
export declare const fclLandLoad: {
    shipment: {
        _cls_: string;
        _id: {
            $oid: string;
        };
    }[];
    description: string;
    weight_unit: string;
    hazard_details: {
        is_hazardous: boolean;
    };
    container_type: {};
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
    packages: {
        description: string;
        length_unit: string;
        weight_unit: string;
        package_type: {};
        package_quantity: number;
        length: number;
        width: number;
        height: number;
        cbm: number;
        cft: number;
        gross_wt: number;
        total_units: number;
    }[];
};
export declare const quotationObj: {
    stats: {
        gross_wt: {
            kg: number;
            lb: number;
            mt: number;
        };
        chargeable_wt_167: {
            kg: number;
            lb: number;
            mt: number;
        };
        aggregate_chargeable_wt_167: {
            kg: number;
            lb: number;
            mt: number;
        };
        volume: {
            cbm: number;
            cft: number;
            cbi: number;
        };
        package_str: string;
        volume_str: string;
        total_unit: number;
        container: {};
        container_count: number;
        vehicle: {
            Shipthis: number;
        };
        vehicle_count: number;
        container_teu: number;
        load_str: string;
    };
    some_random_field: string;
    shipment_type: string;
    order_ref_no: any[];
    origin: {};
    destination: {
        location: {};
        airport_of_destination: any;
        port_of_destination: any;
        location_type: string;
        pincode: string;
        drop_address: string;
    };
    documents: any[];
    cargo_value: {};
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
    lcls: any[];
    fcls: any[];
    details: any[];
    ltls: any[];
    shipment_term: {};
    shipment_movement_type: string;
    customer_name: {};
    shipper_name: {};
    consignee_name: {};
    sales_executive: {};
    request_received_from: string;
    movement_type: string;
    product_type: {};
    ftls: {
        weight_unit: string;
        description: string;
        vehicle_type: {};
        item_stats: {
            gross_wt: {
                kg: number;
                lb: number;
                mt: number;
            };
            chargeable_wt_167: {
                kg: number;
                lb: number;
                mt: number;
            };
            volume: {
                cbm: number;
                cft: number;
                cbi: number;
            };
            package_str: string;
            volume_str: string;
            load_str: string;
        };
        gross_wt: number;
        vehicle_count: number;
    }[];
};
export declare const customerObj: {
    reqbody: {
        opening_balance: {};
        account_contact_person: {
            same_as_primary: boolean;
            additional_emails: any[];
            enable_portal_access: boolean;
        };
        __scp: {};
        company: {
            is_agent: boolean;
            name: string;
            phone: string;
            client_code: string;
            website: string;
            fax_no: string;
        };
        primary_contact_person: {
            additional_emails: any[];
            enable_portal_access: boolean;
            salutation: string;
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
            payment_term: {
                _id: {
                    $oid: string;
                };
                no_of_days: number;
                name: string;
                order: number;
                _cls_: string;
                __display: string;
            };
            currency: {};
        };
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
    action_op_data: {};
    'captcha-response': {};
};
