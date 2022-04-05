import axios, { AxiosRequestConfig } from 'axios';

export class ShipthisAPI {

  async makeRequest() {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: 'https://api.shipthis.co/api/v3/auth/info',
      headers: {},
    };
    return await axios.request(config);
  }
}
