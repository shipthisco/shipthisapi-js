export const requiredData = ["customer_name", "shipment_class", "shipment_type", "shipment_term", "shipment_name", "port_of_discharge", "port_of_loading", "carrier_code", "operation_executive"]
export const requiredShipmentType = ["import", "export", "cross_trade"]
export const requiredShpmentClass = ["direct", "house", "master"]
export const RequestData = {
    "port_of_loading": {},
        "port_of_discharge": {},
        "job_id": "",
        "customer_name": {},
        "shipment_type": "",
        "shipment_name":"",
        "shipment_term": {},
        "carrier_code": "",
        "__scp": {},
        "port_of_loading.transit_time": "",
        "hawb_rates": "",
        "__events": {
            "opened__date": {
                "$date": new Date().getTime() // pass current date in milliseconds
            },
            "opened__comments": ""
        },
        "is_consolidated_shipment": false,
        "enable_automated_tracking": false,
        "custom": {
            "is_exhibition": false
        },
        "order_ref_no": [],
        "shipper_declared_value": {
            "amount": 0
        },
        "country_of_origin": {},
        "insurance": {
            "need_insurance": false
        },
        "cartage_cost_amount": 0,
        "place_of_receipt": {
            "location": {}
        },
        "place_of_delivery": {
            "location": {}
        },
        "operation_executive": {},
        "forwarding_agent_show_on_master": true,
        "destination_agent_show_on_master": true,
        "pod_documents": [],
        "skus": [],
        "under_watchlist": false,
        "notify_events_via_email": false,
        "tags": [],
        "pick_charge_from_invoice": false,
        "hawb_override_dimensions": false,
        "hawb_rate_class_code": "B",
        "hawb_rate_or_charge": 0,
        "hawb_rate_total": 0,
        "hawb_has_other_charges": false,
        "documents": [],
        "customer_documents": [],
        "customer_uploaded_documents": [],
        "shipment_status": "opened",
        "shipment_class": "",
        "master_shipment_cost_allocation": "",
}

// request data for sea shipemnt
export const RequestSeaShipement = {
            "__scp": {},
            "port_of_loading.transit_time": "",
            "__events": {
                "opened__date": {
                    "$date": new Date().getTime()
                },
                "opened__comments": ""
            },
            "enable_automated_tracking": false,
            "enable_inter_branch": false,
            "custom": {
                "is_removal_shipment": false
            },
            "order_ref_no": [],
            "shipper_declared_value": {
                "amount": 0
            },
            "country_of_origin": {},
            "insurance": {
                "need_insurance": false
            },
            "cartage_cost_amount": 0,
            "place_of_pickup": {
                "location": {}
            },
            "place_of_receipt": {
                "location": {}
            },
            "port_of_loading": {},
            "port_of_discharge": {},
            "port_of_destination": {},
            "place_of_delivery": {
                "location": {}
            },
            "final_destination": {},
            "forwarding_agent_show_on_master": false,
            "destination_agent_show_on_master": false,
            "has_switch_bl": false,
            "pod_documents": [],
            "skus": [],
            "under_watchlist": false,
            "notify_events_via_email": false,
            "tags": [],
            "documents": [],
            "customer_documents": [],
            "customer_uploaded_documents": [],
            "shipment_status": "opened",
            "job_id": "SEA000964",
            "product_type": "",
            "customer_name": {
                "_id": {
                    "$oid": "62fcffb91adcce1393d3cfec"
                },
                "company": {
                    "name": "Markup"
                },
                "primary_contact_person": {
                    "name": "Justin",
                    "email": "justin@markup.com",
                    "enable_portal_access": true,
                    "first_name": "Justin",
                    "last_name": "Markup"
                },
                "_cls_": "customer",
                "__warn": false,
                "__display": "Markup"
            },
            "shipment_type": "export",
            "weight_unit": "kg",
            "volume_unit": "m3",
            "shipment_class": "house",
            "shipment_term": {
                "_id": {
                    "$oid": "5738c34a8752f565965ec2f8"
                },
                "name": "COST & FREIGHT",
                "_cls_": "shipment_term",
                "code": "CFR",
                "_operation": {
                    "edit": true,
                    "delete": true
                },
                "__display": "CFR - COST & FREIGHT"
            },
            "shipment_name": "ABC",
            "volume": ""
}
export const partiesPayload = {
    "fields": [
        "company.name",
        "full_address",
        "address",
        "tin_no",
        "company.phone"
    ],
    "display_fields": [
        "company.name"
    ],
    "filter_txt": "",
    "input_filters": "{}",
    "general_filters": "{}"
}
export const referencePortPayload = {
        "fields": [
            "name",
            "location",
            "code"
        ],
        "display_fields": [
            "code",
            "name"
        ],
        "filter_txt": "",
        "input_filters": "{}",
        "general_filters": "{}"
    }
export const referenceCustomerPayload = {
        "fields": [
            "primary_contact_person",
            "company",
            "sales_person",
            "payment_term",
            "currency",
            "__warn",
            "customs_agent",
            "cartage_by"
        ],
        "display_fields": [
            "company.name"
        ],
        "filter_txt": "",
        "input_filters": "{}",
        "general_filters": "{}"
}

