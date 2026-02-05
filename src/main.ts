import {
  createGenericCollectionItem,
  deleteGenericCollectionItem,
  getListGenericCollection,
  getSearchListCollection,
  getFullSearchListCollection,
  getOneGenericCollectionItem,
  getExchangeRateForCurrency,
  getGenericAutoComplete,
  getLocation,
  conversation,
  createConversation,
  getConversations,
  getReportView,
  updateGenericCollectionItem,
  patchGenericCollectionItem,
  selectGoogleLocation,
  getListGeneric,
  setJobStatus,
  getJobStatus,
  getWorkflowReport,
  setWorkflowReport,
  bulkEdit,
  primaryWorkflowAction,
  secondaryWorkflowAction,
} from './collections/generic.js';
import { ApiOptions } from './interfaces/api.interface.js';
import { internalRequest, uploadFile } from './utils/request.js';
import { Shipment } from './collections/shipment.js';
import { Organisation, ShipthisLocation } from './interfaces/info.interface.js';
import { Invoice } from './collections/invoice.js';
import { Setup } from './collections/setup.js';
import { Quotation } from './collections/quotation.js';
import { Customer } from './collections/customer.js';

export class ShipthisAPI {
  serverUrl = 'https://api.shipthis.co';
  base_api_endpoint = 'https://api.shipthis.co';
  file_upload_api_endpoint = 'https://upload.shipthis.co/api/v3/file-upload';
  xApiKey?: string | null;
  authorization: string | undefined;
  organisationId: string;
  organisation: Organisation | undefined;
  userType: string;
  selectedRegion: string;
  selectedLocation: string;
  profiles = [];
  selectedProfile: any;
  isSessionValid: boolean | undefined;
  isConnectionValid: boolean;
  connectionErrorMessage: string | undefined;

  public internalRequest = internalRequest;
  public getListGeneric = getListGeneric;
  public uploadFile = uploadFile;
  public getListGenericCollection = getListGenericCollection;
  public getSearchListCollection = getSearchListCollection;
  public getFullSearchListCollection = getFullSearchListCollection;
  public getOneGenericCollectionItem = getOneGenericCollectionItem;
  public createGenericCollectionItem = createGenericCollectionItem;
  public updateGenericCollectionItem = updateGenericCollectionItem;
  public patchGenericCollectionItem = patchGenericCollectionItem;
  public deleteGenericCollectionItem = deleteGenericCollectionItem;
  public bulkEdit = bulkEdit;
  public primaryWorkflowAction = primaryWorkflowAction;
  public secondaryWorkflowAction = secondaryWorkflowAction;
  public getExchangeRateForCurrency = getExchangeRateForCurrency;
  public getGenericAutoComplete = getGenericAutoComplete;
  public getLocation = getLocation;
  public selectGoogleLocation = selectGoogleLocation;
  public setJobStatus = setJobStatus;
  public getJobStatus = getJobStatus;
  public getWorkflowReport = getWorkflowReport;
  public setWorkflowReport = setWorkflowReport;
  public conversation = conversation;
  public createConversation = createConversation;
  public getConversations = getConversations;

  public getReportView = getReportView;
  /**
   * Collection Definition
   */
  public Shipment!: Shipment;
  public Invoice!: Invoice;
  public Setup!: Setup;
  public Quotation!: Quotation;
  public Customer!: Customer;

  /**
   *  Initializer
   * @param init
   */
  constructor(init: ApiOptions) {
    this.organisationId = init.organisationId;
    this.userType = init.userType;
    this.xApiKey = init.xApiKey;
    this.selectedRegion = init.regionId || '';
    this.selectedLocation = init.locationId || '';
    this.isConnectionValid = false;
  }

  public connect() {
    return new Promise((resolve, reject) => {
      this.getInfo()
        .then((resp: any) => {
          this.onInfoChange(resp);
          if (!this.selectedLocation) {
            this.selectedRegion = resp?.organisation?.regions[0]?.region_id;
            this.selectedLocation =
              resp?.organisation?.regions[0]?.locations[0]?.location_id;
            this.isConnectionValid = true;
          } else {
            const region = this.organisation?.regions?.find(
              (region) => region.region_id === this.selectedRegion,
            );

            if (!region) {
              this.connectionErrorMessage = 'Region Not Found';
              reject({
                message: this.connectionErrorMessage,
              });
            }
            const location = region?.locations?.find(
              (location: ShipthisLocation) =>
                location.location_id === this.selectedLocation,
            );
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

  public disconnect() {
    this.xApiKey = null;
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
  public async customerForgotPassword(
    email: string,
    recaptcha_response?: string,
  ) {
    return new Promise<any>((resolve, reject) => {
      internalRequest(this, 'POST', '/user-auth/forgot-password', {
        requestData: {
          email: email.toLowerCase(),
          captcha: {
            captcha_name: 'default',
            captcha_response: recaptcha_response,
          },
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
