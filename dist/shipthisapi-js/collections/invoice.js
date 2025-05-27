import { invoiceRequestData } from './request-body.js';
export class Invoice {
    obj;
    constructor(obj) {
        this.obj = obj;
    }
    getInvoiceList() {
        return this.obj.getListGenericCollection(this.obj, 'invoice');
    }
    getInvoicItem(objectId) {
        return this.obj.getOneGenericCollectionItem(this.obj, 'invoice', objectId);
    }
    createInvoice(invoiceData) {
        const exchangeRate = this.obj.getExchangeRateForCurrency(this.obj, invoiceData?.invoice_currency);
        // exchangeRate.data.rate
        const updatedData = { ...invoiceRequestData, ...invoiceData };
        updatedData.exchange_rate = exchangeRate;
        return this.obj.getOneGenericCollectionItem(this.obj, 'invoice', updatedData);
    }
    // update invoice
    updateInvoice(objectId, updatedData) {
        return this.obj.updateGenericCollectionItem(this.obj, 'invoice', objectId, updatedData);
    }
    // delete invoice
    deleteInvoice(objectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'invoice', objectId);
    }
}
