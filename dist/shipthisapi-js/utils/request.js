"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.internalRequest = void 0;
const axios_1 = require("axios");
const internalRequest = async (obj, method, path, options) => {
    if (path.charAt(0) === '/') {
        path = path.substring(1);
    }
    const headers = {
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
    const config = {
        method,
        url: obj.base_api_endpoint + path + ((query_params) ? '?' + query_params : ''),
        headers,
        params: options?.params || {}
    };
    if (['post', 'POST', 'put', 'PUT', 'patch', 'PATCH'].includes(method)) {
        config.data = options?.requestData || {};
    }
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
const uploadFile = async (obj, imagefile) => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    if (obj.authorization) {
        headers['authorization'] = obj.authorization;
        headers['authToken'] = obj.authorization;
    }
    const formData = new FormData();
    formData.append("image", imagefile.files[0]);
    const result = await axios_1.default.post('upload_file', formData, {
        headers: headers
    });
    if (result.status === 200 && result?.data?.success) {
        return result?.data?.data;
    }
    else {
        console.log(result.data);
        throw new Error('File Upload Error');
    }
};
exports.uploadFile = uploadFile;
