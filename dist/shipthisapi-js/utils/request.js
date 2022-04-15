"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalRequest = void 0;
const axios_1 = require("axios");
const internalRequest = async (obj, method, path, options) => {
    if (path.charAt(0) === '/') {
        path = path.substring(1);
    }
    const headers = {
        "organisation": obj.organisationId,
        "user_type": obj.userType,
        "region": obj.selectedRegion || '',
        "location": obj.selectedLocation || '',
    };
    if (obj.authToken) {
        headers['authorization'] = obj.authToken;
    }
    if (obj.xApiKey) {
        headers['x-api-key'] = obj.xApiKey || '';
    }
    const query_params = options?.queryParams || null;
    const config = {
        method,
        url: obj.base_api_endpoint + path + ((query_params) ? '?' + query_params : ''),
        headers,
        params: options?.params || {}
    };
    if (['post', 'POST', 'put', 'PUT', 'patch', 'PATCH'].includes(method)) {
        config.data = options?.requestData || {};
    }
    console.log(config);
    const result = await axios_1.default.request(config);
    if (result.status === 200 && result?.data?.success) {
        return result?.data?.data;
    }
    else {
        console.log(result.data);
        throw new Error('Some errror');
    }
};
exports.internalRequest = internalRequest;
