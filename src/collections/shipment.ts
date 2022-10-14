import { ShipthisAPI } from '../main';
import {
  requestAirShipment,
  referencePortPayload,
  referenceCustomerPayload,
  // requiredShipmentType,
  // requiredShipmentClass,
  requestSeaShipement,
  requestLandShipment,
  createNewCustomer,
  createNewShipper,
} from './request-body';
import { managePayload } from '../utils/commonUtils';
import {
  AddNewCustomerData,
  AddNewShipper,
  ConversationPayload,
  ltlPackage,
} from '../interfaces/conversation.interface';
import {
  AirShipment,
  LandShipment,
  SeaShipment,
} from '../interfaces/collection.interface';
export class Shipment {
  public obj: ShipthisAPI;

  constructor(obj: ShipthisAPI) {
    this.obj = obj;
  }

  // Read
  public getAllShipments() {
    return this.obj.getListGenericCollection(this.obj, 'shipment_v2');
  }
  public getAirShipments() {
    return this.obj.getListGenericCollection(this.obj, 'air_shipment');
  }
  public getSeaShipments() {
    return this.obj.getListGenericCollection(this.obj, 'sea_shipment');
  }
  public getLandShipments() {
    return this.obj.getListGenericCollection(this.obj, 'land_shipment');
  }

