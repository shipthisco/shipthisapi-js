import { ShipthisAPI } from "../main";
import {invoiceRequestData} from "./request-body"

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
    createInvoice(invoiceData : any) {
        const exchangeRate = this.obj.getExchangeRateForCurrency(this.obj, invoiceData?.invoice_currency)
        // exchangeRate.data.rate
        const updatedData = {...invoiceRequestData, ...invoiceData}
        updatedData.exchange_rate = exchangeRate
        return this.obj.getOneGenericCollectionItem(this.obj, 'invoice', updatedData);
    }

    // update invoice
    updateInvoice(objectId: string, updatedData : any) {
        return this.obj.updateGenericCollectionItem(this.obj, 'invoice', objectId, updatedData);
    }
    // delete invoice
    deleteInvoice(objectId: string) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'invoice', objectId);
    }

    
}