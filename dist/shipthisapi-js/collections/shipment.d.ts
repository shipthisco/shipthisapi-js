import { ShipthisAPI } from "../main";
export declare class Shipment {
    obj: ShipthisAPI;
    constructor(obj: any);
    getAirShipment(): Promise<any>;
}
