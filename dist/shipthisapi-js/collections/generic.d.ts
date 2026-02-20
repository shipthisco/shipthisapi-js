import { AllQueryFieldsPayload } from '../interfaces/api.interface.js';
import { CollectionParams, SelectGoogleLocationParams } from '../interfaces/collection-params.interface.js';
import { ShipthisAPI } from '../main.js';
/**
 *  GENERIC CRUD
 * @param obj
 * @param collectionName
 * @param params
 * @returns
 */
declare const getListGeneric: (obj: any, collectionName: string, params: CollectionParams) => Promise<any>;
declare const getListGenericCollection: (obj: ShipthisAPI, collectionName: any, params?: CollectionParams) => Promise<any>;
declare const getSearchListCollection: (obj: ShipthisAPI, collectionName: any, queryFilter: any, params?: CollectionParams) => Promise<any>;
declare const getFullSearchListCollection: (obj: ShipthisAPI, collectionName: any, queryParams: AllQueryFieldsPayload, params?: CollectionParams) => Promise<any>;
declare const getOneGenericCollectionItem: (obj: ShipthisAPI, collectionName: any, objectId: string) => Promise<any>;
declare const createGenericCollectionItem: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string, arg3: {
        requestData: {
            reqbody: any;
        };
        params: CollectionParams;
    }) => any;
} | ShipthisAPI, collectionName: string, itemData: any, params?: CollectionParams) => Promise<any>;
declare const updateGenericCollectionItem: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string, arg3: {
        requestData: any;
    }) => any;
} | ShipthisAPI, collectionName: string, objectId: string, updatedData: any) => Promise<any>;
/**
 * Patch specific fields of an item (partial update)
 * @param obj - ShipthisAPI instance
 * @param collectionName - Name of the collection
 * @param objectId - Document ID
 * @param updateFields - Fields to update
 */
declare const patchGenericCollectionItem: (obj: ShipthisAPI, collectionName: string, objectId: string, updateFields: any) => Promise<any>;
/**
 * Bulk edit multiple items in a collection
 * @param obj - ShipthisAPI instance
 * @param collectionName - Name of the collection
 * @param ids - List of document IDs to update
 * @param updateData - Key-value pairs of fields to update
 * @param externalUpdateData - Extra data for external updates (optional)
 */
declare const bulkEdit: (obj: ShipthisAPI, collectionName: string, ids: string[], updateData: Record<string, any>, externalUpdateData?: Record<string, any>) => Promise<any>;
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
declare const primaryWorkflowAction: (obj: ShipthisAPI, collection: string, workflowId: string, objectId: string, actionIndex: number, intendedStateId: string, startStateId?: string) => Promise<any>;
/**
 * Trigger a secondary workflow transition (sub-status change)
 * @param obj - ShipthisAPI instance
 * @param collection - Target collection (e.g., "pickup_delivery")
 * @param workflowId - Secondary status key (e.g., "driver_status")
 * @param objectId - Document ID
 * @param targetState - Resulting sub-state (e.g., "to_pick_up")
 * @param additionalData - Optional additional data to send
 */
declare const secondaryWorkflowAction: (obj: ShipthisAPI, collection: string, workflowId: string, objectId: string, targetState: string, additionalData?: Record<string, any>) => Promise<any>;
declare const setJobStatus: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string, arg3: {
        action_index: any;
    }) => any;
}, collectionName: string, objectId: string, index: any) => Promise<any>;
declare const getJobStatus: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string) => any;
}, collectionName: string, objectId: string) => Promise<any>;
declare const getWorkflowReport: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string) => any;
}, objectId: string) => Promise<any>;
declare const setWorkflowReport: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string) => any;
}, objectId: string) => Promise<any>;
declare const getExchangeRateForCurrency: (obj: ShipthisAPI, currency: string) => Promise<any>;
declare const getGenericAutoComplete: (obj: ShipthisAPI, referenceName: string, data: any) => Promise<any>;
declare const getLocation: (obj: ShipthisAPI, collectionName: string, params?: CollectionParams) => Promise<any>;
declare const selectGoogleLocation: (obj: ShipthisAPI, collectionName: string, params: SelectGoogleLocationParams) => Promise<any>;
declare const conversation: (obj: ShipthisAPI, collectionName: string, data: any, params?: CollectionParams) => Promise<any>;
/**
 * Create a conversation/message on a document
 * @param obj - ShipthisAPI instance
 * @param viewName - Collection/view name
 * @param documentId - Document ID
 * @param conversationData - Conversation data (message, type, etc.)
 */
declare const createConversation: (obj: ShipthisAPI, viewName: string, documentId: string, conversationData: any) => Promise<any>;
/**
 * Get conversations for a document
 * @param obj - ShipthisAPI instance
 * @param viewName - Collection/view name
 * @param documentId - Document ID
 * @param messageType - Filter by message type (default: "all")
 * @param page - Page number (default: 1)
 * @param count - Items per page (default: 100)
 */
declare const getConversations: (obj: ShipthisAPI, viewName: string, documentId: string, messageType?: string, page?: number, count?: number) => Promise<any>;
declare const deleteGenericCollectionItem: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string) => any;
}, collectionName: string, objectId: string) => Promise<any>;
declare const getReportView: (obj: {
    internalRequest: (arg0: any, arg1: string, arg2: string, arg3: {
        params: {
            start_date: string;
            end_date: string;
            output_type: string;
            skip_meta: string;
            location: any;
        };
        requestData: any;
    }) => any;
}, report_name: string, start_date: string, end_date: string, location: any, output_type: string | undefined, skip_meta: string | undefined, post_data: any) => Promise<any>;
export { getOneGenericCollectionItem, getListGenericCollection, getSearchListCollection, getFullSearchListCollection, createGenericCollectionItem, updateGenericCollectionItem, patchGenericCollectionItem, deleteGenericCollectionItem, bulkEdit, primaryWorkflowAction, secondaryWorkflowAction, getExchangeRateForCurrency, getGenericAutoComplete, getLocation, conversation, createConversation, getConversations, getReportView, selectGoogleLocation, getListGeneric, setJobStatus, getJobStatus, getWorkflowReport, setWorkflowReport, };
