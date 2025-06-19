import { createGenericCollectionItem, deleteGenericCollectionItem, getListGenericCollection, getSearchListCollection, getFullSearchListCollection, getOneGenericCollectionItem, getExchangeRateForCurrency, getGenericAutoComplete, getLocation, conversation, getReportView, updateGenericCollectionItem, selectGoogleLocation, getListGeneric, setJobStatus, getJobStatus, getWorkflowReport, setWorkflowReport, } from './collections/generic.js';
import { internalRequest, uploadFile } from './utils/request.js';
import { Shipment } from './collections/shipment.js';
import { Setup } from './collections/setup.js';
export class ShipthisAPI {
    serverUrl = 'https://api.shipthis.co';
    base_api_endpoint = 'https://api.shipthis.co';
    file_upload_api_endpoint = 'https://upload.shipthis.co/api/v3/file-upload';
    xApiKey;
    authorization;
    organisationId;
    organisation;
    userType;
    selectedRegion;
    selectedLocation;
    profiles = [];
    selectedProfile;
    isSessionValid;
    isConnectionValid;
    connectionErrorMessage;
    internalRequest = internalRequest;
    getListGeneric = getListGeneric;
    uploadFile = uploadFile;
    getListGenericCollection = getListGenericCollection;
    getSearchListCollection = getSearchListCollection;
    getFullSearchListCollection = getFullSearchListCollection;
    getOneGenericCollectionItem = getOneGenericCollectionItem;
    createGenericCollectionItem = createGenericCollectionItem;
    updateGenericCollectionItem = updateGenericCollectionItem;
    deleteGenericCollectionItem = deleteGenericCollectionItem;
    getExchangeRateForCurrency = getExchangeRateForCurrency;
    getGenericAutoComplete = getGenericAutoComplete;
    getLocation = getLocation;
    selectGoogleLocation = selectGoogleLocation;
    setJobStatus = setJobStatus;
    getJobStatus = getJobStatus;
    getWorkflowReport = getWorkflowReport;
    setWorkflowReport = setWorkflowReport;
    conversation = conversation;
    getReportView = getReportView;
    /**
     * Collection Definition
     */
    Shipment;
    Invoice;
    Setup;
    Quotation;
    Customer;
    /**
     *  Initializer
     * @param init
     */
    constructor(init) {
        this.organisationId = init.organisationId;
        this.userType = init.userType;
        this.xApiKey = init.xApiKey;
        this.selectedRegion = init.regionId || '';
        this.selectedLocation = init.locationId || '';
        this.isConnectionValid = false;
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.getInfo()
                .then((resp) => {
                this.onInfoChange(resp);
                if (!this.selectedLocation) {
                    this.selectedRegion = resp?.organisation?.regions[0]?.region_id;
                    this.selectedLocation =
                        resp?.organisation?.regions[0]?.locations[0]?.location_id;
                    this.isConnectionValid = true;
                }
                else {
                    const region = this.organisation?.regions?.find((region) => region.region_id === this.selectedRegion);
                    if (!region) {
                        this.connectionErrorMessage = 'Region Not Found';
                        reject({
                            message: this.connectionErrorMessage,
                        });
                    }
                    const location = region?.locations?.find((location) => location.location_id === this.selectedLocation);
                    if (!location) {
                        this.connectionErrorMessage = 'Location Not Found';
                        reject({
                            message: this.connectionErrorMessage,
                        });
                    }
                    this.isConnectionValid = true;
                }
                resolve({
                    region: this.selectedRegion,
                    selectedLocation: this.selectedLocation,
                });
            })
                .catch((err) => {
                reject({
                    message: err,
                });
            });
        });
    }
    disconnect() {
        this.xApiKey = null;
    }
    // Session
    /**
     * Login Via Password
     * @param email
     * @param password
     */
    async loginViaPassword(email, password) {
        return new Promise((resolve, reject) => {
            // TODO remove this on backend update
            const basePath = '/user-auth/login';
            this.internalRequest(this, 'POST', basePath, {
                requestData: {
                    email: email.toLowerCase(),
                    password: password,
                },
            })
                .then((data) => {
                if (data.user) {
                    this.onInfoChange(data);
                    resolve(data.user);
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    onInfoChange(response) {
        // if (response?.user?.auth_token) {
        //   if (Array.isArray(response.user.auth_token)) {
        //     this.authorization = response.user.auth_token[0];
        //   } else {
        //     this.authorization = response.user.auth_token;
        //   }
        //   this.isSessionValid = true;
        // }
        if (response?.profiles) {
            this.selectedProfile = response.profiles[0];
        }
        this.organisation = response.organisation;
        this.isSessionValid = true;
        this.serverUrl = response.api_endpoint;
        this.setObjectReferences();
    }
    /**
     * Customer User Registration
     * @param email
     * @param password
     * @param firstName
     * @param lastName
     * @param companyName
     * @param acceptTermsAndConditions
     */
    async customerUserRegistration(email, password, firstName, lastName, companyName, phone, acceptTermsAndConditions, accounting, address) {
        return new Promise((resolve, reject) => {
            internalRequest(this, 'POST', '/customer/auth/register', {
                requestData: {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                    company_name: companyName,
                    accounting: accounting,
                    address: address,
                    phone: phone,
                    accept_terms_and_condition: acceptTermsAndConditions,
                    skip_recaptcha: true,
                },
            })
                .then((data) => {
                this.onInfoChange(data.user);
                resolve(data.user);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Customer Forgot Password
     */
    async customerForgotPassword(email, recaptcha_response) {
        return new Promise((resolve, reject) => {
            internalRequest(this, 'POST', '/user-auth/forgot-password', {
                requestData: {
                    email: email.toLowerCase(),
                    captcha: {
                        captcha_name: 'default',
                        captcha_response: recaptcha_response,
                    },
                },
            })
                .then((data) => {
                resolve(data);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Set Password Via Token (Forgot Password)
     */
    async setPasswordViaToken(token, new_password) {
        return new Promise((resolve, reject) => {
            internalRequest(this, 'POST', '/user-auth/set-password-via-token', {
                requestData: {
                    token: token,
                    new_password: new_password,
                },
            })
                .then((data) => {
                resolve(data);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    getSelectedRegion() {
        return this.selectedRegion;
    }
    setRegionAndLocation(regionId, locationId) {
        this.selectedRegion = regionId;
        this.selectedLocation = locationId;
    }
    setObjectReferences() {
        this.Shipment = new Shipment(this);
        this.Setup = new Setup(this);
    }
    /**
     * Gets the initial configuration information
     * @returns {Promise<AxiosResponse<ShipthisApiResponse<InfoData>>>}
     */
    getInfo() {
        return this.internalRequest(this, 'GET', 'user-auth' + '/info');
    }
    searchLocation(query) {
        return this.internalRequest(this, 'GET', 'thirdparty/search-place-autocomplete?query-level=undefined&query=' +
            query);
    }
}
