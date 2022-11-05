"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SettingPages = void 0;

var _reactNative = require("react-native");

let SettingPages;
exports.SettingPages = SettingPages;

(function (SettingPages) {
  SettingPages["Wifi"] = "wifi";
  SettingPages["DataRoaming"] = "data_roaming";
  SettingPages["LocationSource"] = "location_source";
  SettingPages["AppSettings"] = "app_settings";
  SettingPages["Bluetooth"] = "bluetooth";
  SettingPages["Notification"] = "notification";
  SettingPages["Security"] = "security";
  SettingPages["Sound"] = "sound";
  SettingPages["Settings"] = "settings";
  SettingPages["Date"] = "date";
  SettingPages["Display"] = "display";
  SettingPages["Accessibility"] = "accessibility";
  SettingPages["AddAccount"] = "add_account";
  SettingPages["AirplaneMode"] = "airplane_mode";
  SettingPages["APN"] = "apn";
  SettingPages["ApplicationDetails"] = "application_details";
  SettingPages["ApplicationDevelopment"] = "application_development";
  SettingPages["AppNotificationBubble"] = "app_notification_bubble";
  SettingPages["AppNotification"] = "app_notification";
  SettingPages["Search"] = "search";
  SettingPages["BatterySaver"] = "battery_saver";
  SettingPages["BiometricEnroll"] = "biometric_enroll";
  SettingPages["Captioning"] = "captioning";
  SettingPages["Cast"] = "cast";
  SettingPages["ChannelNotification"] = "channel_notification";
  SettingPages["ActionConditionProvider"] = "action_condition_provider";
  SettingPages["DataUsage"] = "data_usage";
  SettingPages["DeviceInfo"] = "device_info";
  SettingPages["Dream"] = "dream";
  SettingPages["HardKeyboard"] = "hard_keyboard";
  SettingPages["Home"] = "home";
  SettingPages["IgnoreBackgroundDataRestrictions"] = "ignore_background_data_restrictions";
  SettingPages["IgnoreBatteryOptimization"] = "ignore_battery_optimization";
  SettingPages["InputMethod"] = "input_method";
  SettingPages["InputMethodSubtype"] = "input_method_subtype";
  SettingPages["InternalStorage"] = "internal_storage";
  SettingPages["Locale"] = "locale";
  SettingPages["ManageAllApplications"] = "manage_all_applications";
  SettingPages["ManageAllFilesAccessPermission"] = "manage_all_files_access_permission";
  SettingPages["ManageApplication"] = "manage_application";
  SettingPages["ManageAppAllFilesAccessPermission"] = "manage_app_all_files_access_permission";
  SettingPages["ManageDefaultApps"] = "manage_default_apps";
  SettingPages["ManageOverlayPermission"] = "manage_overlay_permission";
  SettingPages["ManageUnknownAppSource"] = "manage_unknown_app_source";
  SettingPages["ManageWrite"] = "manage_write";
  SettingPages["MemoryCard"] = "memory_card";
  SettingPages["NetworkOperator"] = "network_operator";
  SettingPages["NFCsharings"] = "nfcsharings";
  SettingPages["NFCPayment"] = "nfc_payment";
  SettingPages["NFC"] = "nfc";
  SettingPages["NightDisplay"] = "night_display";
  SettingPages["NotificationAssistant"] = "notification_assistant";
  SettingPages["NotificationListenerDetail"] = "notification_listener_detail";
  SettingPages["ActionNotificationListener"] = "action_notification_listener";
  SettingPages["NotificationPolicyAccess"] = "notification_policy_access";
  SettingPages["ActionPrint"] = "action_print";
  SettingPages["Privacy"] = "privacy";
  SettingPages["ProcessWifiEasyConnectUri"] = "process_wifi_easy_connect_uri";
  SettingPages["QuickAccessWallet"] = "quick_access_wallet";
  SettingPages["QuickLaunch"] = "quick_launch";
  SettingPages["RequestIgnoreBatteryOptimizations"] = "request_ignore_battery_optimizations";
  SettingPages["RequestSetAutofillService"] = "request_set_autofill_service";
  SettingPages["ShowRegulatoryInfo"] = "show_regulatory_info";
  SettingPages["ShowWorkPolicyInfo"] = "show_work_policy_info";
  SettingPages["StorageVolumeAccess"] = "storage_volume_access";
  SettingPages["Sync"] = "sync";
  SettingPages["UsageAccess"] = "usage_access";
  SettingPages["UserDictionary"] = "user_dictionary";
  SettingPages["VoiceControllAirplaneMode"] = "voice_controll_airplane_mode";
  SettingPages["VoiceControllBatterySaverMode"] = "voice_controll_battery_saver_mode";
  SettingPages["VoiceControllDoNotDisturbMode"] = "voice_controll_do_not_disturb_mode";
  SettingPages["VoiceInput"] = "voice_input";
  SettingPages["VPN"] = "vpn";
  SettingPages["VrListener"] = "vr_listener";
  SettingPages["Webview"] = "webview";
  SettingPages["WifiAddNetworks"] = "wifi_add_networks";
  SettingPages["WifiIp"] = "wifi_ip";
  SettingPages["Wireless"] = "wireless";
  SettingPages["ZenModePriority"] = "zen_mode_priority";
})(SettingPages || (exports.SettingPages = SettingPages = {}));

const {
  OpenSettings
} = _reactNative.NativeModules;
var _default = OpenSettings;
exports.default = _default;
//# sourceMappingURL=index.js.map