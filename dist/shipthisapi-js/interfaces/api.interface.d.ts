export interface ApiEssentials {
    x_api_key: string;
    organisation_id: string;
    user_type: string;
    region_id: string;
    location_id: string;
}
export declare type UserType = 'employee' | 'customer' | 'vendor';
export interface ApiOptions {
    xApiKey: string;
    organisationId: string;
    userType: UserType;
    locationId?: string;
    regionId?: string;
}
export interface RequestOptions {
    queryParams?: string;
    requestData?: string;
    params?: any;
}
