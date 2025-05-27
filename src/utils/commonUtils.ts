import { referencePortPayload } from '../collections/request-body.js';
export const managePayload = (
  filter_txt?: string | null,
  fields?: string[] | null,
  display_fields?: string[] | null,
  input_filters?: string | null,
  general_filters?: string | null,
) => {
  const updatedData = {
    fields: fields ?? referencePortPayload.fields,
    display_fields: display_fields ?? referencePortPayload.display_fields,
    filter_txt: filter_txt ?? referencePortPayload.filter_txt,
    input_filters: input_filters ?? referencePortPayload.input_filters,
    general_filters: general_filters ?? referencePortPayload.general_filters,
  };
  return updatedData;
};
