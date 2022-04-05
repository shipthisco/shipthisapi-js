import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { ApiOptions, RequestOptions } from './interfaces/api.interface';
import { CollectionParams } from './interfaces/collection-params.interface';
import { CollectionResponse } from './interfaces/collection.interface';
import { InfoData, Region, ShipthisApiResponse, ShipthisLocation } from './interfaces/info.interface';

export class ShipthisAPI {
  private readonly base_api_endpoint = 'https://api.shipthis.co/api/v3/';
  x_api_key;
  organisation_id;
  user_type;
  private _region_id;
  private _location_id;

  private _regions: Region[] = [];
  private _locations: (ShipthisLocation & {region?: any})[] = [];
  private isRegionsFetched = false;

  get region_id() {
    return this._region_id;
  }

  get location_id() {
    return this._location_id;
  }
  set location_id(value: string) {
    this._location_id = value;
  }

  constructor(init: ApiOptions) {
    Object.assign(this, init);
  }

  private async makeRequest<T>(method: Method, path: string, options?: RequestOptions) {
    if (path.charAt(0) === '/') {
      path = path.substring(1);
    }
    const headers: Record<string, string> = {
      'x-api-key': this.x_api_key,
      "organisation": this.organisation_id,
      "user_type": this.user_type,
      "region": this._region_id || '',
      "location": this._location_id || '',
    };
    const query_params = options?.queryParams || null;
    const config: AxiosRequestConfig = {
      method,
      url: this.base_api_endpoint + path + ((query_params) ? '?' + query_params : ''),
      headers,
      params: options?.params || {}
    }
    if (['post', 'POST', 'put', 'PUT', 'patch', 'PATCH'].includes(method)) {
      config.data = options?.requestData || {};
    }
    const result: AxiosResponse<T> = await axios.request(config);
    const _data: any = result?.data;
    const data: any = _data?.data;

    if (data?.organisation?.regions > this._regions) {
      this._regions = data?.organisation?.regions;
      this._locations = this._regions?.reduce((acc, region) => {
        if (region?.locations) {
          const locations = region?.locations?.map((location) => {
            const loc: any = {...location};
            const _region = region;
            delete _region?.locations;
            loc.region = _region;
            return loc;
          });
          return [...acc, ...locations];
        } else {
          return acc;
        }
      }, [] as ShipthisLocation[]);
      this.isRegionsFetched = true;
    }
    return result;
  }

  /**
   * Returns an array of available regions for an organisation.
   * If force is enabled, then the regions are fetched with an api call
   * otherwise it returns an already cached list of available regions.
   * The user needs to make at least one getInfo() api call to populate
   * the regions.
   * @param {boolean} force
   * @returns {Promise<Region[]>}
   */
  public async getAvailableRegions(force = false) {
    if (!this.isRegionsFetched) {
      if (!force) {
        throw new Error('At least one info call needed to fetch regions data');
      }
      await this.getInfo();
    }
    return this._regions;
  }

  /**
   * Returns an array of available locations for an organisation.
   * If force is enabled, then the locations are fetched with an api call
   * otherwise it returns an already cached list of available locations.
   * The user needs to make at least one getInfo() api call to populate
   * the locations.
   * @param {boolean} force
   * @returns {Promise<(Location & {region?: any})[]>}
   */
  public async getAvailableLocations(force = false) {
    if (!this.isRegionsFetched) {
      if (!force) {
        throw new Error('At least one info call needed to fetch locations data');
      }
      await this.getInfo();
    }
    return this._locations;
  }

  /**
   * Sets the location in the header required for some API calls
   * @param {string} location_id
   * @param {string} region_id
   */
  public setLocation(location_id: string, region_id?: string) {
    this._location_id = location_id;
    if (!region_id) {
      this._region_id = this._locations?.find((location) =>
        location?.location_id === location_id)?.region?.region_id;
    }
  }

  /**
   * Gets the initial configuration information
   * @returns {Promise<AxiosResponse<ShipthisApiResponse<InfoData>>>}
   */
  public getInfo() {
    return this.makeRequest<ShipthisApiResponse<InfoData>>('GET', '/auth/info');
  }

  /**
   * Gets the specified collection
   * @param {string} collectionName
   * @param params
   * @returns {Promise<any>}
   */
  public getCollection<CollectionName>(collectionName: string, params: CollectionParams | any = {}) {
    return this.makeRequest<ShipthisApiResponse<CollectionResponse<CollectionName>>>(
      'GET', '/incollection/' + collectionName, { params });
  }

  public createCollectionItem<T>(collectionName: string, itemData: string) {
    return this.makeRequest<ShipthisApiResponse<T>>(
      'POST',
      '/incollection/' + collectionName,
      { requestData: itemData }
    )
  }

  public updateCollectionItem<T>(collectionName: string, objectId: string, updatedData: string) {
    return this.makeRequest<ShipthisApiResponse<T>>(
      'PUT',
      `/incollection/${collectionName}/${objectId}`,
      { requestData: updatedData }
    );
  }

  public deleteCollectionItem(collectionName: string, objectId: string) {
    return this.makeRequest(
      'DELETE',
      `/incollection/${collectionName}/${objectId}`,
    );
  }
}
