import axios, { Method } from "axios";

export class ShipthisAPI {
  base_api_endpoint = 'https://api.shipthis.co/api/v3/';
  x_api_key;
  organisation_id;
  base_url;
  user_type;
  region_id;
  location_id;

  constructor(x_api_key: string, organisation_id: string, base_url: string, user_type: string, region_id: string = null, location_id: string = null) {
    this.x_api_key = x_api_key
    this.organisation_id = organisation_id
    this.base_url = base_url
    this.user_type = user_type
    this.region_id = region_id;
    this.location_id = location_id;
  }

  private async makeRequest(method: Method, path: string, query_params: string = null, request_data = null) {
    const headers = {
      'x-api-key': this.x_api_key,
      "organisation": this.organisation_id,
      "user_type": this.user_type,
      "location": this.location_id
    }
    const response = await axios.request({
      method: method,
      url: this.base_api_endpoint + path + '?' + query_params,
      headers: headers,
      data: request_data || {}
    })
    let raw_response = {};
    if (response.status === 200) {
      raw_response = response.data;
      if (raw_response["success"]) {
        return raw_response['data']
      }
    }
  }

  public setRegionLocation(region_id: string, location_id: string) {
    this.region_id = region_id;
    this.location_id = location_id;
  }

  public get_info(): any {
    const info_response = this.makeRequest('GET', 'auth/info');
    return info_response;
  }
}
