import { RequestQuotationType } from '../interfaces/quotation.interface.js';
import { ShipthisAPI } from '../main.js';
import { quotationObj } from './request-body.js';

export class Quotation {
  public obj: ShipthisAPI;

  constructor(obj: ShipthisAPI) {
    this.obj = obj;
  }

  // get all Quotation List
  public getAllQuotation() {
    return this.obj.getListGenericCollection(this.obj, 'quotation');
  }

  // get single quotation
  public getQuotation(objectId: string) {
    return this.obj.getOneGenericCollectionItem(
      this.obj,
      'quotation',
      objectId,
    );
  }
  // create Quotation
  public createQuotation(data: RequestQuotationType) {
    const updatedData = { ...quotationObj, data };
    return this.obj.createGenericCollectionItem(
      this.obj,
      'quotation',
      updatedData,
    );
  }

  // Delete Quotation
  public deleteQuotation(objectId: string) {
    return this.obj.deleteGenericCollectionItem(
      this.obj as any,
      'quotation',
      objectId,
    );
  }
}
