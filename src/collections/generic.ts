import { CollectionParams } from "../interfaces/collection-params.interface";
import { ShipthisAPI } from "../main";

/**
 *  GENERIC CRUD
 * @param obj
 * @param collectionName
 * @param params
 * @returns
 */

const getListGenericCollection = async(obj: ShipthisAPI, collectionName: string, params?: CollectionParams) => {
  if (!params) {
    params = {}
  }
  return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}`, {params});
}

const getOneGenericCollectionItem = async(obj: ShipthisAPI, collectionName: string, objectId: string) => {
  return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}/${objectId}`);
}

const createGenericCollectionItem = async(obj: ShipthisAPI, collectionName: string, itemData: any) => {
  return obj.internalRequest(obj,
    'POST',
    `/incollection/${collectionName}`,
    {requestData: {reqbody: itemData}}
  )
}

const updateGenericCollectionItem = async(obj: ShipthisAPI, collectionName: string, objectId: string, updatedData: any) => {
  return obj.internalRequest(obj,
    'PUT',
    `/incollection/${collectionName}/${objectId}`,
    {requestData: updatedData}
  );
}

const deleteGenericCollectionItem = async(obj: ShipthisAPI, collectionName: string, objectId: string) => {
  return obj.internalRequest(obj,
    'DELETE',
    `/incollection/${collectionName}/${objectId}`,
  );
}

// get the exchange rate for currencies in Invoice
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/thirdparty/currency?source=EUR&target=USD&date=1662508800000
const getExchangeRateForCurrency = async(obj : ShipthisAPI, currency: string) => {
  return obj.internalRequest(obj, 'GET',  `thirdparty/currency?source=${currency}&target=USD&date=${new Date().getTime()}`)
}

// get the port of landing and discharge for shipments
const getGenericAutoComplete = async(obj : ShipthisAPI, referenceName: string, data: any) => {
  return obj.internalRequest(obj, 'POST', `autocomplete-reference/${referenceName}`, {requestData: data})
}

const getLocation = async(obj: ShipthisAPI, collectionName: string, params?: CollectionParams) => {
  if (!params) {
    params = {}
  }
  return obj.internalRequest(obj, 'GET', `thirdparty/${collectionName}`, {params});
}

export {
  getOneGenericCollectionItem,
  getListGenericCollection,
  createGenericCollectionItem,
  updateGenericCollectionItem,
  deleteGenericCollectionItem,
  getExchangeRateForCurrency,
  getGenericAutoComplete,
  getLocation
}
