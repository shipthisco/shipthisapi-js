"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipthisAPI = void 0;
const generic_1 = require("./collections/generic");
const request_1 = require("./utils/request");
const shipment_1 = require("./collections/shipment");
class ShipthisAPI {
    constructor(init) {
        this.serverUrl = 'https://api.shipthis.co';
        this.base_api_endpoint = 'https://api.shipthis.co/api/v3/';
        this.file_upload_api_endpoint = 'https://upload.shipthis.co/file_upload';
        this.profiles = [];
        this.internalRequest = request_1.internalRequest;
        this.uploadFile = request_1.uploadFile;
        this.getListGenericCollection = generic_1.getListGenericCollection;
        this.getOneGenericCollectionItem = generic_1.getOneGenericCollectionItem;
        this.createGenericCollectionItem = generic_1.createGenericCollectionItem;
        this.updateGenericCollectionItem = generic_1.updateGenericCollectionItem;
        this.deleteGenericCollectionItem = generic_1.deleteGenericCollectionItem;
        this.organisationId = init.organisationId;
        this.userType = init.userType;
        this.xApiKey = init.xApiKey;
        this.authorization = init.authorization;
        this.selectedRegion = init.regionId || '';
        this.selectedLocation = init.locationId || '';
        this.getInfo()
            .then((infoResponse) => {
            this.onInfoChange(infoResponse);
        });
    }
    connect(locationId = null) {
        return new Promise((resolve) => {
            this.getInfo()
                .then((resp) => {
                this.onInfoChange(resp);
                if (!locationId) {
                    this.selectedRegion = resp?.organisation?.regions[0]?.region_id;
                    this.selectedLocation = resp?.organisation?.regions[0]?.locations[0]?.location_id;
                }
                else {
                    let foundLocation = false;
                    for (let i = 0; i < this.organisation.regions.length; i++) {
                        for (let j = 0; j < this.organisation.regions[i].locations.length; j++) {
                            if (this.organisation.regions[i][j].location_id === locationId) {
                                this.selectedRegion = this.organisation.regions[i].region_id;
                                this.selectedLocation = this.organisation.regions[i].locations[j].location_id;
                                foundLocation = true;
                                break;
                            }
                            if (foundLocation) {
                                break;
                            }
                        }
                    }
                    if (!foundLocation) {
                        new Error('Location id does not exist , check available location ids');
                    }
                }
                this.setObjectReferences();
                resolve({ 'selectedRegion': this.selectedRegion, 'selectedLocation': this.selectedLocation });
            });
        });
    }
    async loginViaPassword(email, password) {
        return new Promise((resolve, reject) => {
            let basePath = '';
            if (this.userType === 'employee') {
                basePath = '/auth';
            }
            else if (this.userType === 'customer') {
                basePath = '/customer/auth';
            }
            else if (this.userType === 'vendor') {
                basePath = '/vendor/auth';
            }
            basePath += '/login';
            this.internalRequest(this, 'POST', basePath, {
                requestData: {
                    email: email.toLowerCase(),
                    password: password
                }
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
        if (response?.user?.auth_token) {
            if (Array.isArray(response.user.auth_token)) {
                this.authorization = response.user.auth_token[0];
            }
            else {
                this.authorization = response.user.auth_token;
            }
        }
        if (response?.profiles) {
            this.selectedProfile = response.profiles[0];
        }
        this.organisation = response.organisation;
        this.serverUrl = response.api_endpoint;
        this.setObjectReferences();
    }
    async customerUserRegistration(email, password, firstName, lastName, companyName, acceptTermsAndConditions) {
        return new Promise((resolve, reject) => {
            (0, request_1.internalRequest)(this, 'POST', '/customer/auth/register', {
                requestData: {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                    company_name: companyName,
                    accept_terms_and_condition: acceptTermsAndConditions,
                    skip_recaptcha: true
                }
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
    getSelectedRegion() {
        return this.selectedRegion;
    }
    setRegionAndLocation(regionId, locationId) {
        this.selectedRegion = regionId;
        this.selectedLocation = locationId;
    }
    setObjectReferences() {
        this.Shipment = new shipment_1.Shipment(this);
    }
    getInfo() {
        let basePath = '';
        if (this.userType === 'employee') {
            basePath = '/auth';
        }
        else if (this.userType === 'customer') {
            basePath = '/customer/auth';
        }
        else if (this.userType === 'vendor') {
            basePath = '/vendor/auth';
        }
        return this.internalRequest(this, 'GET', basePath + '/info');
    }
    searchLocation(query) {
        return this.internalRequest(this, 'GET', 'thirdparty/search-place-autocomplete?query-level=undefined&query=' + query);
    }
}
exports.ShipthisAPI = ShipthisAPI;
