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
export { getOneGenericCollectionItem, getListGenericCollection, getSearchListCollection, getFullSearchListCollection, createGenericCollectionItem, updateGenericCollectionItem, deleteGenericCollectionItem, getExchangeRateForCurrency, getGenericAutoComplete, getLocation, conversation, getReportView, selectGoogleLocation, getListGeneric, setJobStatus, getJobStatus, getWorkflowReport, setWorkflowReport, };
