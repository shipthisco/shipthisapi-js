export interface ApiEssentials {
  x_api_key: string,
  organisation_id: string,
  user_type: string,
  region_id: string,
  location_id: string
}

export type UserType = 'employee' | 'customer' | 'vendor';

export interface ApiOptions {
  organisationId: string,
  userType: UserType,
  xApiKey?: string,
  locationId?: string,
  regionId?: string;
}

export interface RequestOptions {
  queryParams?: string,
  requestData?: any,
  params?: any,
}
