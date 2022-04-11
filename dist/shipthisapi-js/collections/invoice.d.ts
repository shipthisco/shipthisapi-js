import { ShipthisAPI } from "../main";
export declare class Invoice {
    obj: ShipthisAPI;
    constructor(obj: any);
    getInvoiceList(): Promise<any>;
    getInvoicItem(objectId: string): Promise<any>;
}
