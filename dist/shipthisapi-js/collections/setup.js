"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setup = void 0;
const commonUtils_1 = require("../utils/commonUtils");
const request_setup_1 = require("./request.setup");
class Setup {
    constructor(obj) {
        this.obj = obj;
    }
    getCategoriesType(data) {
        const updatedData = { requestCatData: request_setup_1.requestCatData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'container_type', updatedData);
    }
    getPackageType(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'package_type', updatedData);
    }
    getDocumentType(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'documentation_kind', updatedData);
    }
    getVehicleType(data) {
        const updatedData = { requestVehicleData: request_setup_1.requestVehicleData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'vehicle_type', updatedData);
    }
    getProductType(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'product_type', updatedData);
    }
    getAirline(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'airline', updatedData);
    }
    async getPort(data) {
        const location = await this.obj.Shipment.getGoogleLocation(data.location.bold);
        const selectLocation = await this.obj.Shipment.selectGoogleLocations(location.items[0].place_id, location.items[0].description);
        const updatedData = { requestPortData: request_setup_1.requestPortData, ...data, selectLocation };
        return this.obj.createGenericCollectionItem(this.obj, 'port', updatedData);
    }
    async getAirport(data) {
        const location = await this.obj.Shipment.getGoogleLocation(data.location.bold);
        const selectLocation = await this.obj.Shipment.selectGoogleLocations(location.items[0].place_id, location.items[0].description);
        const updatedData = { requestAirportData: request_setup_1.requestAirportData, ...data, selectLocation };
        return this.obj.createGenericCollectionItem(this.obj, 'airport', updatedData);
    }
    getshipmentTerms(data) {
        const updatedData = { requestShipmentTermsData: request_setup_1.requestShipmentTermsData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'shipment_term', updatedData);
    }
    async getshippingLine(data) {
        const updatedData = { requestShippingLine: request_setup_1.requestShippingLine, ...data };
        const location = await this.obj.Shipment.getGoogleLocation(data.address);
        const selectLocation = await this.obj.Shipment.selectGoogleLocations(location.items[0].place_id, location.items[0].description);
        updatedData.address.city = selectLocation;
        return this.obj.createGenericCollectionItem(this.obj, 'shipping_line', updatedData);
    }
    async getVessel(data) {
        const updatedData = { requestVesselData: request_setup_1.requestVesselData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'vessel', updatedData);
    }
    async getAWBBlock(data) {
        const fields = ['name', 'code'];
        const display_fields = ['name'];
        const updatedData = (0, commonUtils_1.managePayload)(data.airline, fields, display_fields);
        const res = await this.obj.getGenericAutoComplete(this.obj, 'airline', updatedData);
        console.log(res);
        data.airline = res.items[0];
        const injectableDate = { requestAWBData: request_setup_1.requestAWBData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'awb_block', injectableDate);
    }
    deleteOperation(id, collectionName) {
        return this.obj.deleteGenericCollectionItem(this.obj, collectionName, id);
    }
    deletePort(id) {
        return this.deleteOperation(id, 'port');
    }
    deleteAirPort(id) {
        return this.deleteOperation(id, 'airport');
    }
    deleteContainersType(id) {
        return this.deleteOperation(id, 'container_type');
    }
    deletePackageType(id) {
        return this.deleteOperation(id, 'package_type');
    }
    deleteDocumentKind(id) {
        return this.deleteOperation(id, 'document_kind');
    }
    deleteVehicleType(id) {
        return this.deleteOperation(id, 'vehicle_type');
    }
    deleteProductType(id) {
        return this.deleteOperation(id, 'product_type');
    }
    deleteAirline(id) {
        return this.deleteOperation(id, 'airline');
    }
    deleteShipmentTerms(id) {
        return this.deleteOperation(id, 'shipment_term');
    }
    deleteShippingLine(id) {
        return this.deleteOperation(id, 'shipping_line');
    }
    deleteVessel(id) {
        return this.deleteOperation(id, 'vessel');
    }
    deleteAWBBlock(id) {
        return this.deleteOperation(id, 'awb_block');
    }
}
exports.Setup = Setup;