export const invoiceRequiredData = ["customer", "invoice_currency"]
export const invoiceRequestData = {
        "reqbody": {
            "items": [],
            "invoice_payment_term": {},
            "__scp": {},
            "invoice_total": 0,
            "invoice_tax_total": 0,
            "invoice_sub_total": 0,
            "invoice_service_total": 0,
            "invoice_currency_sub_total": {},
            "invoice_tax_breakup": [],
            "invoice_rcm_breakup": [],
            "invoice_rcm_tax_total": 0,
            "invoice_sub_total_base_currency": 0,
            "invoice_tax_total_base_currency": 0,
            "invoice_additional_charge": 0,
            "charges_breakup": [],
            "invoice_additional_charge_base_currency": 0,
            "invoice_total_base_currency": 0,
            "invoice_date": {
                "$date": 1662508800000
            },
            "invoice_due_date": {
                "$date": 1662508800000
            },
            "custom": {},
            "adjustment_text": "Adjustment",
            "adjustment_amount": 0,
            "documents": [],
            "invoice_number": "INV000283",
            "invoice_currency": {
                "_id": {
                    "$oid": "595e2af33a90d475eead24d2"
                },
                "name": "EUR",
                "_cls_": "currency",
                "_operation": {
                    "edit": true,
                    "delete": true
                },
                "__display": "EUR"
            },
            "exchange_rate": 0.988352,
            "customer": {
                "_id": {
                    "$oid": "62f43e1ebca73696c1ac45d4"
                },
                "company": {
                    "name": "upen parik inc"
                },
                "primary_contact_person": {
                    "name": "Upen"
                },
                "_cls_": "customer",
                "__display": "upen parik inc"
            }
        },
        "action_op_data": {},
        "captcha-response": {}

}


export const r = {
        "job_id": "AIR00263",
        "shipment_class": "house",
        "customer_name": {},
        "shipment_type": "",
        "shipment_term":{},
        "shipment_name": "",
        "is_consolidated_shipment": false,
        "master_shipment_cost_allocation": "per_kg_chargeable_wt",
        "enable_automated_tracking": false,
        "custom": {
            "is_exhibition": false
        },
        "order_ref_no": [],
        "shipper_declared_value": {
            "amount": 0
        },
        "country_of_origin": {},
        "insurance": {
            "need_insurance": false
        },
        "cartage_cost_amount": 0,
        "place_of_receipt": {
            "location": {}
        },
        "port_of_loading": {
            "port": {
                "_id": {
                    "$oid": "5acda4254affc629d93e8593"
                },
                "name": "Ninoy Aquino International Airport",
                "code": "MNL",
                "location": {
                    "description": "Manila, Philippines",
                    "bold": "Metro Manila",
                    "lat": 14.6090537,
                    "lng": 121.0222565,
                    "query_type": "place_id",
                    "country": "Philippines",
                    "country_code": "PH",
                    "city": "Philippines"
                },
                "_cls_": "airport",
                "__display": "MNL - Ninoy Aquino International Airport"
            }
        },
        "port_of_discharge": {},
        "place_of_delivery": {
            "location": {}
        },
        "operation_executive": {},
        "forwarding_agent_show_on_master": true,
        "destination_agent_show_on_master": true,
        "carrier_code": "777",
        "pod_documents": [],
        "skus": [],
        "under_watchlist": false,
        "notify_events_via_email": false,
        "tags": [],
        "enable_eawb": false,
        "mawb_override_dimensions": false,
        "mawb_rate_class_code": "B",
        "mawb_rate_or_charge": 0,
        "mawb_rate_total": 0,
        "charge_declaration": {
            "value_for_carriage": 0,
            "value_for_custom": 0,
            "value_for_insurance": 0
        },
        "has_other_charges": false,
        "has_charge_summary": false,
        "has_other_customs_info": false,
        "enable_accounting": false,
        "enable_handling_info": false,
        "pick_charge_from_invoice": false,
        "hawb_override_dimensions": false,
        "hawb_rate_class_code": "B",
        "hawb_rate_or_charge": 0,
        "hawb_rate_total": 0,
        "hawb_has_other_charges": false,
        "documents": [],
        "customer_documents": [],
        "customer_uploaded_documents": [],
        "job_status": "open",
        "shipment_status": "opened",
        "__events": {
            "opened__date": {
                "$date": (new Date().getTime()),
            },
            "opened__comments": ""
        },
        "_cls_": "air_shipment",
        "_last_update": "",
        "__deleted": false,
        "_last_remark": "",
        "__status": {},
        "__scp": {},
        "__import_reference": null,
        "__subscribers": {
            "customers": [
                "justin@markup.com"
            ],
            "vendors": [],
            "employee": [
                "ashishkmr2210@gmail.com"
            ]
        },
        "__region_id": [
            "usa"
        ],
        "__location_id": [
            "new_york"
        ],
        "_created_by": "5ea15383dc21e40008482068",
        "_created_by_name": "Ashish",
        "_created_by_email": "ashishkmr2210@gmail.com",
        "_last_modified_by": "5ea15383dc21e40008482068",
        "_last_modified_by_name": "Ashish",
        "_last_modified_by_email": "ashishkmr2210@gmail.com",
        "__cache": {
            "house_shipments": {
                "shipment_stats": []
            }
        },
        "port_of_loading.transit_time": "",
        "hawb_rates": ""
    }