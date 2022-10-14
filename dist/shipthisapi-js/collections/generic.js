"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectGoogleLocation = exports.getReportView = exports.conversation = exports.getLocation = exports.getGenericAutoComplete = exports.getExchangeRateForCurrency = exports.deleteGenericCollectionItem = exports.updateGenericCollectionItem = exports.createGenericCollectionItem = exports.getListGenericCollection = exports.getOneGenericCollectionItem = void 0;
const getListGenericCollection = async (obj, collectionName, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}`, {
        params,
    });
};
exports.getListGenericCollection = getListGenericCollection;
const getOneGenericCollectionItem = async (obj, collectionName, objectId) => {
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}/${objectId}`);
};
exports.getOneGenericCollectionItem = getOneGenericCollectionItem;
const createGenericCollectionItem = async (obj, collectionName, itemData, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'POST', `/incollection/${collectionName}`, {
        requestData: { reqbody: itemData },
        params,
    });
};
exports.createGenericCollectionItem = createGenericCollectionItem;
const updateGenericCollectionItem = async (obj, collectionName, objectId, updatedData) => {
    return obj.internalRequest(obj, 'PUT', `/incollection/${collectionName}/${objectId}`, { requestData: updatedData });
};
exports.updateGenericCollectionItem = updateGenericCollectionItem;
const getExchangeRateForCurrency = async (obj, currency) => {
    return obj.internalRequest(obj, 'GET', `thirdparty/currency?source=${currency}&target=USD&date=${new Date().getTime()}`);
};
exports.getExchangeRateForCurrency = getExchangeRateForCurrency;
const getGenericAutoComplete = async (obj, referenceName, data) => {
    return obj.internalRequest(obj, 'POST', `autocomplete-reference/${referenceName}?location=new_york`, { requestData: data });
};
exports.getGenericAutoComplete = getGenericAutoComplete;
const getLocation = async (obj, collectionName, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'GET', `thirdparty/${collectionName}`, {
        params,
    });
};
exports.getLocation = getLocation;
const selectGoogleLocation = async (obj, collectionName, params) => {
    return obj.internalRequest(obj, 'GET', `thirdparty/${collectionName}?query=${params.placeId}&description=${params.description}`, {
        params,
    });
};
exports.selectGoogleLocation = selectGoogleLocation;
const conversation = async (obj, collectionName, data, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'POST', collectionName, data);
};
exports.conversation = conversation;
const deleteGenericCollectionItem = async (obj, collectionName, objectId) => {
    return obj.internalRequest(obj, 'DELETE', `/incollection/${collectionName}/${objectId}`);
};
exports.deleteGenericCollectionItem = deleteGenericCollectionItem;
const getReportView = async (obj, report_name, start_date, end_date, location, output_type = 'json', skip_meta = 'true', post_data) => {
    return obj.internalRequest(obj, 'POST', `/report-view/${report_name}`, {
        params: { start_date, end_date, output_type, skip_meta, location },
        requestData: post_data,
    });
};
exports.getReportView = getReportView;
