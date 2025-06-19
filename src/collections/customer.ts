import {
  RequestCustomerSegmentType,
  RequestCustomerType,
} from '../interfaces/customer.interface.js';
import { ShipthisAPI } from '../main.js';
import { managePayload } from '../utils/commonUtils.js';
import { createGenericCollectionItem } from './generic.js';

export class Customer {
  public obj: ShipthisAPI;

  constructor(obj: ShipthisAPI) {
    this.obj = obj;
  }

  public getAllCustomers() {
    return this.obj.getListGenericCollection(this.obj, 'customer');
  }

  public getCustomer(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(this.obj, '', ObjectId);
  }

  public createCustomer(data: RequestCustomerType) {
    return this.obj.createGenericCollectionItem(
      this.obj as any,
      'customer',
      data,
    );
  }

  public deleteCustomer(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(this.obj as any, '', ObjectId);
  }

  // get all customer Segment
  public getAllCustomerSegment() {
    return this.obj.getListGenericCollection(this.obj, 'customer_segment');
  }

  // add new customer segment
  public createCustomerSegment(data: RequestCustomerSegmentType) {
    return createGenericCollectionItem(this.obj, 'customer_segment', data);
    // return this.obj.createGenericCollectionItem(
    //   this.obj,
    //   'customer_segment',
    //   data,
    // );
  }

  public getLinkedVendor(data = '') {
    const fields = ['company'];
    const display_fields = ['company.name'];
    const updatedData = managePayload(data, fields, display_fields);
    return this.obj.getGenericAutoComplete(this.obj, 'employee', updatedData);
  }

  public getCustomerSupport(data = '') {
    const fields = ['name', 'roles'];
    const display_fields = ['name'];
    const general_filters =
      '{"roles.name":{"$in":["operations","front_desk","pricing","operations_head"]}}';
    const updatedData = managePayload(
      data as any,
      fields as any,
      display_fields as any,
      undefined,
      general_filters as any,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'employee', updatedData);
  }

  public getPaymentTerm(data = '') {
    const fields = ['name', 'order', 'no_of_days', 'start_from_end_of_month'];
    const display_fields = ['name'];
    const updatedData = managePayload(
      data as any,
      fields as any,
      display_fields as any,
    );
    return this.obj.getGenericAutoComplete(this.obj, 'employee', updatedData);
  }
}
