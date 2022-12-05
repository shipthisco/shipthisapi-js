"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAWBData = exports.requestVesselData = exports.requestShippingLine = exports.requestShipmentTermsData = exports.requestAirportData = exports.requestPortData = exports.requestProdData = exports.requestVehicleData = exports.requestCommonData = exports.requestCatData = void 0;
exports.requestCatData = {
    name: '',
    max_cbm: 0,
    length: 0,
    width: 0,
    height: 0,
    max_weight: 0,
};
exports.requestCommonData = {
    name: '',
    code: '',
};
exports.requestVehicleData = {
    name: '',
    code: '',
    container_size: '',
};
exports.requestProdData = {
    name: '',
    code: '',
};
exports.requestPortData = {
    location: {
        description: '',
        bold: '',
        lat: 0,
        lng: 0,
        query_type: '',
        type: '',
        province: '',
        province_code: '',
        city: '',
        country: '',
        country_code: '',
    },
    custom: {
        new_port: '',
    },
    name: '',
    code: '',
    numeric_code: '',
    latitude: 0,
    longitude: 0,
};
exports.requestAirportData = {
    location: {
        description: '',
        bold: '',
        lat: 0,
        lng: 0,
        query_type: '',
        type: '',
        province: '',
        province_code: '',
        city: '',
        country: '',
        country_code: '',
    },
    custom: {
        new_field: '',
    },
    name: '',
    code: '',
};
exports.requestShipmentTermsData = {
    name: '',
    code: '',
    order: 0,
};
exports.requestShippingLine = {
    address: {},
    name: '',
    code: '',
    shipthis_code: '',
    cbsa_code: '',
    phone: '',
    fax: '',
    email: '',
};
exports.requestVesselData = {
    name: '',
    code: '',
    imo: '',
    mmsi: '',
    flag: '',
    type: '',
};
exports.requestAWBData = {
    available_count: 0,
    used: [],
    used_count: 0,
    all_counts: '',
    locked: false,
    no_of_digits: 0,
    used_codes: [],
    available: [],
    airline: '',
    acquired_on: {
        $date: 0,
    },
    valid_till: {
        $date: 0,
    },
    prefix: '',
    start_number: 0,
    end_number: 0,
};
