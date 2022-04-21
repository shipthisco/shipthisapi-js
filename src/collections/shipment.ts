import { ShipthisAPI } from "../main";

export class Shipment {
  public obj: ShipthisAPI;


  constructor(obj) {
    this.obj = obj;
  }

  public getAllShipment() {
    return this.obj.getListGenericCollection(this.obj, 'shipment_v2');
  }

  public getAirShipment() {
    return this.obj.getListGenericCollection(this.obj, 'air_shipment')
  }
}
