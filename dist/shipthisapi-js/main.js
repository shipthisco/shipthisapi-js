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
        this.internalRequest = request_1.internalRequest;
        this.getListGenericCollection = generic_1.getListGenericCollection;
        this.getOneGenericCollectionItem = generic_1.getOneGenericCollectionItem;
        this.createGenericCollectionItem = generic_1.createGenericCollectionItem;
        this.updateGenericCollectionItem = generic_1.updateGenericCollectionItem;
        this.deleteGenericCollectionItem = generic_1.deleteGenericCollectionItem;
        this.xApiKey = init.xApiKey;
        this.organisationId = init.organisationId;
        this.userType = init.userType;
        this.selectedRegion = init.regionId || '';
        this.selectedLocation = init.locationId || '';
        this.getInfo()
            .then((infoResponse) => {
            this.organisation = infoResponse.organisation;
            this.serverUrl = infoResponse.api_endpoint;
        });
    }
    async connect(locationId = null) {
        return new Promise((resolve) => {
            this.getInfo()
                .then((resp) => {
                this.organisation = resp.organisation;
                this.serverUrl = resp.api_endpoint;
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
        return this.internalRequest(this, 'GET', '/auth/info');
    }
}
exports.ShipthisAPI = ShipthisAPI;
