import {
  RequestAirportType,
  RequestCategories,
  RequestCommonType,
  RequestPortType,
  RequestShipmentTermsType,
  RequestShippingLineType,
  RequestVehicleType,
  RequestVesselType,
} from '../interfaces/api.interface';
import { ShipthisAPI } from '../main';
import {
  requestAirportData,
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
  public getCategoriesType(data: RequestCategories) {
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
}
