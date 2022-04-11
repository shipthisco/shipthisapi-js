import { CollectionParams } from "../interfaces/collection-params.interface";
import { ShipthisAPI } from "../main";
declare const getListGenericCollection: (obj: ShipthisAPI, collectionName: any, params?: CollectionParams) => Promise<any>;
declare const getOneGenericCollectionItem: (obj: ShipthisAPI, collectionName: any, objectId: string) => Promise<any>;
declare const createGenericCollectionItem: (obj: any, collectionName: string, itemData: any) => Promise<any>;
declare const updateGenericCollectionItem: (obj: any, collectionName: string, objectId: string, updatedData: any) => Promise<any>;
declare const deleteGenericCollectionItem: (obj: any, collectionName: string, objectId: string) => Promise<any>;
export { getOneGenericCollectionItem, getListGenericCollection, createGenericCollectionItem, updateGenericCollectionItem, deleteGenericCollectionItem };
