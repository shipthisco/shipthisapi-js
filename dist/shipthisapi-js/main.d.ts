import { ApiOptions } from './interfaces/api.interface';
import { Shipment } from './collections/shipment';
import { Organisation } from './interfaces/info.interface';
import { Invoice } from './collections/invoice';
import { Setup } from './collections/setup';
import { Quotation } from './collections/quotation';
import { Customer } from './collections/customer';
export declare class ShipthisAPI {
    serverUrl: string;
    base_api_endpoint: string;
    file_upload_api_endpoint: string;
    xApiKey: string;
    authorization: string;
    organisationId: string;
    organisation: Organisation;
    userType: string;
    selectedRegion: string;
    selectedLocation: string;
    profiles: any[];
    selectedProfile: any;
    isSessionValid: boolean;
    internalRequest: (obj: ShipthisAPI, method: import("axios").Method, path: string, options?: import("./interfaces/api.interface").RequestOptions) => Promise<any>;
    getListGeneric: (obj: any, collectionName: string, params: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    uploadFile: (obj: ShipthisAPI, file: File) => Promise<any>;
    getListGenericCollection: (obj: ShipthisAPI, collectionName: any, params?: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    getSearchListCollection: (obj: ShipthisAPI, collectionName: any, queryFilter: any, params?: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    getFullSearchListCollection: (obj: ShipthisAPI, collectionName: any, queryParams: import("./interfaces/api.interface").AllQueryFieldsPayload, params?: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    getOneGenericCollectionItem: (obj: ShipthisAPI, collectionName: any, objectId: string) => Promise<any>;
    createGenericCollectionItem: (obj: any, collectionName: string, itemData: any, params?: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    updateGenericCollectionItem: (obj: any, collectionName: string, objectId: string, updatedData: any) => Promise<any>;
    deleteGenericCollectionItem: (obj: any, collectionName: string, objectId: string) => Promise<any>;
    getExchangeRateForCurrency: (obj: ShipthisAPI, currency: string) => Promise<any>;
    getGenericAutoComplete: (obj: ShipthisAPI, referenceName: string, data: any) => Promise<any>;
    getLocation: (obj: ShipthisAPI, collectionName: string, params?: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    selectGoogleLocation: (obj: ShipthisAPI, collectionName: string, params: import("./interfaces/collection-params.interface").SelectGoogleLocationParams) => Promise<any>;
    setJobStatus: (obj: any, collectionName: string, objectId: string, index: any) => Promise<any>;
    getJobStatus: (obj: any, collectionName: string, objectId: string) => Promise<any>;
    getWorkflowReport: (obj: any, objectId: string) => Promise<any>;
    setWorkflowReport: (obj: any, objectId: string) => Promise<any>;
    conversation: (obj: ShipthisAPI, collectionName: string, data: any, params?: import("./interfaces/collection-params.interface").CollectionParams) => Promise<any>;
    getReportView: (obj: any, report_name: string, start_date: string, end_date: string, location: any, output_type: string, skip_meta: string, post_data: any) => Promise<any>;
    Shipment: Shipment;
    Invoice: Invoice;
    Setup: Setup;
    Quotation: Quotation;
    Customer: Customer;
    constructor(init: ApiOptions);
    connect(locationId?: any): Promise<unknown>;
    disconnect(): void;
    loginViaPassword(email: string, password: string): Promise<unknown>;
    onInfoChange(response: any): void;
    customerUserRegistration(email: string, password: string, firstName: string, lastName: string, companyName: string, phone: string, acceptTermsAndConditions: boolean, accounting: any, address: any): Promise<any>;
    customerForgotPassword(email: string, recaptcha_response?: string): Promise<any>;
    setPasswordViaToken(token: string, new_password: string): Promise<any>;
    getSelectedRegion(): string;
    setRegionAndLocation(regionId: string, locationId: string): void;
    setObjectReferences(): void;
    getInfo(): Promise<any>;
    searchLocation(query: string): Promise<any>;
}
