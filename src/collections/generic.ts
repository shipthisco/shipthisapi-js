import {
  CollectionParams,
  SelectGoogleLocationParams,
} from '../interfaces/collection-params.interface';
import { ShipthisAPI } from '../main';

/**
 *  GENERIC CRUD
 * @param obj
 * @param collectionName
 * @param params
 * @returns
 */

const getListGenericCollection = async (
  obj: ShipthisAPI,
  collectionName,
  params?: CollectionParams,
) => {
  if (!params) {
    params = {};
  }
  return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}`, {
    params,
  });
};

const getOneGenericCollectionItem = async (
  obj: ShipthisAPI,
  collectionName,
  objectId: string,
) => {
  return obj.internalRequest(
    obj,
    'GET',
    `/incollection/${collectionName}/${objectId}`,
  );
};

const createGenericCollectionItem = async (
  obj,
  collectionName: string,
  itemData: any,
  params?: CollectionParams,
) => {
  if (!params) {
    params = {};
  }
  return obj.internalRequest(obj, 'POST', `/incollection/${collectionName}`, {
    requestData: { reqbody: itemData },
    params,
  });
};

const updateGenericCollectionItem = async (
  obj,
  collectionName: string,
  objectId: string,
  updatedData: any,
) => {
  return obj.internalRequest(
    obj,
    'PUT',
    `/incollection/${collectionName}/${objectId}`,
    { requestData: updatedData },
  );
};

// get the exchange rate for currencies in Invoice
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/thirdparty/currency?source=EUR&target=USD&date=1662508800000
const getExchangeRateForCurrency = async (
  obj: ShipthisAPI,
  currency: string,
) => {
  return obj.internalRequest(
    obj,
    'GET',
    `thirdparty/currency?source=${currency}&target=USD&date=${new Date().getTime()}`,
  );
};

// get the port of landing and discharge for shipments
const getGenericAutoComplete = async (
  obj: ShipthisAPI,
  referenceName: string,
  data: any,
) => {
  return obj.internalRequest(
    obj,
    'POST',
    `autocomplete-reference/${referenceName}?location=new_york`,
    { requestData: data },
  );
};

const getLocation = async (
  obj: ShipthisAPI,
  collectionName: string,
  params?: CollectionParams,
) => {
  if (!params) {
    params = {};
  }
  return obj.internalRequest(obj, 'GET', `thirdparty/${collectionName}`, {
    params,
  });
};

const selectGoogleLocation = async (
  obj: ShipthisAPI,
  collectionName: string,
  params: SelectGoogleLocationParams,
) => {
  return obj.internalRequest(
    obj,
    'GET',
    `thirdparty/${collectionName}?query=${params.placeId}&description=${params.description}`,
    {
      params,
    },
  );
};

const conversation = async (
  obj: ShipthisAPI,
  collectionName: string,
  data: any,
  params?: CollectionParams,
) => {
  if (!params) {
    params = {};
  }
  return obj.internalRequest(obj, 'POST', collectionName, data);
};
const deleteGenericCollectionItem = async (
  obj,
  collectionName: string,
  objectId: string,
) => {
  return obj.internalRequest(
    obj,
    'DELETE',
    `/incollection/${collectionName}/${objectId}`,
  );
};

const getReportView = async (
  obj,
  report_name: string,
  start_date: string,
  end_date: string,
  location,
  output_type = 'json',
  skip_meta = 'true',
  post_data: any,
) => {
  return obj.internalRequest(obj, 'POST', `/report-view/${report_name}`, {
    params: { start_date, end_date, output_type, skip_meta, location },
    requestData: post_data,
  });
};

export {
  getOneGenericCollectionItem,
  getListGenericCollection,
  createGenericCollectionItem,
  updateGenericCollectionItem,
  deleteGenericCollectionItem,
  getExchangeRateForCurrency,
  getGenericAutoComplete,
  getLocation,
  conversation,
  getReportView,
  selectGoogleLocation,
};
