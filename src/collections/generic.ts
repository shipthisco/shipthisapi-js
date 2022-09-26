import {CollectionParams} from "../interfaces/collection-params.interface";
import {ShipthisAPI} from "../main";

/**
 *  GENERIC CRUD
 * @param obj
 * @param collectionName
 * @param params
 * @returns
 */

const getListGenericCollection = async (obj: ShipthisAPI, collectionName, params?: CollectionParams) => {
  if (!params) {
    params = {}
  }
  return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}`, {params});
}

const getOneGenericCollectionItem = async (obj: ShipthisAPI, collectionName, objectId: string) => {
  return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}/${objectId}`);
}

const createGenericCollectionItem = async (obj, collectionName: string, itemData: any) => {
  return obj.internalRequest(obj,
    'POST',
    `/incollection/${collectionName}`,
    {requestData: {reqbody: itemData}}
  )
}

const updateGenericCollectionItem = async (obj, collectionName: string, objectId: string, updatedData: any) => {
  return obj.internalRequest(obj,
    'PUT',
    `/incollection/${collectionName}/${objectId}`,
    {requestData: updatedData}
  );
}

const deleteGenericCollectionItem = async (obj, collectionName: string, objectId: string) => {
  return obj.internalRequest(obj,
    'DELETE',
    `/incollection/${collectionName}/${objectId}`,
  );

}

const getReportView = async (obj, report_name: string, start_date: string, end_date: string, location, output_type = 'json', skip_meta = 'true', post_data: any) => {
  return obj.internalRequest(obj,
    'POST',
    `/report-view/${report_name}`,
    {
      params: {start_date, end_date, output_type, skip_meta, location},
      requestData: post_data
    }
  );
}

export {
  getOneGenericCollectionItem,
  getListGenericCollection,
  createGenericCollectionItem,
  updateGenericCollectionItem,
  deleteGenericCollectionItem,
  getReportView
}
