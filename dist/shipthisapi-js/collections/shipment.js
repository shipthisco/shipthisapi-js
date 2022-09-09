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
        const allKeys = Object.keys(updatedData);
        for (const item in request_body_1.requiredData) {
            if (!allKeys.includes(item)) {
                throw new Error("fill all the required fields");
            }
        }
        const Data = { ...request_body_1.requiredData, ...updatedData };
        Data.reqbody.__events.opened__date.$date = new Date().getTime();
        return this.obj.updateGenericCollectionItem(this.obj, 'air_shipment', ObjectId, Data);
    }
    updateSeaShipment(ObjectId, updatedData) {
        return this.obj.updateGenericCollectionItem(this.obj, 'sea_shipment', ObjectId, updatedData);
    }
    updateLandShipment(ObjectId, updatedData) {
        return this.obj.updateGenericCollectionItem(this.obj, 'land_shipment', ObjectId, updatedData);
    }
    createAirShipment(data) {
        const allKeys = Object.keys(data);
        console.log(allKeys);
        for (let i = 0; i < request_body_1.requiredData.length; i++) {
            console.log(request_body_1.requiredData[i]);
            if (!allKeys.includes(request_body_1.requiredData[i])) {
                console.log(request_body_1.requiredData[i]);
                throw new Error("fill all the required fields");
            }
        }
        if (!request_body_1.requiredShipmentType.includes(data.shipment_term) || !request_body_1.requiredShpmentClass.includes(data.shipment_class)) {
            throw new Error("fill all the fields with correct values");
        }
        const Data = { ...request_body_1.RequestData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'air_shipment', Data);
    }
    createSeaShipment(data) {
        const allKeys = Object.keys(data);
        console.log(allKeys);
        for (let i = 0; i < request_body_1.requiredData.length; i++) {
            console.log(request_body_1.requiredData[i]);
            if (!allKeys.includes(request_body_1.requiredData[i])) {
                console.log(request_body_1.requiredData[i]);
                throw new Error("fill all the required fields");
            }
        }
        if (!request_body_1.requiredShipmentType.includes(data.shipment_term) || !request_body_1.requiredShpmentClass.includes(data.shipment_class)) {
            throw new Error("fill all the fields with correct values");
        }
        const Data = { ...request_body_1.RequestData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'sea_shipment', Data);
    }
    createLandShipment(data) {
        const allKeys = Object.keys(data);
        console.log(allKeys);
        for (let i = 0; i < request_body_1.requiredData.length; i++) {
            console.log(request_body_1.requiredData[i]);
            if (!allKeys.includes(request_body_1.requiredData[i])) {
                console.log(request_body_1.requiredData[i]);
                throw new Error("fill all the required fields");
            }
        }
        if (!request_body_1.requiredShipmentType.includes(data.shipment_term) || !request_body_1.requiredShpmentClass.includes(data.shipment_class)) {
            throw new Error("fill all the fields with correct values");
        }
        const Data = { ...request_body_1.RequestData, ...data };
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
    getAirPort(data = "") {
        const updatedData = { ...request_body_1.referencePortPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'airport', updatedData);
    }
    getCustomers(data = "") {
        const updatedData = { ...request_body_1.referenceCustomerPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'customer', updatedData);
    }
    getShipmentTerms() {
        return this.obj.getListGenericCollection(this.obj, 'shipment_term', { only: "name,code,order", general_filter: {} });
    }
    getQuotationReference(data = null) {
        const updatedData = (0, commonUtils_1.managePayload)(data, ["quotation_number"], ["quotation_number"]);
        return this.obj.getGenericAutoComplete(this.obj, 'quotation', updatedData);
    }
    getMasterShipment(data = null) {
        const fields = ["company.name", "full_address", "address", "tin_no"];
        const display_fields = ["company.name"];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'sea_shipment', updatedData);
    }
    getShipperNConsignee(data = "") {
        const fields = [
            "job_id",
            "shipper_name",
            "consignee_name"
        ];
        const display_fields = [
            "job_id"
        ];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getPickUpNDelivery(data = "") {
        const fields = ["full_address", "address", "company", "tin_no"];
        const display_fields = ["company.name"];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getNotifyParty(data = "") {
        return this.getShipperNConsignee(data);
    }
    getGoogleLocation(data = "") {
        return this.obj.getLocation(this.obj, "search-place-autocomplete", { query_level: undefined, query: data });
    }
    getForwordingAgent(data = "") {
        const fields = [
            "full_address",
            "address",
            "company",
            "primary_contact_person",
            "tin_no"
        ];
        const display_fields = ["company.name"];
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getConsolidator(data = "") {
        const fields = ["company.name", "full_address", "address", "tin_no"];
        const display_fields = ["company.name"];
        const general_filters = "{\n    \"company.vendor_type\":\"consolidator\"\n}";
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getPlaceOfConsolidation(data = "") {
        const fields = ["company.name", "full_address", "address", "tin_no"];
        const display_fields = ["company.name"];
        const general_filters = "{\n    \"company.vendor_type\":\"place_of_consolidation\"\n}";
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getOperationExecutive() {
        return this.obj.getListGenericCollection(this.obj, 'employee', { only: "_id,name", general_filter: {} });
    }
    getAirlineName() {
        return this.obj.getListGenericCollection(this.obj, 'airline', { only: "name,cbsa_code,prefix_code", general_filter: {} });
    }
    getCurrency() {
        return this.obj.getListGenericCollection(this.obj, 'currency', { only: "name", general_filter: {} });
    }
    CartageByAndCustomClearance(data = "") {
        const fields = [
            "company",
            "address",
            "primary_contact_person"
        ];
        const display_fields = ["company.name"];
        const general_filters = "{\n    \"company.vendor_type\":\"place_of_consolidation\"\n}";
        const updatedData = (0, commonUtils_1.managePayload)(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getProductType() {
        return this.obj.getListGenericCollection(this.obj, 'product_type', { only: "_id,name", general_filter: {} });
    }
}
exports.Shipment = Shipment;
