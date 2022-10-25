import {
  RequestAirportType,
  RequestAWBType,
  RequestContainerType,
  RequestCommonType,
  RequestPortType,
  RequestShipmentTermsType,
  RequestShippingLineType,
  RequestVehicleType,
  RequestVesselType,
} from '../interfaces/api.interface';
import { ShipthisAPI } from '../main';
import { managePayload } from '../utils/commonUtils';
import {
  requestAirportData,
  requestAWBData,
  requestCatData,
  requestCommonData,
  requestPortData,
  requestShipmentTermsData,
  requestShippingLine,
  requestVehicleData,
  requestVesselData,
} from './request.setup';

export class Setup {
  public obj: ShipthisAPI;

  constructor(obj: ShipthisAPI) {
    this.obj = obj;
  }
  public getCategoriesType(data: RequestContainerType) {
    const updatedData = { requestCatData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'container_type',
      updatedData,
    );
  }
  public getPackageType(data: RequestCommonType) {
    const updatedData = { requestCommonData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'package_type',
      updatedData,
    );
  }

  public getDocumentType(data: RequestCommonType) {
    const updatedData = { requestCommonData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'documentation_kind',
      updatedData,
    );
  }

  public getVehicleType(data: RequestVehicleType) {
    const updatedData = { requestVehicleData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'vehicle_type',
      updatedData,
    );
  }

  public getProductType(data: RequestCommonType) {
    const updatedData = { requestCommonData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'product_type',
      updatedData,
    );
  }

  public getAirline(data: RequestCommonType) {
    const updatedData = { requestCommonData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'airline',
      updatedData,
    );
  }

  public async getPort(data: RequestPortType) {
    const location = await this.obj.Shipment.getGoogleLocation(
      data.location.bold,
    );
    const selectLocation = await this.obj.Shipment.selectGoogleLocations(
      location.items[0].place_id,
      location.items[0].description,
    );
    const updatedData = { requestPortData, ...data, selectLocation };
    return this.obj.createGenericCollectionItem(this.obj, 'port', updatedData);
  }

  public async getAirport(data: RequestAirportType) {
    const location = await this.obj.Shipment.getGoogleLocation(
      data.location.bold,
    );
    const selectLocation = await this.obj.Shipment.selectGoogleLocations(
      location.items[0].place_id,
      location.items[0].description,
    );
    const updatedData = { requestAirportData, ...data, selectLocation };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'airport',
      updatedData,
    );
  }

  public getshipmentTerms(data: RequestShipmentTermsType) {
    const updatedData = { requestShipmentTermsData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'shipment_term',
      updatedData,
    );
  }

  public async getshippingLine(data: RequestShippingLineType) {
    const updatedData = { requestShippingLine, ...data };
    const location = await this.obj.Shipment.getGoogleLocation(data.address);
    const selectLocation = await this.obj.Shipment.selectGoogleLocations(
      location.items[0].place_id,
      location.items[0].description,
    );
    updatedData.address.city = selectLocation;
    return this.obj.createGenericCollectionItem(
      this.obj,
      'shipping_line',
      updatedData,
    );
  }

  public async getVessel(data: RequestVesselType) {
    const updatedData = { requestVesselData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'vessel',
      updatedData,
    );
  }

  public async getAWBBlock(data: RequestAWBType) {
    const fields = ['name', 'code'];
    const display_fields = ['name'];
    const updatedData = managePayload(
      data.airline as string,
      fields,
      display_fields,
    );
    const res = await this.obj.getGenericAutoComplete(
      this.obj,
      'airline',
      updatedData,
    );
    console.log(res);
    data.airline = res.items[0];
    const injectableDate = { requestAWBData, ...data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'awb_block',
      injectableDate,
    );
  }

  // delete Operation
  private deleteOperation(id: string, collectionName: string) {
    return this.obj.deleteGenericCollectionItem(this.obj, collectionName, id);
  }

  public deletePort(id: string) {
    return this.deleteOperation(id, 'port');
  }

  public deleteAirPort(id: string) {
    return this.deleteOperation(id, 'airport');
  }

  public deleteContainersType(id: string) {
    return this.deleteOperation(id, 'container_type');
  }

  public deletePackageType(id: string) {
    return this.deleteOperation(id, 'package_type');
  }

  public deleteDocumentKind(id: string) {
    return this.deleteOperation(id, 'document_kind');
  }

  public deleteVehicleType(id: string) {
    return this.deleteOperation(id, 'vehicle_type');
  }

  public deleteProductType(id: string) {
    return this.deleteOperation(id, 'product_type');
  }

  public deleteAirline(id: string) {
    return this.deleteOperation(id, 'airline');
  }

  public deleteShipmentTerms(id: string) {
    return this.deleteOperation(id, 'shipment_term');
  }

  public deleteShippingLine(id: string) {
    return this.deleteOperation(id, 'shipping_line');
  }

  public deleteVessel(id: string) {
    return this.deleteOperation(id, 'vessel');
  }

  public deleteAWBBlock(id: string) {
    return this.deleteOperation(id, 'awb_block');
  }

  // update operations
  public updatePort(id: string, data: RequestPortType) {
    return this.obj.updateGenericCollectionItem(this.obj, 'port', id, data);
  }

  public updateAirport(id: string, data: RequestAirportType) {
    return this.obj.updateGenericCollectionItem(this.obj, 'airport', id, data);
  }

  public updateContainerType(id: string, data: RequestContainerType) {
    return this.obj.updateGenericCollectionItem(this.obj, 'airport', id, data);
  }

  public updatePackageType(id: string, data: RequestCommonType) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'package_type',
      id,
      data,
    );
  }

  public updateDocumentType(id: string, data: RequestCommonType) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'document_type',
      id,
      data,
    );
  }

  public updateVehicleType(id: string, data: RequestVehicleType) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'vehicle_type',
      id,
      data,
    );
  }

  public updateProductType(id: string, data: RequestCommonType) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'product_type',
      id,
      data,
    );
  }

  public updateAirline(id: string, data: RequestCommonType) {
    return this.obj.updateGenericCollectionItem(this.obj, 'airline', id, data);
  }

  public updateShipmentTerms(id: string, data: RequestShipmentTermsType) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'package_type',
      id,
      data,
    );
  }

  public updateShippingLine(id: string, data: RequestShippingLineType) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'shipping_type',
      id,
      data,
    );
  }

  public updateVessel(id: string, data: RequestVesselType) {
    return this.obj.updateGenericCollectionItem(this.obj, 'vessel', id, data);
  }

  public updateAWBBlock(id: string, data: RequestAWBType) {
    return this.obj.updateGenericCollectionItem(
      this.obj,
      'awb_block',
      id,
      data,
    );
  }
}
