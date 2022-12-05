"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipment = void 0;
const request_body_1 = require("./request-body");
const commonUtils_1 = require("../utils/commonUtils");
class Shipment {
    constructor(obj) {
        this.obj = obj;
    }
    getSomeShipments(filter) {
        return this.obj.getListGeneric(this.obj, 'shipment_list_all', filter);
    }
    getAllShipments() {
        return this.obj.getListGenericCollection(this.obj, 'shipment_v2');
    }
    getAllAirFreight() {
        return this.obj.getListGenericCollection(this.obj, 'air_shipment');
    }
    getAllSeaFreight() {
        return this.obj.getListGenericCollection(this.obj, 'sea_shipment');
    }
    getAllLandFreight() {
        return this.obj.getListGenericCollection(this.obj, 'land_shipment');
    }
    getAirFreight(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
    }
    getSeaFreight(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
    }
    getLandFreight(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'land_shipment', ObjectId);
    }
    updateAirFreight(ObjectId, updatedData) {
        const Data = { ...request_body_1.requestAirShipment, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'air_shipment', ObjectId, Data);
    }
    updateSeaFreight(ObjectId, updatedData) {
        const Data = { ...request_body_1.requestSeaShipement, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'sea_shipment', ObjectId, Data);
    }
    updateLandFreight(ObjectId, updatedData) {
        const Data = { ...request_body_1.requestLandShipment, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'land_shipment', ObjectId, Data);
    }
    createAirFreight(data) {
        const Data = { ...request_body_1.requestAirShipment, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'air_shipment', Data);
    }
    createSeaFreight(data) {
        const Data = { ...request_body_1.requestSeaShipement, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'sea_shipment', Data);
    }
    createLandFreight(data) {
        const Data = { ...request_body_1.requestLandShipment, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'land_shipment', Data);
    }
    deleteAirFreight(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
    }
    deleteSeaFreight(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
    }
    deleteLandFreight(ObjectId) {
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
    async createCustomer(data) {
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
    getShipmentTerms(data) {
        if (!data) {
            return this.obj.getListGenericCollection(this.obj, 'shipment_term', {
                only: 'name,code,order',
                general_filter: {},
            });
        }
        else {
            const updatedData = (0, commonUtils_1.managePayload)(data);
            return this.obj.getGenericAutoComplete(this.obj, 'shipment_term', updatedData);
        }
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
    getConsignee(data = '', id) {
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
    getShipper(data = '', id) {
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
    getVehicleType(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'vehicle_type', updatedData);
    }
    async getPackageTypeList(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'package_type', updatedData);
    }
    async getPackageType({ data = '', }) {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        const res = await this.obj.getGenericAutoComplete(this.obj, 'package_type', updatedData);
        return res.items[0];
    }
    getContainerType(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'container_type', updatedData);
    }
    getHarzardUnNumber(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'hazard_un_number', updatedData);
    }
    getHarzardClass(data = '') {
        const updatedData = (0, commonUtils_1.managePayload)(data);
        return this.obj.getGenericAutoComplete(this.obj, 'hazard_class', updatedData);
    }
    initiaConversation(data) {
        return this.obj.conversation(this.obj, 'conversation', data);
    }
    createAirLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'air_load', data);
    }
    createSeaFclLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'fcl_load', data);
    }
    createSeaLclLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'lcl_load', data);
    }
    createSeaRoroLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'roro_load', data);
    }
    createSeaBulkLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'bulk_load', data);
    }
    createLandFtlLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'ftl_load', data);
    }
    createLandltlLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'ltl_load', data);
    }
    createLandFclLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'fcl_load', data);
    }
}
exports.Shipment = Shipment;
