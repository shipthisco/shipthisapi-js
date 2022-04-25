import { Method } from 'axios';
import { RequestOptions } from '../interfaces/api.interface';
import { ShipthisAPI } from '../main';
declare const internalRequest: (obj: ShipthisAPI, method: Method, path: string, options?: RequestOptions) => Promise<any>;
declare const uploadFile: (obj: ShipthisAPI, imagefile: any) => Promise<any>;
export { internalRequest, uploadFile };
