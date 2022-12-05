import { ShipthisAPI } from '../main';
export declare class Invoice {
    obj: ShipthisAPI;
    constructor(obj: any);
    getInvoiceList(): Promise<any>;
    getInvoicItem(objectId: string): Promise<any>;
    createInvoice(invoiceData: any): Promise<any>;
    updateInvoice(objectId: string, updatedData: any): Promise<any>;
    deleteInvoice(objectId: string): Promise<any>;
}
