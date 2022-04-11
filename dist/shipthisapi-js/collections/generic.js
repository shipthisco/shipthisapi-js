"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGenericCollectionItem = exports.updateGenericCollectionItem = exports.createGenericCollectionItem = exports.getListGenericCollection = exports.getOneGenericCollectionItem = void 0;
const getListGenericCollection = async (obj, collectionName, params) => {
    if (!params) {
        params = {};
    }
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}`, { params });
};
exports.getListGenericCollection = getListGenericCollection;
const getOneGenericCollectionItem = async (obj, collectionName, objectId) => {
    return obj.internalRequest(obj, 'GET', `/incollection/${collectionName}/${objectId}`);
};
exports.getOneGenericCollectionItem = getOneGenericCollectionItem;
const createGenericCollectionItem = async (obj, collectionName, itemData) => {
    return obj.internalRequest(obj, 'POST', `/incollection/${collectionName}`, { requestData: itemData });
};
exports.createGenericCollectionItem = createGenericCollectionItem;
const updateGenericCollectionItem = async (obj, collectionName, objectId, updatedData) => {
    return obj.internalRequest(obj, 'PUT', `/incollection/${collectionName}/${objectId}`, { requestData: updatedData });
};
exports.updateGenericCollectionItem = updateGenericCollectionItem;
const deleteGenericCollectionItem = async (obj, collectionName, objectId) => {
    return obj.internalRequest(obj, 'DELETE', `/incollection/${collectionName}/${objectId}`);
};
exports.deleteGenericCollectionItem = deleteGenericCollectionItem;
