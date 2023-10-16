import { allQueryFieldsPayload } from '../interfaces/api.interface';
import { CollectionParams, SelectGoogleLocationParams } from '../interfaces/collection-params.interface';
import { ShipthisAPI } from '../main';
declare const getListGeneric: (obj: any, collectionName: string, params: CollectionParams) => Promise<any>;
declare const getListGenericCollection: (obj: ShipthisAPI, collectionName: any, params?: CollectionParams) => Promise<any>;
declare const getSearchListCollection: (obj: ShipthisAPI, collectionName: any, queryFilter: any, params?: CollectionParams) => Promise<any>;
declare const getFullSearchListCollection: (obj: ShipthisAPI, collectionName: string, queryParams: allQueryFieldsPayload, params?: CollectionParams) => Promise<any>;
declare const getOneGenericCollectionItem: (obj: ShipthisAPI, collectionName: any, objectId: string) => Promise<any>;
declare const createGenericCollectionItem: (obj: any, collectionName: string, itemData: any, params?: CollectionParams) => Promise<any>;
declare const updateGenericCollectionItem: (obj: any, collectionName: string, objectId: string, updatedData: any) => Promise<any>;
declare const setJobStatus: (obj: any, collectionName: string, objectId: string, index: any) => Promise<any>;
declare const getJobStatus: (obj: any, collectionName: string, objectId: string) => Promise<any>;
declare const getWorkflowReport: (obj: any, objectId: string) => Promise<any>;
declare const setWorkflowReport: (obj: any, objectId: string) => Promise<any>;
declare const getExchangeRateForCurrency: (obj: ShipthisAPI, currency: string) => Promise<any>;
declare const getGenericAutoComplete: (obj: ShipthisAPI, referenceName: string, data: any) => Promise<any>;
declare const getLocation: (obj: ShipthisAPI, collectionName: string, params?: CollectionParams) => Promise<any>;
declare const selectGoogleLocation: (obj: ShipthisAPI, collectionName: string, params: SelectGoogleLocationParams) => Promise<any>;
declare const conversation: (obj: ShipthisAPI, collectionName: string, data: any, params?: CollectionParams) => Promise<any>;
declare const deleteGenericCollectionItem: (obj: any, collectionName: string, objectId: string) => Promise<any>;
declare const getReportView: (obj: any, report_name: string, start_date: string, end_date: string, location: any, output_type: string, skip_meta: string, post_data: any) => Promise<any>;
export { getOneGenericCollectionItem, getListGenericCollection, getSearchListCollection, getFullSearchListCollection, createGenericCollectionItem, updateGenericCollectionItem, deleteGenericCollectionItem, getExchangeRateForCurrency, getGenericAutoComplete, getLocation, conversation, getReportView, selectGoogleLocation, getListGeneric, setJobStatus, getJobStatus, getWorkflowReport, setWorkflowReport };
