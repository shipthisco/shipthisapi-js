export interface ShipthisApiResponse<T> {
    success?: boolean;
    data?: T;
}
export interface InfoData {
    organisation?: Organisation;
    api_endpoint?: string;
    secondary_api_endpoint?: string;
    file_upload_endpoint?: string;
}
export interface Organisation {
    id?: ID;
    name?: string;
    region?: string;
    plan?: string;
    erp_title?: string;
    erp_logo?: string;
    favicon?: string;
    erp_media_url?: null;
    website?: string;
    email?: string;
    phone_no?: null;
    preference?: Preference;
    customer_app_preference?: null;
    regions?: Region[];
    admins?: any[];
    status?: string;
    settings?: null;
    deployment_name?: string;
    deployment_region?: null;
    third_party_public_settings?: ThirdPartyPublicSettings;
    theme?: Theme;
    suspended?: null;
    enable_advanced_settings_access?: null;
    override_api_endpoint?: boolean;
    scheduled_deletion_date?: null;
    activated_on?: null;
    subscription_plan?: SubscriptionPlan;
    subscription?: Subscription;
    plan_settings?: null;
}
export interface ID {
    $oid?: string;
}
export interface Preference {
    layout?: null;
    theme?: null;
    primary_color?: null;
    login_banner?: string;
    customer_theme?: null;
    vendor_theme?: null;
    custom_themes?: any[];
    session_page_layout?: null;
    chat_layout?: null;
    public_track_banner?: null;
    customer_app?: CustomerApp;
    operation_preference?: null;
    accounting_preference?: AccountingPreference;
    shipment_preference?: ShipmentPreference;
    quotation_preference?: QuotationPreference;
    report_preference?: ReportPreference;
}
export interface AccountingPreference {
    quick_book_sync_start_date?: null;
    enable_cost_house_split?: boolean;
    hide_profit_loss_for_non_admin?: boolean;
}
export interface CustomerApp {
    enable_microsoft_sso?: boolean;
    enable_google_sso?: boolean;
    enable_customer_portal_signup?: boolean;
}
export interface QuotationPreference {
    disable_quotation_card?: boolean;
}
export interface ReportPreference {
    show_logo_full_line?: boolean;
    show_organisation_details_left_aligned?: boolean;
    layout?: null;
}
export interface ShipmentPreference {
    use_cargosmart?: boolean;
    use_premium_tracking?: boolean;
}
export interface Region {
    name?: string;
    region_id?: string;
    country?: null;
    email?: null;
    phone?: null;
    currency?: string;
    timezone?: null;
    company_full_name?: null;
    company_local_name?: null;
    configs?: RegionConfigs;
    opening_balance_date?: ShipthisDate;
    transaction_locked_date?: null;
    locations?: ShipthisLocation[];
}
export interface RegionConfigs {
    custom_fields?: any[];
    date_format?: string;
}
export interface ShipthisLocation {
    location_id?: string;
    name?: string;
    country?: null;
    email?: null;
    phone?: null;
    timezone?: null;
    company_full_name?: null;
    company_local_name?: null;
    logo_url?: null;
    configs?: LocationConfigs;
    default_customer_id?: null;
    default_operation_executive?: null;
}
export interface LocationConfigs {
    custom_fields?: any[];
    custom?: Theme;
    date_format?: string;
    address?: Address;
    financial?: Financial;
}
export interface Address {
    address_line_1?: null;
    address_line_2?: null;
    city?: null;
    country?: null;
    pincode?: null;
}
export declare type Theme = any;
export interface Financial {
    tin_no?: null;
    financial_year_start_day?: string;
    financial_year_start_month?: string;
}
export interface ShipthisDate {
    $date?: number;
}
export interface Subscription {
    active_plan?: null;
    status?: null;
    message?: null;
    scid?: string;
    auto_billing?: boolean;
    start_date?: null;
    end_date?: null;
}
export interface SubscriptionPlan {
    plan_id?: null;
    plan_name?: null;
    billing_required?: boolean;
    multi_branch?: boolean;
    web_app?: boolean;
    is_trial?: boolean;
    start_date?: null;
    end_date?: null;
    subscription_status?: null;
    subscription_message?: null;
    amount_due?: number;
    scid?: null;
    auto_update_status?: null;
}
export interface ThirdPartyPublicSettings {
    google_public_setting?: GooglePublicSetting;
    google_analytics_setting?: GoogleAnalyticsSetting;
    public_chat_setting?: PublicChatSetting;
    disable_st_branding?: boolean;
    enable_customer_quote_payment?: boolean;
    enable_customer_quote_booking?: boolean;
    enable_customer_payment?: boolean;
    addon_connections?: Theme;
    enable_customer_portal_signup?: boolean;
    enable_quick_books?: boolean;
}
export interface GoogleAnalyticsSetting {
    enable_analytics?: boolean;
    ga_tracking_id_erp?: null;
    ga_tracking_id_mobile?: null;
    ga_tracking_id_web_app?: null;
}
export interface GooglePublicSetting {
    enable_google_login?: boolean;
    client_id?: null;
    discovery_docs?: any[];
    scope?: any[];
}
export interface PublicChatSetting {
    active_provider?: any;
    chat_enabled?: boolean;
    zulip_websocket_endpoint?: any;
    zulip_chat_endpoint?: any;
    rocketchat_websocket_endpoint?: any;
    rocketchat_chat_endpoint?: any;
}
