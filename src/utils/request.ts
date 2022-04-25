import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { RequestOptions } from '../interfaces/api.interface';
import { ShipthisAPI } from '../main';

const internalRequest = async(obj: ShipthisAPI, method: Method, path: string, options?: RequestOptions) => {
  if (path.charAt(0) === '/') {
    path = path.substring(1);
  }
  const headers: Record<string, any> = {
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Credentials": true,
    "organisation": obj.organisationId,
    "usertype": obj.userType,
    "region": obj.selectedRegion || '',
    "location": obj.selectedLocation || '',
  };
  if (obj.authorization) {
    headers['authorization'] = obj.authorization;
  }
  if (obj.xApiKey) {
    headers['x-api-key'] = obj.xApiKey || '';
  }

  const query_params = options?.queryParams || null;
  const config: AxiosRequestConfig = {
    method,
    url: obj.base_api_endpoint + path + ((query_params) ? '?' + query_params : ''),
    headers,
    params: options?.params || {}
  }
  if (['post', 'POST', 'put', 'PUT', 'patch', 'PATCH'].includes(method)) {
    config.data = options?.requestData || {};
  }
  const result: AxiosResponse = await axios.request(config);
  if (result.status === 200 && result?.data?.success) {
    return result?.data?.data;
  } else {
    console.log(result.data)
    throw new Error('Some errror');
  }
}

const uploadFile = async(obj: ShipthisAPI, imagefile: any) => {
  const headers: Record<string, any> = {
    'Content-Type': 'multipart/form-data'
  }
  if (obj.authorization) {
    headers['authorization'] = obj.authorization;
    headers['authToken'] = obj.authorization;
  }
  const formData = new FormData();
  formData.append("image", imagefile.files[0]);
  const result = await axios.post('upload_file', formData, {
    headers: headers
  })
  if (result.status === 200 && result?.data?.success) {
    return result?.data?.data;
  } else {
    console.log(result.data);
    throw new Error('File Upload Error');
  }

}

export {
  internalRequest,
  uploadFile
}


