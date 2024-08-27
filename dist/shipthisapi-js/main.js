"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipthisAPI = void 0;
const generic_1 = require("./collections/generic");
const request_1 = require("./utils/request");
const shipment_1 = require("./collections/shipment");
const setup_1 = require("./collections/setup");
class ShipthisAPI {
    constructor(init) {
        this.serverUrl = 'https://api.shipthis.co';
        this.base_api_endpoint = 'https://api.shipthis.co';
        this.file_upload_api_endpoint = 'https://upload.shipthis.co/api/v3/file-upload';
        this.profiles = [];
        this.internalRequest = request_1.internalRequest;
        this.getListGeneric = generic_1.getListGeneric;
        this.uploadFile = request_1.uploadFile;
        this.getListGenericCollection = generic_1.getListGenericCollection;
        this.getSearchListCollection = generic_1.getSearchListCollection;
        this.getFullSearchListCollection = generic_1.getFullSearchListCollection;
        this.getOneGenericCollectionItem = generic_1.getOneGenericCollectionItem;
        this.createGenericCollectionItem = generic_1.createGenericCollectionItem;
        this.updateGenericCollectionItem = generic_1.updateGenericCollectionItem;
        this.deleteGenericCollectionItem = generic_1.deleteGenericCollectionItem;
        this.getExchangeRateForCurrency = generic_1.getExchangeRateForCurrency;
        this.getGenericAutoComplete = generic_1.getGenericAutoComplete;
        this.getLocation = generic_1.getLocation;
        this.selectGoogleLocation = generic_1.selectGoogleLocation;
        this.setJobStatus = generic_1.setJobStatus;
        this.getJobStatus = generic_1.getJobStatus;
        this.getWorkflowReport = generic_1.getWorkflowReport;
        this.setWorkflowReport = generic_1.setWorkflowReport;
        this.conversation = generic_1.conversation;
        this.getReportView = generic_1.getReportView;
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
                    const region = this.organisation.regions.find((region) => region.region_id === this.selectedRegion);
                    if (!region) {
                        this.connectionErrorMessage = 'Region Not Found';
                        reject({
                            message: this.connectionErrorMessage,
                        });
                    }
                    const location = region.locations.find((location) => location.location_id === this.selectedLocation);
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
                    selectedLocation: this.selectedLocation
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
    async loginViaPassword(email, password) {
        return new Promise((resolve, reject) => {
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
        if (response?.profiles) {
            this.selectedProfile = response.profiles[0];
        }
        this.organisation = response.organisation;
        this.isSessionValid = true;
        this.serverUrl = response.api_endpoint;
        this.setObjectReferences();
    }
    async customerUserRegistration(email, password, firstName, lastName, companyName, phone, acceptTermsAndConditions, accounting, address) {
        return new Promise((resolve, reject) => {
            (0, request_1.internalRequest)(this, 'POST', '/customer/auth/register', {
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
    async customerForgotPassword(email, recaptcha_response) {
        return new Promise((resolve, reject) => {
            (0, request_1.internalRequest)(this, 'POST', '/user-auth/forgot-password', {
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
    async setPasswordViaToken(token, new_password) {
        return new Promise((resolve, reject) => {
            (0, request_1.internalRequest)(this, 'POST', '/user-auth/set-password-via-token', {
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
        this.Shipment = new shipment_1.Shipment(this);
        this.Setup = new setup_1.Setup(this);
    }
    getInfo() {
        return this.internalRequest(this, 'GET', 'user-auth' + '/info');
    }
    searchLocation(query) {
        return this.internalRequest(this, 'GET', 'thirdparty/search-place-autocomplete?query-level=undefined&query=' +
            query);
    }
}
exports.ShipthisAPI = ShipthisAPI;
//# sourceMappingURL=main.js.map