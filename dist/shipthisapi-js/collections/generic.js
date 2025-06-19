/**
 *  GENERIC CRUD
 * @param obj
 * @param collectionName
 * @param params
 * @returns
 */
const getListGeneric = async (obj, collectionName, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'POST', `/report-view/${collectionName}`, {
        params,
    });
};
const getListGenericCollection = async (obj, collectionName, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}`, {
        params,
    });
};
const getSearchListCollection = async (obj, collectionName, queryFilter, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}?search_query=${queryFilter}`, {
        params,
    });
};
const getFullSearchListCollection = async (obj, collectionName, queryParams, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}?search_query=${queryParams.search_query}&count=${queryParams.count}&page=${queryParams.page}&multi_sort=${JSON.stringify(queryParams.multi_sort)}&output_type=${queryParams.output_type}&meta=${queryParams.meta}&queryFilterV2=${queryParams.queryFilterV2}&general_filter=${JSON.stringify(queryParams.general_filter)}&only=${queryParams.only}&location=${queryParams.location}&region_override=${queryParams.region_override}`, {
        params,
    });
};
const getOneGenericCollectionItem = async (obj, collectionName, objectId) => {
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}/${objectId}`);
};
const createGenericCollectionItem = async (obj, collectionName, itemData, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'POST', `/incollection/${collectionName}`, {
        requestData: { reqbody: itemData },
        params,
    });
};
const updateGenericCollectionItem = async (obj, collectionName, objectId, updatedData) => {
    return obj.internalRequest(obj, 'PUT', `/incollection/${collectionName}/${objectId}`, { requestData: updatedData });
};
const setJobStatus = async (obj, collectionName, objectId, index) => {
    return obj.internalRequest(obj, 'POST', `/workflow/${collectionName}/job_status/${objectId}`, { action_index: index });
};
const getJobStatus = async (obj, collectionName, objectId) => {
    return obj.internalRequest(obj, 'GET', `/workflow/${collectionName}/job_status/${objectId}`);
};
const getWorkflowReport = async (obj, objectId) => {
    return obj.internalRequest(obj, 'GET', `/incollection/workflow/${objectId}`);
};
const setWorkflowReport = async (obj, objectId) => {
    return obj.internalRequest(obj, 'PUT', `/incollection/workflow/${objectId}`);
};
// get the exchange rate for currencies in Invoice
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/thirdparty/currency?source=EUR&target=USD&date=1662508800000
const getExchangeRateForCurrency = async (obj, currency) => {
    return obj.internalRequest(obj, 'GET', `thirdparty/currency?source=${currency}&target=USD&date=${new Date().getTime()}`);
};
// get the port of landing and discharge for shipments
const getGenericAutoComplete = async (obj, referenceName, data) => {
    return obj.internalRequest(obj, 'POST', `autocomplete-reference/${referenceName}?location=new_york`, { requestData: data });
};
const getLocation = async (obj, collectionName, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'GET', `thirdparty/${collectionName}`, {
        params,
    });
};
const selectGoogleLocation = async (obj, collectionName, params) => {
    return obj.internalRequest(obj, 'GET', `thirdparty/${collectionName}?query=${params.placeId}&description=${params.description}`, {
        params,
    });
};
const conversation = async (obj, collectionName, data, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'POST', collectionName, data);
};
const deleteGenericCollectionItem = async (obj, collectionName, objectId) => {
    return obj.internalRequest(obj, 'DELETE', `/incollection/${collectionName}/${objectId}`);
};
const getReportView = async (obj, report_name, start_date, end_date, location, output_type = 'json', skip_meta = 'true', post_data) => {
    return obj.internalRequest(obj, 'POST', `/report-view/${report_name}`, {
        params: { start_date, end_date, output_type, skip_meta, location },
        requestData: post_data,
    });
};
export { getOneGenericCollectionItem, getListGenericCollection, getSearchListCollection, getFullSearchListCollection, createGenericCollectionItem, updateGenericCollectionItem, deleteGenericCollectionItem, getExchangeRateForCurrency, getGenericAutoComplete, getLocation, conversation, getReportView, selectGoogleLocation, getListGeneric, setJobStatus, getJobStatus, getWorkflowReport, setWorkflowReport, };
