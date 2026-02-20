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
/**
 * Patch specific fields of an item (partial update)
 * @param obj - ShipthisAPI instance
 * @param collectionName - Name of the collection
 * @param objectId - Document ID
 * @param updateFields - Fields to update
 */
const patchGenericCollectionItem = async (obj, collectionName, objectId, updateFields) => {
    return obj.internalRequest(obj, 'PATCH', `/incollection/${collectionName}/${objectId}`, { requestData: { update_fields: updateFields } });
};
/**
 * Bulk edit multiple items in a collection
 * @param obj - ShipthisAPI instance
 * @param collectionName - Name of the collection
 * @param ids - List of document IDs to update
 * @param updateData - Key-value pairs of fields to update
 * @param externalUpdateData - Extra data for external updates (optional)
 */
const bulkEdit = async (obj, collectionName, ids, updateData, externalUpdateData) => {
    const payload = {
        data: {
            ids,
            update_data: updateData,
        },
    };
    if (externalUpdateData) {
        payload.data.external_update_data = externalUpdateData;
    }
    return obj.internalRequest(obj, 'POST', `/incollection_group_edit/${collectionName}`, { requestData: payload });
};
/**
 * Trigger a primary workflow transition (status change on a record)
 * @param obj - ShipthisAPI instance
 * @param collection - Target collection (e.g., "pickup_delivery")
 * @param workflowId - Workflow status key (e.g., "job_status")
 * @param objectId - Document ID
 * @param actionIndex - Index of action within the status
 * @param intendedStateId - Intended resulting state ID
 * @param startStateId - Current/starting state ID (optional)
 */
const primaryWorkflowAction = async (obj, collection, workflowId, objectId, actionIndex, intendedStateId, startStateId) => {
    const payload = {
        action_index: actionIndex,
        intended_state_id: intendedStateId,
    };
    if (startStateId) {
        payload.start_state_id = startStateId;
    }
    return obj.internalRequest(obj, 'POST', `/workflow/${collection}/${workflowId}/${objectId}`, { requestData: payload });
};
/**
 * Trigger a secondary workflow transition (sub-status change)
 * @param obj - ShipthisAPI instance
 * @param collection - Target collection (e.g., "pickup_delivery")
 * @param workflowId - Secondary status key (e.g., "driver_status")
 * @param objectId - Document ID
 * @param targetState - Resulting sub-state (e.g., "to_pick_up")
 * @param additionalData - Optional additional data to send
 */
const secondaryWorkflowAction = async (obj, collection, workflowId, objectId, targetState, additionalData) => {
    return obj.internalRequest(obj, 'POST', `/workflow/${collection}/${workflowId}/${objectId}/${targetState}`, { requestData: additionalData || {} });
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
    const location = obj.selectedLocation || 'new_york';
    return obj.internalRequest(obj, 'POST', `autocomplete-reference/${referenceName}?location=${location}`, { requestData: data });
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
/**
 * Create a conversation/message on a document
 * @param obj - ShipthisAPI instance
 * @param viewName - Collection/view name
 * @param documentId - Document ID
 * @param conversationData - Conversation data (message, type, etc.)
 */
const createConversation = async (obj, viewName, documentId, conversationData) => {
    const payload = {
        conversation: conversationData,
        document_id: documentId,
        view_name: viewName,
        message_type: conversationData?.type || '',
    };
    return obj.internalRequest(obj, 'POST', 'conversation', { requestData: payload });
};
/**
 * Get conversations for a document
 * @param obj - ShipthisAPI instance
 * @param viewName - Collection/view name
 * @param documentId - Document ID
 * @param messageType - Filter by message type (default: "all")
 * @param page - Page number (default: 1)
 * @param count - Items per page (default: 100)
 */
const getConversations = async (obj, viewName, documentId, messageType = 'all', page = 1, count = 100) => {
    const params = new URLSearchParams({
        view_name: viewName,
        document_id: documentId,
        page: String(page),
        count: String(count),
        message_type: messageType,
        version: '2',
    });
    return obj.internalRequest(obj, 'GET', `conversation?${params.toString()}`);
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
export { getOneGenericCollectionItem, getListGenericCollection, getSearchListCollection, getFullSearchListCollection, createGenericCollectionItem, updateGenericCollectionItem, patchGenericCollectionItem, deleteGenericCollectionItem, bulkEdit, primaryWorkflowAction, secondaryWorkflowAction, getExchangeRateForCurrency, getGenericAutoComplete, getLocation, conversation, createConversation, getConversations, getReportView, selectGoogleLocation, getListGeneric, setJobStatus, getJobStatus, getWorkflowReport, setWorkflowReport, };
