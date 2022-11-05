export declare enum SettingPages {
    Wifi = "wifi",
    DataRoaming = "data_roaming",
    LocationSource = "location_source",
    AppSettings = "app_settings",
    Bluetooth = "bluetooth",
    Notification = "notification",
    Security = "security",
    Sound = "sound",
    Settings = "settings",
    Date = "date",
    Display = "display",
    Accessibility = "accessibility",
    AddAccount = "add_account",
    AirplaneMode = "airplane_mode",
    APN = "apn",
    ApplicationDetails = "application_details",
    ApplicationDevelopment = "application_development",
    AppNotificationBubble = "app_notification_bubble",
    AppNotification = "app_notification",
    Search = "search",
    BatterySaver = "battery_saver",
    BiometricEnroll = "biometric_enroll",
    Captioning = "captioning",
    Cast = "cast",
    ChannelNotification = "channel_notification",
    ActionConditionProvider = "action_condition_provider",
    DataUsage = "data_usage",
    DeviceInfo = "device_info",
    Dream = "dream",
    HardKeyboard = "hard_keyboard",
    Home = "home",
    IgnoreBackgroundDataRestrictions = "ignore_background_data_restrictions",
    IgnoreBatteryOptimization = "ignore_battery_optimization",
    InputMethod = "input_method",
    InputMethodSubtype = "input_method_subtype",
    InternalStorage = "internal_storage",
    Locale = "locale",
    ManageAllApplications = "manage_all_applications",
    ManageAllFilesAccessPermission = "manage_all_files_access_permission",
    ManageApplication = "manage_application",
    ManageAppAllFilesAccessPermission = "manage_app_all_files_access_permission",
    ManageDefaultApps = "manage_default_apps",
    ManageOverlayPermission = "manage_overlay_permission",
    ManageUnknownAppSource = "manage_unknown_app_source",
    ManageWrite = "manage_write",
    MemoryCard = "memory_card",
    NetworkOperator = "network_operator",
    NFCsharings = "nfcsharings",
    NFCPayment = "nfc_payment",
    NFC = "nfc",
    NightDisplay = "night_display",
    NotificationAssistant = "notification_assistant",
    NotificationListenerDetail = "notification_listener_detail",
    ActionNotificationListener = "action_notification_listener",
    NotificationPolicyAccess = "notification_policy_access",
    ActionPrint = "action_print",
    Privacy = "privacy",
    ProcessWifiEasyConnectUri = "process_wifi_easy_connect_uri",
    QuickAccessWallet = "quick_access_wallet",
    QuickLaunch = "quick_launch",
    RequestIgnoreBatteryOptimizations = "request_ignore_battery_optimizations",
    RequestSetAutofillService = "request_set_autofill_service",
    ShowRegulatoryInfo = "show_regulatory_info",
    ShowWorkPolicyInfo = "show_work_policy_info",
    StorageVolumeAccess = "storage_volume_access",
    Sync = "sync",
    UsageAccess = "usage_access",
    UserDictionary = "user_dictionary",
    VoiceControllAirplaneMode = "voice_controll_airplane_mode",
    VoiceControllBatterySaverMode = "voice_controll_battery_saver_mode",
    VoiceControllDoNotDisturbMode = "voice_controll_do_not_disturb_mode",
    VoiceInput = "voice_input",
    VPN = "vpn",
    VrListener = "vr_listener",
    Webview = "webview",
    WifiAddNetworks = "wifi_add_networks",
    WifiIp = "wifi_ip",
    Wireless = "wireless",
    ZenModePriority = "zen_mode_priority"
}
declare type OpenSettingsType = {
    open(page: SettingPages): void;
};
declare const _default: OpenSettingsType;
export default _default;