import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from 'axios';
import { RequestOptions } from '../interfaces/api.interface.js';
import { ShipthisAPI } from '../main.js';

const prepareHeaders = async (obj: ShipthisAPI) => {
  const headers: AxiosRequestHeaders | any = {
    organisation: obj.organisationId,
    usertype: obj.userType,
    region: obj.selectedRegion || '',
    location: obj.selectedLocation || '',
  };
  if (obj.xApiKey) {
    headers['x-api-key'] = obj.xApiKey || '';
  }
  if (obj.authorization) {
    headers['authorization'] = obj.authorization || '';
  }
  return headers;
};

const internalRequest = async (
  obj: ShipthisAPI,
  method: Method,
  path: string,
  options?: RequestOptions,
) => {
  // console.log("Request",obj.isConnectionValid);
  if (obj.isSessionValid && !obj.isConnectionValid) {
    throw Error(obj.connectionErrorMessage);
  }

  if (path.charAt(0) === '/') {
    path = path.substring(1);
  }
  const headers = await prepareHeaders(obj);
  headers['Access-Control-Allow-Origin'] = '*';
  headers['Access-Control-Allow-Credentials'] = true;
  const query_params = options?.queryParams || null;
  console.log('headers', headers);
  const config: AxiosRequestConfig = {
    method,
    url:
      (obj.serverUrl || obj.base_api_endpoint) +
      '/api/v3/' +
      path +
      (query_params ? '?' + query_params : ''),
    headers,
    params: options?.params || {},
  };
  if (['post', 'POST', 'put', 'PUT', 'patch', 'PATCH'].includes(method)) {
    config.data = options?.requestData || {};
  }
  const result: AxiosResponse = await axios.request(config);
  if (result.status === 200 && result?.data?.success) {
    return result?.data?.data;
  } else {
    if (result.data.errors) {
      if (typeof result?.data?.errors[0]?.message === 'string') {
        throw new Error(result?.data?.errors[0]?.message);
      } else {
        throw new Error(JSON.stringify(result?.data?.errors[0]));
      }
    }
  }
};

/**
 * Upload file
 * @param obj Shipthis Object
 * @param file File to be uploaded
 */
const uploadFile = async (obj: ShipthisAPI, file: File) => {
  const headers = await prepareHeaders(obj);
  headers['Content-Type'] = 'multipart/form-data';
  const formData = new FormData();
  formData.append('file', file);
  const result = await axios.post(obj.file_upload_api_endpoint, formData, {
    headers: headers,
  });
  if (result.status === 200) {
    return result?.data;
  } else {
    console.log(result.data);
    throw new Error('File Upload Error');
  }
};

export { internalRequest, uploadFile };
