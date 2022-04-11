import { ApiOptions } from './interfaces/api.interface';
import { Shipment } from './collections/shipment';
import { Organisation } from './interfaces/info.interface';
import { Invoice } from './collections/invoice';
export declare class ShipthisAPI {
    serverUrl: string;
    base_api_endpoint: string;
    xApiKey: string;
    organisationId: string;
    organisation: Organisation;
    userType: string;
    selectedRegion: string;
    selectedLocation: string;
    internalRequest: (obj: ShipthisAPI, method: import("axios").Method, path: string, options?: import("./interfaces/api.interface").RequestOptions) => Promise<any>;
    getListGenericCollection: (obj: ShipthisAPI, collectionName: any, params?: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    getOneGenericCollectionItem: (obj: ShipthisAPI, collectionName: any, objectId: string) => Promise<any>;
    createGenericCollectionItem: (obj: any, collectionName: string, itemData: any) => Promise<any>;
    updateGenericCollectionItem: (obj: any, collectionName: string, objectId: string, updatedData: any) => Promise<any>;
    deleteGenericCollectionItem: (obj: any, collectionName: string, objectId: string) => Promise<any>;
    Shipment: Shipment;
    Invoice: Invoice;
    constructor(init: ApiOptions);
    connect(locationId?: any): Promise<unknown>;
    getSelectedRegion(): string;
    setRegionAndLocation(regionId: string, locationId: string): void;
    setObjectReferences(): void;
    getInfo(): Promise<any>;
}
