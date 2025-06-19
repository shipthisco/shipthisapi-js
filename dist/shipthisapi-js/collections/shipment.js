import { requestAirShipment, referencePortPayload, referenceCustomerPayload, requestSeaShipement, requestLandShipment, createNewCustomer, createNewShipper, } from './request-body.js';
import { managePayload } from '../utils/commonUtils.js';
export class Shipment {
    obj;
    constructor(obj) {
        this.obj = obj;
    }
    getSomeShipments(filter) {
        return this.obj.getListGeneric(this.obj, 'shipment_list_all', filter);
    }
    // Read
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
    // Get single shipment with jobid
    getAirFreight(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
    }
    getSeaFreight(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
    }
    getLandFreight(ObjectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'land_shipment', ObjectId);
    }
    // Update
    updateAirFreight(ObjectId, updatedData) {
        const Data = { ...requestAirShipment, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'air_shipment', ObjectId, Data);
    }
    updateSeaFreight(ObjectId, updatedData) {
        const Data = { ...requestSeaShipement, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'sea_shipment', ObjectId, Data);
    }
    updateLandFreight(ObjectId, updatedData) {
        const Data = { ...requestLandShipment, ...updatedData };
        return this.obj.updateGenericCollectionItem(this.obj, 'land_shipment', ObjectId, Data);
    }
    // Create
    createAirFreight(data) {
        const Data = { ...requestAirShipment, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'air_shipment', Data);
    }
    // create Sea shipment
    createSeaFreight(data) {
        const Data = { ...requestSeaShipement, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'sea_shipment', Data);
    }
    createLandFreight(data) {
        const Data = { ...requestLandShipment, ...data };
        return this.obj.createGenericCollectionItem(this.obj, 'land_shipment', Data);
    }
    // Delete
    deleteAirFreight(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
    }
    deleteSeaFreight(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
    }
    deleteLandFreight(ObjectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'land_shipment', ObjectId);
    }
    // Miscellaneous Fuctions
    // based on the user input filter the port
    // for the filter
    getAirPort(data = '') {
        const updatedData = { ...referencePortPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'airport', updatedData);
    }
    // get customer list
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/customer?location=new_york
    getCustomers(data = '') {
        const updatedData = { ...referenceCustomerPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'customer', updatedData);
    }
    // create or add new customer
    async createCustomer(data) {
        const currency = await this.getCurrency(data.accounting.currency);
        const newCustomerData = { ...createNewCustomer, ...data };
        newCustomerData.accounting.currency = currency.items[0];
        return this.obj.createGenericCollectionItem(this.obj, 'customer', newCustomerData);
    }
    // create new shipper
    async createCustomerParty(data, id) {
        const newCustomerData = { ...createNewShipper, ...data };
        const params = { input_filters: { 'customer._id': `${id}` } };
        return this.obj.createGenericCollectionItem(this.obj, 'customer_party', newCustomerData, params);
    }
    // get all shipment terms
    getShipmentTerms(data) {
        if (!data) {
            return this.obj.getListGenericCollection(this.obj, 'shipment_term', {
                only: 'name,code,order',
                general_filter: {},
            });
        }
        else {
            const updatedData = managePayload(data);
            return this.obj.getGenericAutoComplete(this.obj, 'shipment_term', updatedData);
        }
    }
    // get quotation_reference with filter
    getQuotationReference(data = null) {
        const updatedData = managePayload(data, ['quotation_number'], ['quotation_number']);
        return this.obj.getGenericAutoComplete(this.obj, 'quotation', updatedData);
    }
    // get master shipment
    getMasterShipment(data = null) {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const updatedData = managePayload(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'sea_shipment', updatedData);
    }
    // get Shipper Name and Consignee
    // id of the shipper
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
        const updatedData = managePayload(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    getShipper(data = '', id) {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const input_filters = JSON.stringify({ 'customer._id': `${id}` });
        const updatedData = managePayload(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    // get pickup name
    getPickUpNDelivery(data = '', id) {
        const fields = ['full_address', 'address', 'company', 'tin_no'];
        const display_fields = ['company.name'];
        const input_filters = JSON.stringify({ 'customer._id': `${id}` });
        const updatedData = managePayload(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    // get notify party and also for also notify party
    getNotifyParty(data = '', id) {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const input_filters = JSON.stringify({ 'customer._id': `${id}` });
        const updatedData = managePayload(data, fields, display_fields, input_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    // get location with google
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/thirdparty/search-place-autocomplete?query-level=undefined&query=d
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
    // get forwording Agent Name
    getForwordingAgent(data = '') {
        const fields = [
            'full_address',
            'address',
            'company',
            'primary_contact_person',
            'tin_no',
        ];
        const display_fields = ['company.name'];
        const updatedData = managePayload(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    // get consolidator
    getConsolidator(data = '') {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const general_filters = JSON.stringify({
            'company.vendor_type': 'consolidator',
        });
        const updatedData = managePayload(data, fields, display_fields, null, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    // get place of consolidation
    getPlaceOfConsolidation(data = '') {
        const fields = ['company.name', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const general_filters = '{\n    "company.vendor_type":"place_of_consolidation"\n}';
        const updatedData = managePayload(data, fields, display_fields, null, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    // get All the operation_executive and sales executive
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/employee?&only=_id,name&general_filter={}
    getAllOperationExecutive() {
        return this.obj.getListGenericCollection(this.obj, 'employee', {
            only: '_id,name',
            general_filter: {},
        });
    }
    getOperationExecutive(data = '') {
        const updatedData = managePayload(data);
        return this.obj.getGenericAutoComplete(this.obj, 'employee', updatedData);
    }
    // get airline name
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/airline?&only=name,cbsa_code,prefix_code&general_filter={}
    getAirlineName() {
        return this.obj.getListGenericCollection(this.obj, 'airline', {
            only: 'name,cbsa_code,prefix_code',
            general_filter: {},
        });
    }
    // get currency
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/currency?&only=_id,name&general_filter={}
    getAllCurrency() {
        return this.obj.getListGenericCollection(this.obj, 'currency', {
            only: 'name',
            general_filter: {},
        });
    }
    // get single currency
    getCurrency(data = '') {
        const updatedData = managePayload(data);
        return this.obj.getGenericAutoComplete(this.obj, 'currency', updatedData);
    }
    // get cartage By and custom clearance by
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/vendor?location=new_york
    CartageByAndCustomClearance(data = '') {
        const fields = ['company', 'address', 'primary_contact_person'];
        const display_fields = ['company.name'];
        const general_filters = '{\n    "company.vendor_type":"place_of_consolidation"\n}';
        const updatedData = managePayload(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    // get Product type for sea
    getProductType() {
        return this.obj.getListGenericCollection(this.obj, 'product_type', {
            only: '_id,name',
            general_filter: {},
        });
    }
    // get airline name
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/shipping_line?&only=name,carrier_code,cbsa_code,shipthis_code&general_filter={}&location=new_york&region_override=null
    getShippingLineName() {
        return this.obj.getListGenericCollection(this.obj, 'shipping_line', {
            only: 'name,carrier_code,cbsa_code,shipthis_code',
            general_filter: {},
        });
    }
    // get vessel name
    // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/vessel?location=new_york
    getVesselName(data = '') {
        const fields = ['_id', 'name'];
        const display_fields = ['name'];
        const updatedData = managePayload(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'vessel', updatedData);
    }
    getSeaPort(data = '') {
        const updatedData = { ...referencePortPayload };
        updatedData.filter_txt = data;
        return this.obj.getGenericAutoComplete(this.obj, 'sea', updatedData);
    }
    // get pickup and delivery place both same
    getPickup(data = '') {
        const fields = ['company', 'full_address', 'address', 'tin_no'];
        const display_fields = ['company.name'];
        const updatedData = managePayload(data, fields, display_fields);
        return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
    }
    // get custom clearance
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
        const updatedData = managePayload(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    // land shipments
    // get Carrier
    getLandCarrier(data = '') {
        const fields = [
            'company',
            'address',
            'primary_contact_person',
            'full_address',
        ];
        const display_fields = ['company.name'];
        const general_filters = '{"company.vendor_type":"carrier"}';
        const updatedData = managePayload(data, fields, display_fields, general_filters);
        return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }
    getVehicleType(data = '') {
        const updatedData = managePayload(data);
        return this.obj.getGenericAutoComplete(this.obj, 'vehicle_type', updatedData);
    }
    async getPackageTypeList(data = '') {
        const updatedData = managePayload(data);
        return this.obj.getGenericAutoComplete(this.obj, 'package_type', updatedData);
    }
    async getPackageType({ data = '', }) {
        const updatedData = managePayload(data);
        const res = await this.obj.getGenericAutoComplete(this.obj, 'package_type', updatedData);
        return res.items[0];
    }
    getContainerType(data = '') {
        const updatedData = managePayload(data);
        return this.obj.getGenericAutoComplete(this.obj, 'container_type', updatedData);
    }
    getHarzardUnNumber(data = '') {
        const updatedData = managePayload(data);
        return this.obj.getGenericAutoComplete(this.obj, 'hazard_un_number', updatedData);
    }
    getHarzardClass(data = '') {
        const updatedData = managePayload(data);
        return this.obj.getGenericAutoComplete(this.obj, 'hazard_class', updatedData);
    }
    // public ltloads(data: ltlPackage) {
    //   return this.obj.createGenericCollectionItem(this.obj, 'ltl_load', data);
    // }
    initiaConversation(data) {
        return this.obj.conversation(this.obj, 'conversation', data);
    }
    // Air Load
    createAirLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'air_load', data);
    }
    // Sea FCL load
    createSeaFclLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'fcl_load', data);
    }
    // Sea LCL Load
    createSeaLclLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'lcl_load', data);
    }
    // Sea RORO Load
    createSeaRoroLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'roro_load', data);
    }
    // Sea Bulk Load
    createSeaBulkLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'bulk_load', data);
    }
    // Land ftl load
    createLandFtlLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'ftl_load', data);
    }
    // Land ltl load
    createLandltlLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'ltl_load', data);
    }
    // Land fcl load
    createLandFclLoad(data) {
        return this.obj.createGenericCollectionItem(this.obj, 'fcl_load', data);
    }
}
