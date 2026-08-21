import { ShipthisAPI } from '../main.js';
import {
  requestAirShipment,
  referencePortPayload,
  referenceCustomerPayload,
  requestSeaShipement,
  requestLandShipment,
  createNewCustomer,
  createNewShipper,
} from './request-body.js';
import { managePayload } from '../utils/commonUtils.js';
import {
  AddNewCustomerData,
  AddNewShipper,
  LoadType,
  RequestAirLoad,
  RequestBulkSeaLoad,
  RequestfclSeaLoad,
  RequestftlLandLoad,
  RequestlclSeaLoad,
  RequestltlLandLoad,
  RequestRoroSeaLoad,
  RequestShipmentItem,
} from '../interfaces/load.interface.js';
import { ConversationPayload } from '../interfaces/conversation.interface.js';
import { CollectionParams } from '../interfaces/collection-params.interface.js';
import {
  AirShipment,
  LandShipment,
  SeaShipment,
} from '../interfaces/collection.interface.js';
export class Shipment {
  public obj: ShipthisAPI;

  constructor(obj: ShipthisAPI) {
    this.obj = obj;
  }

  public getSomeShipments(filter: any) {
    return this.obj.getListGeneric(this.obj, 'shipment_list_all', filter);
  }

  // Read
  public getAllShipments() {
    return this.obj.getListGenericCollection(this.obj, 'shipment_v2');
  }
  public getAllAirFreight() {
    return this.obj.getListGenericCollection(this.obj, 'air_shipment');
  }
  public getAllSeaFreight() {
    return this.obj.getListGenericCollection(this.obj, 'sea_shipment');
  }
  public getAllLandFreight() {
    return this.obj.getListGenericCollection(this.obj, 'land_shipment');
  }

