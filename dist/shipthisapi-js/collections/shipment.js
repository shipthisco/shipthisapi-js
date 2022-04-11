"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipment = void 0;
class Shipment {
    constructor(obj) {
        this.obj = obj;
        console.log('this is shipment');
    }
    getAirShipment() {
        return this.obj.getListGenericCollection(this.obj, 'air_shipment');
    }
}
exports.Shipment = Shipment;
