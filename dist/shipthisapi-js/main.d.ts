import { ApiOptions } from './interfaces/api.interface.js';
import { Shipment } from './collections/shipment.js';
import { Organisation } from './interfaces/info.interface.js';
import { Invoice } from './collections/invoice.js';
import { Setup } from './collections/setup.js';
import { Quotation } from './collections/quotation.js';
import { Customer } from './collections/customer.js';
export declare class ShipthisAPI {
    serverUrl: string;
    base_api_endpoint: string;
    file_upload_api_endpoint: string;
    xApiKey?: string | null;
    authorization: string | undefined;
    organisationId: string;
    organisation: Organisation | undefined;
    userType: string;
    selectedRegion: string;
    selectedLocation: string;
    profiles: never[];
    selectedProfile: any;
    isSessionValid: boolean | undefined;
    isConnectionValid: boolean;
    connectionErrorMessage: string | undefined;
    internalRequest: (obj: ShipthisAPI, method: import("axios").Method, path: string, options?: import("./interfaces/api.interface.js").RequestOptions) => Promise<any>;
    getListGeneric: (obj: any, collectionName: string, params: import("./interfaces/collection-params.interface.js").CollectionParams) => Promise<any>;
    uploadFile: (obj: ShipthisAPI, file: File) => Promise<any>;
    getListGenericCollection: (obj: ShipthisAPI, collectionName: any, params?: import("./interfaces/collection-params.interface.js").CollectionParams) => Promise<any>;
    getSearchListCollection: (obj: ShipthisAPI, collectionName: any, queryFilter: any, params?: import("./interfaces/collection-params.interface.js").CollectionParams) => Promise<any>;
    getFullSearchListCollection: (obj: ShipthisAPI, collectionName: any, queryParams: import("./interfaces/api.interface.js").AllQueryFieldsPayload, params?: import("./interfaces/collection-params.interface.js").CollectionParams) => Promise<any>;
    getOneGenericCollectionItem: (obj: ShipthisAPI, collectionName: any, objectId: string) => Promise<any>;
    createGenericCollectionItem: (obj: {
        internalRequest: (arg0: any, arg1: string, arg2: string, arg3: {
            requestData: {
                reqbody: any;
            };
            params: import("./interfaces/collection-params.interface.js").CollectionParams;
        }) => any;
    } | ShipthisAPI, collectionName: string, itemData: any, params?: import("./interfaces/collection-params.interface.js").CollectionParams) => Promise<any>;
    updateGenericCollectionItem: (obj: {
        internalRequest: (arg0: any, arg1: string, arg2: string, arg3: {
            requestData: any;
        }) => any;
    } | ShipthisAPI, collectionName: string, objectId: string, updatedData: any) => Promise<any>;
    deleteGenericCollectionItem: (obj: {
        internalRequest: (arg0: any, arg1: string, arg2: string) => any;
    }, collectionName: string, objectId: string) => Promise<any>;
    getExchangeRateForCurrency: (obj: ShipthisAPI, currency: string) => Promise<any>;
    getGenericAutoComplete: (obj: ShipthisAPI, referenceName: string, data: any) => Promise<any>;
    getLocation: (obj: ShipthisAPI, collectionName: string, params?: import("./interfaces/collection-params.interface.js").CollectionParams) => Promise<any>;
    selectGoogleLocation: (obj: ShipthisAPI, collectionName: string, params: import("./interfaces/collection-params.interface.js").SelectGoogleLocationParams) => Promise<any>;
    setJobStatus: (obj: {
        internalRequest: (arg0: any, arg1: string, arg2: string, arg3: {
            action_index: any;
        }) => any;
    }, collectionName: string, objectId: string, index: any) => Promise<any>;
    getJobStatus: (obj: {
        internalRequest: (arg0: any, arg1: string, arg2: string) => any;
    }, collectionName: string, objectId: string) => Promise<any>;
    getWorkflowReport: (obj: {
        internalRequest: (arg0: any, arg1: string, arg2: string) => any;
    }, objectId: string) => Promise<any>;
    setWorkflowReport: (obj: {
        internalRequest: (arg0: any, arg1: string, arg2: string) => any;
    }, objectId: string) => Promise<any>;
    conversation: (obj: ShipthisAPI, collectionName: string, data: any, params?: import("./interfaces/collection-params.interface.js").CollectionParams) => Promise<any>;
    getReportView: (obj: {
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
    /**
     * Collection Definition
     */
    Shipment: Shipment;
    Invoice: Invoice;
    Setup: Setup;
    Quotation: Quotation;
    Customer: Customer;
    /**
     *  Initializer
     * @param init
     */
    constructor(init: ApiOptions);
    connect(): Promise<unknown>;
    disconnect(): void;
    /**
     * Login Via Password
     * @param email
     * @param password
     */
    loginViaPassword(email: string, password: string): Promise<unknown>;
    onInfoChange(response: any): void;
    /**
     * Customer User Registration
     * @param email
     * @param password
     * @param firstName
     * @param lastName
     * @param companyName
     * @param acceptTermsAndConditions
     */
    customerUserRegistration(email: string, password: string, firstName: string, lastName: string, companyName: string, phone: string, acceptTermsAndConditions: boolean, accounting: any, address: any): Promise<any>;
    /**
     * Customer Forgot Password
     */
    customerForgotPassword(email: string, recaptcha_response?: string): Promise<any>;
    /**
     * Set Password Via Token (Forgot Password)
     */
    setPasswordViaToken(token: string, new_password: string): Promise<any>;
    getSelectedRegion(): string;
    setRegionAndLocation(regionId: string, locationId: string): void;
    setObjectReferences(): void;
    /**
     * Gets the initial configuration information
     * @returns {Promise<AxiosResponse<ShipthisApiResponse<InfoData>>>}
     */
    getInfo(): Promise<any>;
    searchLocation(query: string): Promise<any>;
}
