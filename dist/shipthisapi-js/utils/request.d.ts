import { Method } from 'axios';
import { RequestOptions } from '../interfaces/api.interface.js';
import { ShipthisAPI } from '../main.js';
declare const internalRequest: (obj: ShipthisAPI, method: Method, path: string, options?: RequestOptions) => Promise<any>;
/**
 * Upload file
 * @param obj Shipthis Object
 * @param file File to be uploaded
 */
declare const uploadFile: (obj: ShipthisAPI, file: File) => Promise<any>;
export { internalRequest, uploadFile };
