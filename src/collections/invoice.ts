import { ShipthisAPI } from "../main";

export class Invoice {
    public obj: ShipthisAPI;
    constructor(obj) {
        this.obj = obj;
    }
    getInvoiceList() {
        return this.obj.getListGenericCollection(this.obj, 'invoice')
    }
    getInvoicItem(objectId: string) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'invoice', objectId);
    }
}