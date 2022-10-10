import { referencePortPayload } from '../collections/request-body'
export const managePayload = (filter_txt = null, fields = null, display_fields = null, input_filters = null, general_filters = null) => {
    const updatedData = {
      fields: fields ?? referencePortPayload.fields,
      display_fields: display_fields ?? referencePortPayload.display_fields,
      filter_txt: filter_txt ?? referencePortPayload.filter_txt,
      input_filters: input_filters ?? referencePortPayload.input_filters,
      general_filters: general_filters ?? referencePortPayload.general_filters,
    }
    return updatedData
  }