  // Get single shipment with jobid
  public getAirFreight(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj as any,
      'air_shipment',
      ObjectId,
    );
  }
  public getSeaFreight(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj as any,
      'sea_shipment',
      ObjectId,
    );
  }
  public getLandFreight(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj as any,
      'land_shipment',
      ObjectId,
    );
  }

  // Update
  public updateAirFreight(ObjectId: string, updatedData: AirShipment) {
    const Data = { ...requestAirShipment, ...updatedData };
    return this.obj.updateGenericCollectionItem(
      this.obj as any,
      'air_shipment',
      ObjectId,
      Data,
    );
  }
  public updateSeaFreight(ObjectId: string, updatedData: SeaShipment) {
    const Data = { ...requestSeaShipement, ...updatedData };
    return this.obj.updateGenericCollectionItem(
      this.obj as any,
      'sea_shipment',
      ObjectId,
      Data,
    );
  }
  public updateLandFreight(ObjectId: string, updatedData: LandShipment) {
    const Data = { ...requestLandShipment, ...updatedData };
    return this.obj.updateGenericCollectionItem(
      this.obj as any,
      'land_shipment',
      ObjectId,
      Data,
    );
  }

  // Create
  public createAirFreight(data: AirShipment) {
    const Data = { ...requestAirShipment, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj as any,
      'air_shipment',
      Data,
    );
  }

  // create Sea shipment
  public createSeaFreight(data: SeaShipment) {
    const Data = { ...requestSeaShipement, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj as any,
      'sea_shipment',
      Data,
    );
  }
  public createLandFreight(data: LandShipment) {
    const Data = { ...requestLandShipment, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj as any,
      'land_shipment',
      Data,
    );
  }

  // Delete
  public deleteAirFreight(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj as any,
      'air_shipment',
      ObjectId,
    );
  }
  public deleteSeaFreight(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj as any,
      'sea_shipment',
      ObjectId,
    );
  }
  public deleteLandFreight(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj as any,
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
  public async createCustomer(data: AddNewCustomerData) {
    const currency = await this.getCurrency(data.accounting.currency);
    const newCustomerData = { ...createNewCustomer, ...data };
    newCustomerData.accounting.currency = currency.items[0];
    return this.obj.createGenericCollectionItem(
      this.obj as any,
      'customer',
      newCustomerData,
    );
  }

  // create new shipper
  public async createCustomerParty(data: AddNewShipper, id: string) {
    const newCustomerData = { ...createNewShipper, ...data };
    const params = { input_filters: { 'customer._id': `${id}` } };
    return this.obj.createGenericCollectionItem(
      this.obj as any,
      'customer_party',
      newCustomerData,
      params,
    );
  }

  // get all shipment terms
  public getShipmentTerms(data: any) {
    if (!data) {
      return this.obj.getListGenericCollection(this.obj, 'shipment_term', {
        only: 'name,code,order',
        general_filter: {},
      });
    } else {
      const updatedData = managePayload(data);
      return this.obj.getGenericAutoComplete(
        this.obj,
        'shipment_term',
        updatedData,
      );
    }
  }

  // get quotation_reference with filter
  public getQuotationReference(data = null) {
    const updatedData = managePayload(
      data,
      ['quotation_number'] as any,
      ['quotation_number'] as any,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'quotation', updatedData);
  }

  // get master shipment

  public getMasterShipment(data = null) {
    const fields = ['company.name', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const updatedData = managePayload(
      data,
      fields as any,
      display_fields as any,
    );
    return this.obj.getGenericAutoComplete(
      this.obj as any,
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
      data as any,
      fields as any,
      display_fields as any,
      input_filters as any,
    );
    return this.obj.getGenericAutoComplete(
      this.obj as any,
      'customer_party',
      updatedData,
    );
  }
  public getShipper(data = '', id: string) {
    const fields = ['company.name', 'full_address', 'address', 'tin_no'];
    const display_fields = ['company.name'];
    const input_filters = JSON.stringify({ 'customer._id': `${id}` });
    const updatedData = managePayload(
      data as any,
      fields as any,
      display_fields as any,
      input_filters as any,
    );
    return this.obj.getGenericAutoComplete(
      this.obj as any,
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
      data as any,
      fields as any,
      display_fields as any,
      input_filters as any,
    );

    return this.obj.getGenericAutoComplete(
      this.obj as any,
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
      data as any,
      fields as any,
      display_fields as any,
      input_filters as any,
    );
    return this.obj.getGenericAutoComplete(
      this.obj as any,
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
    const updatedData = managePayload(data as any, fields as any, display_fields as any);
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
      data as any,
      fields as any,
      display_fields as any, 
      null,
      general_filters as any,
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
      data as any,
      fields as any,
      display_fields as any, 
      null,
      general_filters as any,
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
    const updatedData = managePayload(data as any);
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
    const updatedData = managePayload(data as any);
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
      data as any,
      fields as any,
      display_fields as any,
      general_filters as any,
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
    const updatedData = managePayload(data as any, fields as any, display_fields as any);
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
    const updatedData = managePayload(data as any, fields as any, display_fields as any);
    return this.obj.getGenericAutoComplete(
      this.obj as any,
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
      data as any,
      fields as any,
      display_fields as any,
      general_filters as any,
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
      data as any,
      fields as any,
      display_fields as any,
      general_filters as any,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }
  public getVehicleType(data = '') {
    const updatedData = managePayload(data as any);
    return this.obj.getGenericAutoComplete(
      this.obj as any,
      'vehicle_type',
      updatedData,
    );
  }

  public async getPackageTypeList(data = ''): Promise<{ items: LoadType[] }> {
    const updatedData = managePayload(data as any);
    return this.obj.getGenericAutoComplete(
      this.obj as any,
      'package_type',
      updatedData,
    );
  }

  public async getPackageType({
    data = '',
  }: {
    data: string;
  }): Promise<LoadType> {
    const updatedData = managePayload(data as any);
    const res = await this.obj.getGenericAutoComplete(
      this.obj as any,
      'package_type',
      updatedData,
    );
    return res.items[0];
  }

  public getContainerType(data = '') {
    const updatedData = managePayload(data as any);
    return this.obj.getGenericAutoComplete(
      this.obj as any,
      'container_type',
      updatedData,
    );
  }

  public getHarzardUnNumber(data = '') {
    const updatedData = managePayload(data as any);
    return this.obj.getGenericAutoComplete(
      this.obj as any,
      'hazard_un_number',
      updatedData,
    );
  }

  public getHarzardClass(data = '') {
    const updatedData = managePayload(data as any);
    return this.obj.getGenericAutoComplete(
      this.obj as any,
      'hazard_class',
      updatedData,
    );
  }
  // public ltloads(data: ltlPackage) {
  //   return this.obj.createGenericCollectionItem(this.obj, 'ltl_load', data);
  // }
  public initiaConversation(data: ConversationPayload) {
    return this.obj.conversation(this.obj, 'conversation', data);
  }

  // Air Load
  public createAirLoad(data: RequestAirLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'air_load', data);
  }

  // Sea FCL load
  public createSeaFclLoad(data: RequestfclSeaLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'fcl_load', data);
  }
  // Sea LCL Load
  public createSeaLclLoad(data: RequestlclSeaLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'lcl_load', data);
  }

  // Sea RORO Load
  public createSeaRoroLoad(data: RequestRoroSeaLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'roro_load', data);
  }

  // Sea Bulk Load
  public createSeaBulkLoad(data: RequestBulkSeaLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'bulk_load', data);
  }

  // Land ftl load
  public createLandFtlLoad(data: RequestftlLandLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'ftl_load', data);
  }

  // Land ltl load
  public createLandltlLoad(data: RequestltlLandLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'ltl_load', data);
  }

  // Land fcl load
  public createLandFclLoad(data: RequestftlLandLoad) {
    return this.obj.createGenericCollectionItem(this.obj, 'fcl_load', data);
  }

  // Shipment Item
  public createShipmentItem(data: RequestShipmentItem) {
    return this.obj.createGenericCollectionItem(
      this.obj,
      'shipment_item',
      data,
    );
  }

  public getShipmentItemList(params?: CollectionParams) {
    return this.obj.getListGenericCollection(
      this.obj,
      'shipment_item',
      params,
    );
  }

  public getShipmentItem(objectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj,
      'shipment_item',
      objectId,
    );
  }

  public updateShipmentItem(
    objectId: string,
    updatedData: Partial<RequestShipmentItem>,
  ) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'shipment_item',
      objectId,
      updatedData,
    );
  }

  public patchShipmentItem(
    objectId: string,
    updateFields: Partial<RequestShipmentItem>,
  ) {
    return this.obj.patchGenericCollectionItem(
      this.obj,
      'shipment_item',
      objectId,
      updateFields,
    );
  }

  public deleteShipmentItem(objectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj as any,
      'shipment_item',
      objectId,
    );
  }
}
