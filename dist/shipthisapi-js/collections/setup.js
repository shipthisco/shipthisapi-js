"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setup = void 0;
const commonUtils_1 = require("../utils/commonUtils");
const request_setup_1 = require("./request.setup");
class Setup {
    constructor(obj) {
        this.obj = obj;
    }
    getAllAirport() {
        return this.obj.getListGenericCollection(this.obj, 'airport');
    }
    getAllPort() {
        return this.obj.getListGenericCollection(this.obj, 'port');
    }
    getAllContainerType() {
        return this.obj.getListGenericCollection(this.obj, 'container_type');
    }
    getAllPackageType() {
        return this.obj.getListGenericCollection(this.obj, 'package_type');
    }
    getAllDocumentType() {
        return this.obj.getListGenericCollection(this.obj, 'documentation_kind');
    }
    getAllVehicleType() {
        return this.obj.getListGenericCollection(this.obj, 'vehicle_type');
    }
    getAllProductType() {
        return this.obj.getListGenericCollection(this.obj, 'product_type');
    }
    getAllAirline() {
        return this.obj.getListGenericCollection(this.obj, 'airline');
    }
    getAllShipmentTerms() {
        return this.obj.getListGenericCollection(this.obj, 'shipment_term');
    }
    getAllShippingLine() {
        return this.obj.getListGenericCollection(this.obj, 'shipping_line');
    }
    getAllVessel() {
        return this.obj.getListGenericCollection(this.obj, 'vessel');
    }
    getAllAWBBlock() {
        return this.obj.getListGenericCollection(this.obj, 'awb_block');
    }
    getAirport(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'airport', objectId);
    }
    getPort(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'port', objectId);
    }
    getContainerType(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'container_type', objectId);
    }
    getPackageType(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'package_type', objectId);
    }
    getDocumentType(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'documentation_kind', objectId);
    }
    getVehicleType(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'vehicle_type', objectId);
    }
    getProductType(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'product_type', objectId);
    }
    getAirline(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'airline', objectId);
    }
    getShipmentTerms(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'shipment_term', objectId);
    }
    getShippingLine(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'shipping_line', objectId);
    }
    getVessel(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'vessel', objectId);
    }
    getAWBBlock(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'awb_block', objectId);
    }
    createContainerType(data) {
        const updatedData = { requestCatData: request_setup_1.requestCatData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'container_type', updatedData);
    }
    createPackageType(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'package_type', updatedData);
    }
    createDocumentType(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'documentation_kind', updatedData);
    }
    createVehicleType(data) {
        const updatedData = { requestVehicleData: request_setup_1.requestVehicleData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'vehicle_type', updatedData);
    }
    createProductType(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'product_type', updatedData);
    }
    createAirline(data) {
        const updatedData = { requestCommonData: request_setup_1.requestCommonData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'airline', updatedData);
    }
    async createPort(data) {
        const location = await this.obj.Shipment.getGoogleLocation(data.location.bold);
        const selectLocation = await this.obj.Shipment.selectGoogleLocations(location.items[0].place_id, location.items[0].description);
        const updatedData = { requestPortData: request_setup_1.requestPortData, ...data, selectLocation };
        return this.obj.createGenericCollectionItem(this.obj, 'port', updatedData);
    }
    async createAirport(data) {
        const location = await this.obj.Shipment.getGoogleLocation(data.location.bold);
        const selectLocation = await this.obj.Shipment.selectGoogleLocations(location.items[0].place_id, location.items[0].description);
        const updatedData = { requestAirportData: request_setup_1.requestAirportData, ...data, selectLocation };
        return this.obj.createGenericCollectionItem(this.obj, 'airport', updatedData);
    }
    createShipmentTerms(data) {
        const updatedData = { requestShipmentTermsData: request_setup_1.requestShipmentTermsData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'shipment_term', updatedData);
    }
    async createShippingLine(data) {
        const updatedData = { requestShippingLine: request_setup_1.requestShippingLine, ...data };
        const location = await this.obj.Shipment.getGoogleLocation(data.address);
        const selectLocation = await this.obj.Shipment.selectGoogleLocations(location.items[0].place_id, location.items[0].description);
        updatedData.address.city = selectLocation;
        return this.obj.createGenericCollectionItem(this.obj, 'shipping_line', updatedData);
    }
    async createVessel(data) {
        const updatedData = { requestVesselData: request_setup_1.requestVesselData, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'vessel', updatedData);
    }
    async createAWBBlock(data) {
        const fields = ['name', 'code'];
        const display_fields = ['name'];
        const updatedData = (0, commonUtils_1.managePayload)(data.airline, fields, display_fields);
        const res = await this.obj.getGenericAutoComplete(this.obj, 'airline', updatedData);
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
    deleteAirport(id) {
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
    updatePort(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'port', id, data);
    }
    updateAirport(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'airport', id, data);
    }
    updateContainerType(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'airport', id, data);
    }
    updatePackageType(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'package_type', id, data);
    }
    updateDocumentType(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'document_type', id, data);
    }
    updateVehicleType(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'vehicle_type', id, data);
    }
    updateProductType(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'product_type', id, data);
    }
    updateAirline(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'airline', id, data);
    }
    updateShipmentTerms(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'package_type', id, data);
    }
    updateShippingLine(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'shipping_type', id, data);
    }
    updateVessel(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'vessel', id, data);
    }
    updateAWBBlock(id, data) {
        return this.obj.updateGenericCollectionItem(this.obj, 'awb_block', id, data);
    }
}
exports.Setup = Setup;
