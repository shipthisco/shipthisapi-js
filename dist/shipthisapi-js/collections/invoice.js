"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const request_body_1 = require("./request-body");
class Invoice {
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
        const updatedData = { ...request_body_1.invoiceRequestData, ...invoiceData };
        updatedData.exchange_rate = exchangeRate;
        return this.obj.getOneGenericCollectionItem(this.obj, 'invoice', updatedData);
    }
    updateInvoice(objectId, updatedData) {
        return this.obj.updateGenericCollectionItem(this.obj, 'invoice', objectId, updatedData);
    }
    deleteInvoice(objectId) {
        return this.obj.deleteGenericCollectionItem(this.obj, 'invoice', objectId);
    }
}
exports.Invoice = Invoice;
