import {
  createGenericCollectionItem,
  deleteGenericCollectionItem,
  getListGenericCollection,
  getOneGenericCollectionItem,
  getExchangeRateForCurrency,
  getGenericAutoComplete,
  getLocation,
  conversation,
  getReportView,
  updateGenericCollectionItem,
  selectGoogleLocation,
  getListGeneric,
} from './collections/generic';
import { ApiOptions } from './interfaces/api.interface';
import { internalRequest, uploadFile } from './utils/request';
import { Shipment } from './collections/shipment';
import { Organisation } from './interfaces/info.interface';
import { Invoice } from './collections/invoice';
import { Setup } from './collections/setup';

export class ShipthisAPI {
  serverUrl = 'https://api.shipthis.co';

  base_api_endpoint = 'https://api.shipthis.co/api/v3/';
  file_upload_api_endpoint = 'https://upload.shipthis.co/file_upload';
  xApiKey: string;
  authorization: string;
  organisationId: string;
  organisation: Organisation;
  userType: string;
  selectedRegion: string;
  selectedLocation: string;
  profiles = [];
  selectedProfile;
  isSessionValid: boolean;

  public internalRequest = internalRequest;
  public getListGeneric = getListGeneric;
  public uploadFile = uploadFile;
  public getListGenericCollection = getListGenericCollection;
  public getOneGenericCollectionItem = getOneGenericCollectionItem;
  public createGenericCollectionItem = createGenericCollectionItem;
  public updateGenericCollectionItem = updateGenericCollectionItem;
  public deleteGenericCollectionItem = deleteGenericCollectionItem;
  public getExchangeRateForCurrency = getExchangeRateForCurrency;
  public getGenericAutoComplete = getGenericAutoComplete;
  public getLocation = getLocation;
  public selectGoogleLocation = selectGoogleLocation;
  public conversation = conversation;

  public getReportView = getReportView;
  /**
   * Collection Definition
   */
  public Shipment: Shipment;
  public Invoice: Invoice;
  public Setup: Setup;

  /**
   *  Initializer
   * @param init
   */
  constructor(init: ApiOptions) {
    this.organisationId = init.organisationId;
    this.userType = init.userType;
    this.xApiKey = init.xApiKey;
    this.authorization = init.authorization;
    this.selectedRegion = init.regionId || '';
    this.selectedLocation = init.locationId || '';
    this.isSessionValid = false;
    this.getInfo().then((infoResponse) => {
      this.onInfoChange(infoResponse);
    });
  }

  public connect(locationId = null) {
    return new Promise((resolve) => {
      this.getInfo().then((resp: any) => {
        this.onInfoChange(resp);
        if (!locationId) {
          this.selectedRegion = resp?.organisation?.regions[0]?.region_id;
          this.selectedLocation =
            resp?.organisation?.regions[0]?.locations[0]?.location_id;
        } else {
          let foundLocation = false;
          for (let i = 0; i < this.organisation.regions.length; i++) {
            for (
              let j = 0;
              j < this.organisation.regions[i].locations.length;
              j++
            ) {
              if (this.organisation.regions[i][j].location_id === locationId) {
                this.selectedRegion = this.organisation.regions[i].region_id;
                this.selectedLocation =
                  this.organisation.regions[i].locations[j].location_id;
                foundLocation = true;
                break;
              }
              if (foundLocation) {
                break;
              }
            }
          }
        }
        resolve({
          selectedRegion: this.selectedRegion,
          selectedLocation: this.selectedLocation,
        });
      });
    });
  }

  public disconnect() {
    this.xApiKey = null;
    this.authorization = null;
    this.isSessionValid = false;
  }

  // Session

  /**
   * Login Via Password
   * @param email
   * @param password
   */
  public async loginViaPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // TODO remove this on backend update
      const basePath = '/user-auth/login';
      this.internalRequest(this, 'POST', basePath, {
        requestData: {
          email: email.toLowerCase(),
          password: password,
        },
      })
        .then((data: any) => {
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

  onInfoChange(response: any) {
    if (response?.user?.auth_token) {
      if (Array.isArray(response.user.auth_token)) {
        this.authorization = response.user.auth_token[0];
      } else {
        this.authorization = response.user.auth_token;
      }
      this.isSessionValid = true;
    }
    if (response?.profiles) {
      this.selectedProfile = response.profiles[0];
    }
    this.organisation = response.organisation;
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
  public async customerUserRegistration(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    companyName: string,
    phone: string,
    acceptTermsAndConditions: boolean,
    accounting: any,
    address: any,
  ) {
    return new Promise<any>((resolve, reject) => {
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
        .then((data: any) => {
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
  public async customerForgotPassword(email: string) {
    return new Promise<any>((resolve, reject) => {
      internalRequest(this, 'POST', '/user-auth/forgot-password', {
        requestData: {
          email: email,
        },
      })
        .then((data: any) => {
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
  public async setPasswordViaToken(token: string, new_password: string) {
    return new Promise<any>((resolve, reject) => {
      internalRequest(this, 'POST', '/user-auth/set-password-via-token', {
        requestData: {
          token: token,
          new_password: new_password,
        },
      })
        .then((data: any) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public getSelectedRegion() {
    return this.selectedRegion;
  }

  public setRegionAndLocation(regionId: string, locationId: string) {
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
  public getInfo() {
    return this.internalRequest(this, 'GET', 'user-auth' + '/info');
  }

  public searchLocation(query: string) {
    return this.internalRequest(
      this,
      'GET',
      'thirdparty/search-place-autocomplete?query-level=undefined&query=' +
        query,
    );
  }
}