  // Get single shipment with jobid
  public getAirShipment(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj,
      'air_shipment',
      ObjectId,
    );
  }
  public getSeaShipment(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj,
      'sea_shipment',
      ObjectId,
    );
  }
  public getLandShipment(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj,
      'land_shipment',
      ObjectId,
    );
  }

  // Update
  public updateAirShipment(ObjectId: string, updatedData: AirShipment) {
    const Data = { ...requestAirShipment, ...updatedData };
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'air_shipment',
      ObjectId,
      Data,
    );
  }
  public updateSeaShipment(ObjectId: string, updatedData: SeaShipment) {
    const Data = { ...requestSeaShipement, ...updatedData };
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'sea_shipment',
      ObjectId,
      Data,
    );
  }
  public updateLandShipment(ObjectId: string, updatedData: LandShipment) {
    const Data = { ...requestLandShipment, ...updatedData };
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'land_shipment',
      ObjectId,
      Data,
    );
  }

  // Create
  public createAirShipment(data: AirShipment) {
    const Data = { ...requestAirShipment, ...data };
    return this.obj.createGenericCollectionItem(this.obj, 'air_shipment', Data);
  }

  // create Sea shipment
  public createSeaShipment(data: SeaShipment) {
    const Data = { ...requestSeaShipement, ...data };
    return this.obj.createGenericCollectionItem(this.obj, 'sea_shipment', Data);
  }
  public createLandShipment(data: LandShipment) {
    const Data = { ...requestLandShipment, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'land_shipment',
      Data,
    );
  }

  // Delete
  public deleteAirShipment(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj,
      'air_shipment',
      ObjectId,
    );
  }
  public deleteSeaShipment(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj,
      'sea_shipment',
      ObjectId,
    );
  }
  public deleteLandShipment(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj,
      'land_shipment',
      ObjectId,
    );
  }

  // Miscellaneous Fuctions
  // based on the user input filter the port
  // for the filter
  public getAirPort(data = '') {
    const updatedData = { ...referencePortPayload };
    updatedData.filter_txt = data;
    return this.obj.getGenericAutoComplete(this.obj, 'airport', updatedData);
  }

  // get customer list
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/customer?location=new_york
  public getCustomers(data = '') {
    const updatedData = { ...referenceCustomerPayload };
    updatedData.filter_txt = data;
    return this.obj.getGenericAutoComplete(this.obj, 'customer', updatedData);
  }

  // create or add new customer
  public async addNewCustomer(data: AddNewCustomerData) {
    const currency = await this.getCurrency(data.accounting.currency);
    const newCustomerData = { ...createNewCustomer, ...data };
    newCustomerData.accounting.currency = currency.items[0];
    return this.obj.createGenericCollectionItem(
      this.obj,
      'customer',
      newCustomerData,
    );
  }

  // create new shipper
  public async createCustomerParty(data: AddNewShipper, id: string) {
    const newCustomerData = { ...createNewShipper, ...data };
    const params = { input_filters: { 'customer._id': `${id}` } };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'customer_party',
      newCustomerData,
      params,
    );
  }

  // get all shipment terms
  public getAllShipmentTerms() {
    return this.obj.getListGenericCollection(this.obj, 'shipment_term', {
      only: 'name,code,order',
      general_filter: {},
    });
  }

  // get single shipment term
  public getShipmentTerms(data = '') {
    const updatedData = managePayload(data);
    return this.obj.getGenericAutoComplete(
      this.obj,
      'shipment_term',
      updatedData,
    );
  }

  // get quotation_reference
  public getQuotationReference(data = null) {
    const updatedData = managePayload(
      data,
      ['quotation_number'],
      ['quotation_number'],
    );
    return this.obj.getGenericAutoComplete(this.obj, 'quotation', updatedData);
  }

  // get master shipment

  public getMasterShipment(data = null) {
    const fields = ['company.name', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const updatedData = managePayload(data, fields, display_fields);
    return this.obj.getGenericAutoComplete(
      this.obj,
      'sea_shipment',
      updatedData,
    );
  }

  // get Shipper Name and Consignee
  // id of the shipper
  public getConsignee(data = '', id: string) {
    const fields = [
      'company.name',
      'full_address',
      'address',
      'tin_no',
      'company.phone',
    ];
    const display_fields = ['company.name'];
    const input_filters = JSON.stringify({ 'customer._id': `${id}` });
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      input_filters,
    );
    return this.obj.getGenericAutoComplete(
      this.obj,
      'customer_party',
      updatedData,
    );
  }
  public getShipper(data = '', id: string) {
    const fields = ['company.name', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const input_filters = JSON.stringify({ 'customer._id': `${id}` });
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      input_filters,
    );
    return this.obj.getGenericAutoComplete(
      this.obj,
      'customer_party',
      updatedData,
    );
  }
  // get pickup name
  public getPickUpNDelivery(data = '', id: string) {
    const fields = ['full_address', 'address', 'company', 'tin_no'];
    const display_fields = ['company.name'];
    const input_filters = JSON.stringify({ 'customer._id': `${id}` });
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      input_filters,
    );

    return this.obj.getGenericAutoComplete(
      this.obj,
      'customer_party',
      updatedData,
    );
  }

  // get notify party and also for also notify party
  public getNotifyParty(data = '', id: string) {
    const fields = ['company.name', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const input_filters = JSON.stringify({ 'customer._id': `${id}` });
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      input_filters,
    );
    return this.obj.getGenericAutoComplete(
      this.obj,
      'customer_party',
      updatedData,
    );
  }

  // get location with google
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/thirdparty/search-place-autocomplete?query-level=undefined&query=d
  public getGoogleLocation(data = '') {
    return this.obj.getLocation(this.obj, 'search-place-autocomplete', {
      query_level: undefined,
      query: data,
    });
  }

  public selectGoogleLocations(placeId: string, description: string) {
    return this.obj.selectGoogleLocation(this.obj, 'search-place', {
      placeId,
      description,
    });
  }

  // get forwording Agent Name
  public getForwordingAgent(data = '') {
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
  public getConsolidator(data = '') {
    const fields = ['company.name', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const general_filters = JSON.stringify({
      'company.vendor_type': 'consolidator',
    });
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      null,
      general_filters,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }

  // get place of consolidation
  public getPlaceOfConsolidation(data = '') {
    const fields = ['company.name', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const general_filters =
      '{\n    "company.vendor_type":"place_of_consolidation"\n}';
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      null,
      general_filters,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }

  // get All the operation_executive and sales executive
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/employee?&only=_id,name&general_filter={}
  public getAllOperationExecutive() {
    return this.obj.getListGenericCollection(this.obj, 'employee', {
      only: '_id,name',
      general_filter: {},
    });
  }

  public getOperationExecutive(data = '') {
    const updatedData = managePayload(data);
    return this.obj.getGenericAutoComplete(this.obj, 'employee', updatedData);
  }

  // get airline name
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/airline?&only=name,cbsa_code,prefix_code&general_filter={}
  public getAirlineName() {
    return this.obj.getListGenericCollection(this.obj, 'airline', {
      only: 'name,cbsa_code,prefix_code',
      general_filter: {},
    });
  }

  // get currency
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/currency?&only=_id,name&general_filter={}
  public getAllCurrency() {
    return this.obj.getListGenericCollection(this.obj, 'currency', {
      only: 'name',
      general_filter: {},
    });
  }
  // get single currency
  public getCurrency(data = '') {
    const updatedData = managePayload(data);
    return this.obj.getGenericAutoComplete(this.obj, 'currency', updatedData);
  }
  // get cartage By and custom clearance by
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/vendor?location=new_york
  public CartageByAndCustomClearance(data = '') {
    const fields = ['company', 'address', 'primary_contact_person'];
    const display_fields = ['company.name'];
    const general_filters =
      '{\n    "company.vendor_type":"place_of_consolidation"\n}';
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      general_filters,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }

  // get Product type for sea
  public getProductType() {
    return this.obj.getListGenericCollection(this.obj, 'product_type', {
      only: '_id,name',
      general_filter: {},
    });
  }

  // get airline name
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/shipping_line?&only=name,carrier_code,cbsa_code,shipthis_code&general_filter={}&location=new_york&region_override=null
  public getShippingLineName() {
    return this.obj.getListGenericCollection(this.obj, 'shipping_line', {
      only: 'name,carrier_code,cbsa_code,shipthis_code',
      general_filter: {},
    });
  }

  // get vessel name
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/vessel?location=new_york
  public getVesselName(data = '') {
    const fields = ['_id', 'name'];
    const display_fields = ['name'];
    const updatedData = managePayload(data, fields, display_fields);
    return this.obj.getGenericAutoComplete(this.obj, 'vessel', updatedData);
  }

  public getSeaPort(data = '') {
    const updatedData = { ...referencePortPayload };
    updatedData.filter_txt = data;
    return this.obj.getGenericAutoComplete(this.obj, 'sea', updatedData);
  }

  // get pickup and delivery place both same
  public getPickup(data = '') {
    const fields = ['company', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const updatedData = managePayload(data, fields, display_fields);
    return this.obj.getGenericAutoComplete(
      this.obj,
      'customer_party',
      updatedData,
    );
  }

  // get custom clearance
  public getCustomClearance(data = '') {
    const fields = [
      'company.name',
      'full_address',
      'address',
      'tin_no',
      'company.vendor_type',
    ];
    const display_fields = ['company.name'];
    const general_filters = '{\n    "company.vendor_type":"customs_agent"\n}';
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      general_filters,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }

  // land shipments
  // get Carrier
  public getLandCarrier(data = '') {
    const fields = [
      'company',
      'address',
      'primary_contact_person',
      'full_address',
    ];
    const display_fields = ['company.name'];
    const general_filters = '{"company.vendor_type":"carrier"}';
    const updatedData = managePayload(
      data,
      fields,
      display_fields,
      general_filters,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }
  public getVehicleType(data) {
    const updatedData = managePayload(data);
    return this.obj.getGenericAutoComplete(
      this.obj,
      'vehicle_type',
      updatedData,
    );
  }
  public getPackageType(data) {
    const updatedData = managePayload(data);
    return this.obj.getGenericAutoComplete(
      this.obj,
      'package_type',
      updatedData,
    );
  }
  public ltloads(data: ltlPackage) {
    return this.obj.createGenericCollectionItem(this.obj, 'ltl_load', data);
  }
  public initiaConversation(data: ConversationPayload) {
    return this.obj.conversation(this.obj, 'conversation', data);
  }
}
