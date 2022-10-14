"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipment = void 0;
const request_body_1 = require("./request-body");
const commonUtils_1 = require("../utils/commonUtils");
class Shipment {
    constructor(obj) {
        this.obj = obj;
    }
    getAllShipments() {
        return this.obj.getListGenericCollection(this.obj, 'shipment_v2');
    }
    getAirShipments() {
        return this.obj.getListGenericCollection(this.obj, 'air_shipment');
    }
    getSeaShipments() {
        return this.obj.getListGenericCollection(this.obj, 'sea_shipment');
    }
    getLandShipments() {
        return this.obj.getListGenericCollection(this.obj, 'land_shipment');
    }
    getAirShipment(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
    }
    getSeaShipment(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
    }
    getLandShipment(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'land_shipment', ObjectId);
    }
    updateAirShipment(ObjectId, updatedData) {
        const Data = { ...request_body_1.requestAirShipment, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'air_shipment', ObjectId, Data);
    }
    updateSeaShipment(ObjectId, updatedData) {
        const Data = { ...request_body_1.requestSeaShipement, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'sea_shipment', ObjectId, Data);
    }
    updateLandShipment(ObjectId, updatedData) {
        const Data = { ...request_body_1.requestLandShipment, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'land_shipment', ObjectId, Data);
    }
    createAirShipment(data) {
        const Data = { ...request_body_1.requestAirShipment, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'air_shipment', Data);
    }
    createSeaShipment(data) {
        const Data = { ...request_body_1.requestSeaShipement, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'sea_shipment', Data);
    }
    createLandShipment(data) {
        const Data = { ...request_body_1.requestLandShipment, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'land_shipment', Data);
    }
    deleteAirShipment(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
    }
    deleteSeaShipment(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
    }
    deleteLandShipment(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'land_shipment', ObjectId);
    }
    getAirPort(data = '') {
        const updatedData = { ...request_body_1.referencePortPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'airport', updatedData);
    }
    getCustomers(data = '') {
        const updatedData = { ...request_body_1.referenceCustomerPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'customer', updatedData);
    }
    async addNewCustomer(data) {
        const currency = await this.getCurrency(data.accounting.currency);
        const newCustomerData = { ...request_body_1.createNewCustomer, ...data };
        newCustomerData.accounting.currency = currency.items[0];
        return this.obj.createGenericCollectionItem(this.obj, 'customer', newCustomerData);
    }
    async createCustomerParty(data, id) {
        const newCustomerData = { ...request_body_1.createNewShipper, ...data };
        const params = { input_filters: { 'customer._id': `${id}` } };
        return this.obj.createGenericCollectionItem(this.obj, 'customer_party', newCustomerData, params);
    }
    getAllShipmentTerms() {
        return this.obj.getListGenericCollection(this.obj, 'shipment_term', {
            only: 'name,code,order',
            general_filter: {},
        });
    }
    getShipmentTerms(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'shipment_term', updatedData);
    }
    getQuotationReference(data = null) {
        const updatedData = (0, commonUtils_1.managePayload)(data, ['quotation_number'], ['quotation_number']);
        return this.obj.getGenericAutoComplete(this.obj, 'quotation', updatedData);
    }
    getMasterShipment(data = null) {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'sea_shipment', updatedData);
    }
    getConsigneeName(data = '', id) {
        const fields = [
            'company.name',
            'full_address',
            'address',
            'tin_no',
            'company.phone',
        ];
        const display_fields = ['company.name'];
        const input_filters = JSON.stringify({ 'customer._id': `${id}` });
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getShipperName(data = '', id) {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const input_filters = JSON.stringify({ 'customer._id': `${id}` });
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getPickUpNDelivery(data = '', id) {
        const fields = ['full_address', 'address', 'company', 'tin_no'];
        const display_fields = ['company.name'];
        const input_filters = JSON.stringify({ 'customer._id': `${id}` });
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getNotifyParty(data = '', id) {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const input_filters = JSON.stringify({ 'customer._id': `${id}` });
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getGoogleLocation(data = '') {
        return this.obj.getLocation(this.obj, 'search-place-autocomplete', {
            query_level: undefined,
            query: data,
        });
    }
    selectGoogleLocations(placeId, description) {
        return this.obj.selectGoogleLocation(this.obj, 'search-place', {
            placeId,
            description,
        });
    }
    getForwordingAgent(data = '') {
        const fields = [
            'full_address',
            'address',
            'company',
            'primary_contact_person',
            'tin_no',
        ];
        const display_fields = ['company.name'];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getConsolidator(data = '') {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const general_filters = JSON.stringify({
            'company.vendor_type': 'consolidator',
        });
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, null, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getPlaceOfConsolidation(data = '') {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const general_filters = '{\n    "company.vendor_type":"place_of_consolidation"\n}';
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, null, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getAllOperationExecutive() {
        return this.obj.getListGenericCollection(this.obj, 'employee', {
            only: '_id,name',
            general_filter: {},
        });
    }
    getOperationExecutive(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'employee', updatedData);
    }
    getAirlineName() {
        return this.obj.getListGenericCollection(this.obj, 'airline', {
            only: 'name,cbsa_code,prefix_code',
            general_filter: {},
        });
    }
    getAllCurrency() {
        return this.obj.getListGenericCollection(this.obj, 'currency', {
            only: 'name',
            general_filter: {},
        });
    }
    getCurrency(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'currency', updatedData);
    }
    CartageByAndCustomClearance(data = '') {
        const fields = ['company', 'address', 'primary_contact_person'];
        const display_fields = ['company.name'];
        const general_filters = '{\n    "company.vendor_type":"place_of_consolidation"\n}';
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getProductType() {
        return this.obj.getListGenericCollection(this.obj, 'product_type', {
            only: '_id,name',
            general_filter: {},
        });
    }
    getShippingLineName() {
        return this.obj.getListGenericCollection(this.obj, 'shipping_line', {
            only: 'name,carrier_code,cbsa_code,shipthis_code',
            general_filter: {},
        });
    }
    getVesselName(data = '') {
        const fields = ['_id', 'name'];
        const display_fields = ['name'];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'vessel', updatedData);
    }
    getSeaPort(data = '') {
        const updatedData = { ...request_body_1.referencePortPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'sea', updatedData);
    }
    getPickup(data = '') {
        const fields = ['company', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getCustomClearance(data = '') {
        const fields = [
            'company.name',
            'full_address',
            'address',
            'tin_no',
            'company.vendor_type',
        ];
        const display_fields = ['company.name'];
        const general_filters = '{\n    "company.vendor_type":"customs_agent"\n}';
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getLandCarrier(data = '') {
        const fields = [
            'company',
            'address',
            'primary_contact_person',
            'full_address',
        ];
        const display_fields = ['company.name'];
        const general_filters = '{"company.vendor_type":"carrier"}';
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getVehicleType(data) {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'vehicle_type', updatedData);
    }
    getPackageType(data) {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'package_type', updatedData);
    }
    ltloads(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'ltl_load', data);
    }
    initiaConversation(data) {
        return this.obj.conversation(this.obj, 'conversation', data);
    }
}
exports.Shipment = Shipment;
