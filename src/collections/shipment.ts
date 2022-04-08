import { ShipthisAPI } from "../main";

export class Shipment {
    public obj: ShipthisAPI;
    constructor(obj) {
        this.obj = obj;
        console.log('this is shipment');
    }
    getAirShipment() {
        return this.obj.getListGenericCollection(this.obj, 'air_shipment')
    }
}