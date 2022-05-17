"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.internalRequest = void 0;
const axios_1 = require("axios");
const prepareHeaders = async (obj) => {
    const headers = {
        "organisation": obj.organisationId,
        "usertype": obj.userType,
        "region": obj.selectedRegion || '',
        "location": obj.selectedLocation || '',
    };
    if (obj.authorization) {
        headers['authorization'] = obj.authorization;
        headers['authToken'] = obj.authorization;
    }
    if (obj.xApiKey) {
        headers['x-api-key'] = obj.xApiKey || '';
    }
    return headers;
};
const internalRequest = async (obj, method, path, options) => {
    if (path.charAt(0) === '/') {
        path = path.substring(1);
    }
    const headers = await prepareHeaders(obj);
    headers["Access-Control-Allow-Origin"] = '*';
    headers["Access-Control-Allow-Credentials"] = true;
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
    console.log(obj);
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
const uploadFile = async (obj, file) => {
    const headers = await prepareHeaders(obj);
    headers['Content-Type'] = 'multipart/form-data';
    const formData = new FormData();
    formData.append("image", file);
    const result = await axios_1.default.post(obj.file_upload_api_endpoint, formData, {
        headers: headers
    });
    if (result.status === 200) {
        return result?.data;
    }
    else {
        console.log(result.data);
        throw new Error('File Upload Error');
    }
};
exports.uploadFile = uploadFile;
