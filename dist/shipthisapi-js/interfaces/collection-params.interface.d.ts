export interface CollectionParams {
    only?: string;
    count?: number;
    page?: number;
    multi_sort?: MultiSort[];
    output_type?: string;
    meta?: boolean;
    query_filter_v2?: any[];
    general_filter?: GeneralFilter;
    location?: string;
    region_override?: boolean;
    query?: string;
    query_level?: string;
    input_filters?: any;
    sort_by?: string;
    sort_order?: string;
    start_date?: number;
    end_date?: number;
    search_query?: string;
}
export interface GeneralFilter {
    job_status?: JobStatus;
}
export interface JobStatus {
    $nin?: string[];
}
export interface MultiSort {
    sort_by?: string;
    sort_order?: string;
}
export interface SelectGoogleLocationParams {
    placeId: string;
    description: string;
}
