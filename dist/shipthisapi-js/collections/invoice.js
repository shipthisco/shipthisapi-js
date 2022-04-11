"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
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
}
exports.Invoice = Invoice;
