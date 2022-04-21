import { ShipthisAPI } from "../main";
export declare class Shipment {
    obj: ShipthisAPI;
    constructor(obj: any);
    getAllShipment(): Promise<any>;
    getAirShipment(): Promise<any>;
}
