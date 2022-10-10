"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managePayload = void 0;
const request_body_1 = require("../collections/request-body");
const managePayload = (filter_txt = null, fields = null, display_fields = null, input_filters = null, general_filters = null) => {
    const updatedData = {
        fields: fields ?? request_body_1.referencePortPayload.fields,
        display_fields: display_fields ?? request_body_1.referencePortPayload.display_fields,
        filter_txt: filter_txt ?? request_body_1.referencePortPayload.filter_txt,
        input_filters: input_filters ?? request_body_1.referencePortPayload.input_filters,
        general_filters: general_filters ?? request_body_1.referencePortPayload.general_filters,
    };
    return updatedData;
};
exports.managePayload = managePayload;
