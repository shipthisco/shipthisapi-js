export interface ApiEssentials {
  x_api_key: string,
  organisation_id: string,
  user_type: string,
  region_id: string,
  location_id: string
}

export type UserType = 'employee' | 'customer' | 'vendor';

export interface ApiOptions {
  x_api_key: string,
  organisation_id: string,
  user_type: UserType,
  location_id?: string,
}

export interface RequestOptions {
  queryParams?: string,
  requestData?: string,
  params?: any,
}
