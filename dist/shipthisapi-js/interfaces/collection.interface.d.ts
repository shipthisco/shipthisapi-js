declare enum ShipmentClass {
    House = "house",
    Direct = "direct",
    Master = "master"
}
declare enum ShipmentType {
    Import = "import",
    Export = "export",
    CrossTrade = "cross_trade"
}
export interface CollectionResponse<T> {
    items?: T[];
    pagination?: Pagination;
    multi_sort?: MultiSort[];
    permissions?: Permissions;
    disable_add?: boolean;
}
export interface AirShipment {
    _id: ID;
    job_id: string;
    quotation_reference?: QuotationReference;
    shipment_class: ShipmentClass;
    master_reference?: MasterReference;
    customer_name: CustomerName;
    shipment_type: ShipmentType;
    shipment_term: ShipMethod;
    shipment_name: string;
    is_consolidated_shipment?: boolean;
    master_shipment_cost_allocation?: boolean;
    enable_automated_tracking?: boolean;
    custom?: {
        abc: {
            $date: Date;
        };
        is_exhibition: boolean;
    };
    order_ref_no?: Array<string | number>;
    mawb_no?: string;
    airline?: Airline;
    hawb_no?: string;
    booking_no?: string;
    flight_no?: string;
    additional_notes?: string;
    special_instruction?: string;
    release_instruction?: string;
    shipper_declared_value?: ShipperDeclaredValue;
    country_of_origin?: CountryOfOrigin;
    insurance?: Insurance;
    cartage_by?: ByDetails;
    cartage_cost_currency?: CartageCostCurrency;
    cartage_cost_amount?: number;
    customs_clearance_by?: CustomClearanceBy;
    place_of_receipt?: PlaceOfReceiptDelivery;
    port_of_loading?: PortOfLoading;
    port_of_discharge?: PortOfDischarge;
    place_of_delivery?: PlaceOfReceiptDelivery;
    operation_executive: OperationExecutive;
    shipper_name?: ShipperName;
    consignee_name?: ConsigneeAndPickupAndDelivery;
    shipper_address?: string;
    consignee_address?: string;
    pickup?: ConsigneeAndPickupAndDelivery;
    delivery?: ConsigneeAndPickupAndDelivery;
    forwording_agent?: ForwordingAgent;
    forwording_agent_show_on_master?: boolean;
    destination_agent?: DestinationAgent;
    destination_agent_show_on_master?: boolean;
    foforwarding_agent_address?: string;
    destination_agent_address?: string;
    consolidator?: Consolidator;
    consolidator_address?: string;
    place_of_consolidation_address?: string;
    notify_party?: NotifyAndAlsoNotifyParty;
    notify_party_address?: string;
    carrier_code: string;
    portOfDestination: PortOfDestination;
    dischargeSublocationCode: DisAndDesSublocationCode;
    destinationSublocationCode: DisAndDesSublocationCode;
    primaryCCN?: string;
    previousCCN?: string;
    consolidationIndicator?: string;
    override_cargo_control_number?: string;
    pod_documents?: any[];
    skus?: any[];
    under_watchlist?: boolean;
    notify_events_via_email?: boolean;
    tags?: any[];
    mawb_rate_class_code?: string;
    pick_charge_from_invoice?: boolean;
    hawb_override_dimensions?: boolean;
    hawb_rate_class_code?: string;
    hawb_rate_or_charge?: number;
    hawb_rate_total?: number;
    hawb_has_other_charges?: boolean;
    documents?: any[];
    customer_documents?: any[];
    customer_uploaded_documents?: any[];
    job_status?: string;
    shipment_status?: string;
    __events?: {
        opened__date: {
            $date: Date;
        };
        opened__comments: string;
    };
    _cls_?: string;
    _last_remark?: string;
    __status?: any;
    __subscribers?: {
        customers?: Array<string>;
        vendors?: Array<string>;
        employee?: Array<string>;
    };
    _created_by?: string;
    _created_by_name?: string;
    _last_modified_by?: string;
    _last_modified_by_name?: string;
    _last_modified_by_email?: string;
    'port_of_loading.transit_time'?: string;
    hawb_rates?: string;
    hawb_name?: string;
    hawb_price?: number;
    _operation?: Operation;
    mbl_no?: string;
    hbl_no?: null;
}
export interface LandShipment {
    __events?: {
        opened__date: {
            $date: Date;
        };
        opened__comments: string;
    };
    master_shipment_revenue_allocation?: string;
    master_shipment_cost_allocation?: string;
    enable_automated_tracking?: boolean;
    custom?: {
        booth_no: string;
    };
    order_ref_no?: Array<string>;
    shipper_declared_value?: ShipperDeclaredValue;
    country_of_origin?: CountryOfOrigin;
    insurance?: Insurance;
    origin?: {
        location?: CountryOfOrigin;
        pickup_date?: Date;
        departure_date?: Date;
    };
    destination?: {
        location?: CountryOfOrigin;
        arrival_date?: Date;
        delivered_date?: Date;
    };
    operation_executive: OperationExecutive;
    pod_documents?: [];
    skus?: Array<string>;
    under_watchlist?: boolean;
    notify_events_via_email?: boolean;
    tags?: Array<string>;
    documents?: Array<string>;
    customer_documents?: Array<string>;
    shipments_status?: string;
    job_id?: string;
    shipment_name: string;
    customer_name: CustomerName;
    primary_contact_person?: PrimaryContactPerson;
    address?: Address;
    shipment_class?: ShipmentClass;
    movement_type?: string;
    quotation_reference?: QuotationReference;
    master_reference?: MasterReference;
    shipment_term?: ShipMethod;
    product_type?: ShipMethod;
    booking_no?: string;
    tracking_no?: string;
    truck_no?: string;
    carrier?: {
        _id: ID;
        company: {
            name?: string;
            vendor_type?: Array<string>;
            nick_name?: string;
        };
        primary_contact_person?: PrimaryContactPerson;
        address?: Address;
        full_address?: string;
        _cls_?: string;
    };
    carrier_quote_no?: string;
    additional_notes?: string;
    special_instruction?: string;
    release_instruction?: string;
    freight_charge_term?: string;
    intermediate_points?: [
        {
            location?: CountryOfOrigin;
            cartage_by?: ByDetails;
            arrival_date?: {
                $date: Date;
            };
            departure_date?: {
                $date: Date;
            };
            notes?: string;
            pickup_address?: string;
        }
    ];
    sales_executive?: ShipMethod;
    shipper_name: ShipperName;
    consignee_name?: ByDetails;
    consignee_address?: string;
    shipper_address?: string;
    pickup_notes?: string;
    delivery_notes?: string;
    notify_party?: NotifyAndAlsoNotifyParty;
    notify_party_address?: string;
    intermediate_consignee?: ByDetails;
    intermediate_consignee_address?: string;
    forwording_agent?: ShipperName;
    forwording_agent_address?: string;
    destination_agent?: ShipperName;
    destination_agent_address?: string;
    proof_of_delivery_date?: {
        $date: Date;
    };
    pod_received_by?: {
        $date: Date;
    };
    shipment_type?: string;
    _id?: ID;
    shipment_status?: string;
    _cls_?: string;
    port_of_discharge?: PortOfDischarge;
    port_of_loading?: PortOfLoading;
    _operation?: Operation;
    mbl_no?: string;
    hbl_no?: null;
}
export interface SeaShipment {
    'port_of_loading.transit_time': string;
    __events?: {
        opened__date: {
            $date: Date;
        };
        opened__comments: string;
    };
    enable_automated_tracking?: boolean;
    enable_inter_branch?: boolean;
    custom?: {
        is_removal_shipment: boolean;
        ciffa_member: string;
        new_field: string;
    };
    order_ref_no?: Array<string>;
    shipper_declared_value?: ShipperDeclaredValue;
    country_of_origin?: CountryOfOrigin;
    insurance?: Insurance;
    cartage_cost_amount?: number;
    place_of_pickup?: {
        location: Location;
        pickup_date?: {
            $date: Date;
        };
        original_pickup_date?: {
            $date: Date;
        };
    };
    place_of_receipt: PlaceOfReceiptDelivery;
    port_of_loading?: PortOfLoading;
    port_of_discharge?: PortOfDischarge;
    port_of_destination: {
        port: Port;
        arrival_date: {
            $date: Date;
        };
        original_arrival_date: {
            $date: Date;
        };
    };
    place_of_delivery?: {
        location?: Location;
        delivery_date?: {
            $date: Date;
        };
        original_delivery_date?: {
            $date: Date;
        };
    };
    final_destination?: any;
    operation_executive: OperationExecutive;
    forwarding_agent_show_on_master?: boolean;
    destination_agent_show_on_master?: boolean;
    has_switch_bl?: boolean;
    pod_documents?: [];
    skus?: [];
    under_watchlist?: boolean;
    notify_events_via_email?: boolean;
    tags?: [];
    documents?: [];
    customer_documents?: [];
    customer_uploaded_documents?: [];
    shipment_status: string;
    job_id: string;
    quotation_reference?: QuotationReference;
    shipment_class: string;
    shipment_type: ShipmentType;
    weight_unit?: string;
    customer_name?: CustomerName;
    shipment_term?: ShipMethod;
    shipment_name: string;
    product_type?: ShipMethod;
    branches?: Array<string>;
    shipping_line?: ShipMethod;
    previous_carrier_code?: string;
    mbl_no?: string;
    hbl_no?: string;
    booking_no?: string;
    vessel?: any;
    voyage_no?: string;
    additional_notes?: string;
    special_instruction?: string;
    release_instruction?: string;
    cargo_ready_date?: {
        $date?: Date;
    };
    last_free_date: {
        $date?: Date;
    };
    cartage_by?: ByDetails;
    cartage_cost_currency?: CartageCostCurrency;
    customs_clearance_by?: CustomClearanceBy;
    sales_executive?: ShipMethod;
    shipper_name?: ShipperName;
    shipper_address?: string;
    consignee_name?: string;
    pickup?: ShipperName;
    pickup_address?: string;
    delivery?: ShipperName;
    delivery_address?: string;
    delivery_method?: ShipMethod;
    pickup_notes?: string;
    delivery_notes?: string;
    forwording_agent?: ShipperName;
    forwording_agent_address?: string;
    destination_agent?: ShipperName;
    destination_agent_address?: string;
    clearance_agent_address?: string;
    consolidator?: Consolidator;
    consolidator_address?: string;
    place_of_consolidation?: any;
    place_of_consolidation_address?: string;
    notify_party?: NotifyAndAlsoNotifyParty;
    notify_party_address?: string;
    also_notify_party: NotifyAndAlsoNotifyParty;
    also_notify_party_address?: string;
    switch_bl_shipper_name?: ShipperName;
    switch_bl_shipper_address?: string;
    switch_bl_consignee_name?: ShipperName;
    switch_bl_consignee_address?: string;
    switch_bl_notify_party?: ShipperName;
    switch_bl_notify_party_address?: string;
    master_reference?: MasterReference;
    volume?: string;
    _id?: ID;
    _cls_?: string;
    _operation?: Operation;
}
export interface ID {
    $oid?: string;
}
export interface Operation {
    edit?: boolean;
    delete?: boolean;
}
export interface CustomerName {
    _id?: ID;
    company?: Company;
    primary_contact_person?: PrimaryContactPerson;
    _cls_?: string;
    credit_limit?: string;
    currency?: string | ShipthisBasic;
    payment_term?: string;
    sales_person?: string;
    address?: Address;
    cartage_by?: string;
    customs_agent?: string;
}
export interface Address {
    line_1?: string;
    line_2?: string;
    pincode?: string;
    city?: CountryOfOrigin;
    _cls_?: string;
    need_insurance?: boolean;
}
export interface Company {
    name: string;
    is_agent: boolean;
}
export interface QuotationReference {
    _id: ID;
    quotation_number: string;
    created_at?: {
        $date: Date;
    };
    _cls_?: string;
}
export interface ShipMethod {
    _id?: ID;
    name?: string;
    _cls_?: string;
    code?: string;
    _operation?: Operation;
}
export interface Airline {
    _id?: ID;
    _cls_?: string;
    prefix_code?: string;
    name?: string;
    _operation: Operation;
}
export interface ShipperDeclaredValue {
    currency?: ShipthisBasic;
    amount?: number;
}
export interface CountryOfOrigin {
    description?: string;
    bold?: string;
    lat: number;
    lng: number;
    query_type?: string;
    type?: string;
    province: string;
    province_code?: string;
    city?: string;
    country?: string;
    country_code?: string;
    sub_area?: string;
    area?: string;
    zipcode?: string;
}
export interface Insurance {
    need_insurance?: boolean;
    currency?: ShipthisBasic;
    amount?: number;
}
export interface ByDetails {
    _id: ID;
    company: {
        name?: string;
        vendor_type?: Array<string>;
        nick_name?: string;
    };
    primary_contact_person?: PrimaryContactPerson;
    address?: Address;
    _cls_?: string;
}
export interface CartageCostCurrency {
    _id?: ID;
    name?: string;
    _cls_?: string;
}
export interface CustomClearanceBy {
    _id?: ID;
    company?: {
        name?: string;
        vendor_type: Array<string>;
        nick_name: string;
    };
    primary_contact_person: PrimaryContactPerson;
    address?: Address;
    _cls_?: string;
}
export interface PlaceOfReceiptDelivery {
    location?: Location;
    arrival_date?: {
        $date?: Date;
    };
    original_arrival_date?: {
        $date?: Date;
    };
}
export interface OperationExecutive {
    _id?: ID;
    name?: string;
    email?: string;
    _cls_?: string;
    _operation?: Operation;
}
export interface ShipperName {
    _id?: ID;
    _cls_?: string;
    company?: {
        name?: string;
        phone?: string;
    };
    address?: Address;
    tin_no?: string;
    full_address: string;
}
export interface ConsigneeAndPickupAndDelivery {
    _id: ID;
    company: {
        name?: string;
        party_type?: Array<string>;
    };
    address: Address;
    full_address: string;
    _cls_?: string;
}
export interface ForwordingAgent {
    _id?: ID;
    company?: {
        name?: string;
        vendor_type?: Array<string>;
        nick_name?: string;
        vendor_id?: string;
        phone?: string;
        shipthis_code?: string;
    };
    primary_contact_person?: PrimaryContactPerson;
    address?: Address;
    full_address?: string;
    _cls_?: string;
}
export interface DestinationAgent {
    _id?: ID;
    company?: {
        name?: string;
        vendor_type?: Array<string>;
        nick_name?: string;
        vendor_id?: string;
        website: string;
        customer_segment: Array<CustomerSegment>;
    };
    primary_contact_person?: PrimaryContactPerson;
    address?: Address;
    full_address?: string;
    _cls_?: string;
}
export interface CustomerSegment {
    _id?: ID;
    name?: string;
    _cls_?: string;
}
export interface MasterReference {
    _id?: ID;
    job_id?: string;
    _cls_?: string;
}
export interface PrimaryContactPerson {
    salutation?: string;
    name?: string;
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    enable_portal_access?: boolean;
    additional_emails?: any[];
}
export interface Consolidator {
    _id?: ID;
    company?: {
        name?: string;
        vendor_type?: Array<string>;
        website?: string;
    };
    address: Address;
    full_address?: string;
    _cls_?: string;
}
export interface NotifyAndAlsoNotifyParty {
    _id: ID;
    company: {
        name: string;
    };
    address: Address;
    full_address?: string;
    _cls_?: string;
}
export interface PortOfDischarge {
    port?: Port;
    arrival_date?: ArrivalDateClass;
}
export interface DisAndDesSublocationCode {
    _id: ID;
    name: string;
    sub_loc_code: string;
    customs_code: string;
    address: Address;
    _cls_?: string;
}
export interface PortOfDestination {
    _id: ID;
    name: string;
    code: string;
    _cls_?: string;
}
export interface PortofDestinationSea {
    port: Port;
}
export interface ArrivalDateClass {
    $date?: number;
}
export interface Port {
    _id?: ID;
    name?: string;
    code?: string;
    location?: Location;
    _cls_?: string;
}
export interface Location {
    description?: string;
    bold?: string;
    lat?: number;
    lng?: number;
    query_type?: string;
    country?: string;
    country_code?: string;
    city?: string;
    type?: string;
    province?: string;
    province_code?: string;
    sub_area?: string;
    area?: string;
    zipcode?: any;
}
export interface PortOfLoading {
    port?: Port;
    departure_date?: ArrivalDateClass;
    original_departure_date?: {
        $date?: number;
    };
    transit_time?: number;
}
export interface MultiSort {
    sort_by?: string;
    sort_order?: string;
}
export interface Pagination {
    count?: number;
    page?: number;
    pages?: number;
    size?: number;
}
export interface Permissions {
    read?: boolean;
    write?: boolean;
    edit?: boolean;
    delete?: boolean;
}
export interface ShipthisBasic {
    _id?: ID;
    name?: string;
    _cls_?: string;
}
export {};
