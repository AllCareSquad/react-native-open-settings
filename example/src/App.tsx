import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import OpenSettings, { SettingPages } from 'react-native-open-settings';

export default function App() {
  const items = [
    { title: 'Wifi', page: SettingPages.Wifi },
    { title: 'DataRoaming', page: SettingPages.DataRoaming },
    { title: 'LocationSource', page: SettingPages.LocationSource },
    { title: 'AppSettings', page: SettingPages.AppSettings },
    { title: 'Bluetooth', page: SettingPages.Bluetooth },
    { title: 'Notification', page: SettingPages.Notification },
    { title: 'Security', page: SettingPages.Security },
    { title: 'Sound', page: SettingPages.Sound },
    { title: 'Settings', page: SettingPages.Settings },
    { title: 'Date', page: SettingPages.Date },
    { title: 'Display', page: SettingPages.Display },
    { title: 'Accessibility', page: SettingPages.Accessibility },
    { title: 'AddAccount', page: SettingPages.AddAccount },
    { title: 'AirplaneMode', page: SettingPages.AirplaneMode },
    { title: 'APN', page: SettingPages.APN },
    { title: 'ApplicationDetails', page: SettingPages.ApplicationDetails },
    {
      title: 'ApplicationDevelopment',
      page: SettingPages.ApplicationDevelopment,
    },
    {
      title: 'AppNotificationBubble',
      page: SettingPages.AppNotificationBubble,
    },
    { title: 'AppNotification', page: SettingPages.AppNotification },
    { title: 'Search', page: SettingPages.Search },
    { title: 'BatterySaver', page: SettingPages.BatterySaver },
    { title: 'BiometricEnroll', page: SettingPages.BiometricEnroll },
    { title: 'Captioning', page: SettingPages.Captioning },
    { title: 'Cast', page: SettingPages.Cast },
    { title: 'ChannelNotification', page: SettingPages.ChannelNotification },
    {
      title: 'ActionConditionProvider',
      page: SettingPages.ActionConditionProvider,
    },
    { title: 'DataUsage', page: SettingPages.DataUsage },
    { title: 'DeviceInfo', page: SettingPages.DeviceInfo },
    { title: 'Dream', page: SettingPages.Dream },
    { title: 'HardKeyboard', page: SettingPages.HardKeyboard },
    { title: 'Home', page: SettingPages.Home },
    {
      title: 'IgnoreBackgroundDataRestrictions',
      page: SettingPages.IgnoreBackgroundDataRestrictions,
    },
    {
      title: 'IgnoreBatteryOptimization',
      page: SettingPages.IgnoreBatteryOptimization,
    },
    { title: 'InputMethod', page: SettingPages.InputMethod },
    { title: 'InputMethodSubtype', page: SettingPages.InputMethodSubtype },
    { title: 'InternalStorage', page: SettingPages.InternalStorage },
    { title: 'Locale', page: SettingPages.Locale },
    {
      title: 'ManageAllApplications',
      page: SettingPages.ManageAllApplications,
    },
    {
      title: 'ManageAllFilesAccessPermission',
      page: SettingPages.ManageAllFilesAccessPermission,
    },
    { title: 'ManageApplication', page: SettingPages.ManageApplication },
    {
      title: 'ManageAppAllFilesAccessPermission',
      page: SettingPages.ManageAppAllFilesAccessPermission,
    },
    { title: 'ManageDefaultApps', page: SettingPages.ManageDefaultApps },
    {
      title: 'ManageOverlayPermission',
      page: SettingPages.ManageOverlayPermission,
    },
    {
      title: 'ManageUnknownAppSource',
      page: SettingPages.ManageUnknownAppSource,
    },
    { title: 'ManageWrite', page: SettingPages.ManageWrite },
    { title: 'MemoryCard', page: SettingPages.MemoryCard },
    { title: 'NetworkOperator', page: SettingPages.NetworkOperator },
    { title: 'NFCsharings', page: SettingPages.NFCsharings },
    { title: 'NFCPayment', page: SettingPages.NFCPayment },
    { title: 'NFC', page: SettingPages.NFC },
    { title: 'NightDisplay', page: SettingPages.NightDisplay },
    {
      title: 'NotificationAssistant',
      page: SettingPages.NotificationAssistant,
    },
    {
      title: 'NotificationListenerDetail',
      page: SettingPages.NotificationListenerDetail,
    },
    {
      title: 'ActionNotificationListener',
      page: SettingPages.ActionNotificationListener,
    },
    {
      title: 'NotificationPolicyAccess',
      page: SettingPages.NotificationPolicyAccess,
    },
    { title: 'ActionPrint', page: SettingPages.ActionPrint },
    { title: 'Privacy', page: SettingPages.Privacy },
    {
      title: 'ProcessWifiEasyConnectUri',
      page: SettingPages.ProcessWifiEasyConnectUri,
    },
    { title: 'QuickAccessWallet', page: SettingPages.QuickAccessWallet },
    { title: 'QuickLaunch', page: SettingPages.QuickLaunch },
    {
      title: 'RequestIgnoreBatteryOptimizations',
      page: SettingPages.RequestIgnoreBatteryOptimizations,
    },
    {
      title: 'RequestSetAutofillService',
      page: SettingPages.RequestSetAutofillService,
    },
    { title: 'ShowRegulatoryInfo', page: SettingPages.ShowRegulatoryInfo },
    { title: 'ShowWorkPolicyInfo', page: SettingPages.ShowWorkPolicyInfo },
    { title: 'StorageVolumeAccess', page: SettingPages.StorageVolumeAccess },
    { title: 'Sync', page: SettingPages.Sync },
    { title: 'UsageAccess', page: SettingPages.UsageAccess },
    { title: 'UserDictionary', page: SettingPages.UserDictionary },
    {
      title: 'VoiceControllAirplaneMode',
      page: SettingPages.VoiceControllAirplaneMode,
    },
    {
      title: 'VoiceControllBatterySaverMode',
      page: SettingPages.VoiceControllBatterySaverMode,
    },
    {
      title: 'VoiceControllDoNotDisturbMode',
      page: SettingPages.VoiceControllDoNotDisturbMode,
    },
    { title: 'VoiceInput', page: SettingPages.VoiceInput },
    { title: 'VPN', page: SettingPages.VPN },
    { title: 'VrListener', page: SettingPages.VrListener },
    { title: 'Webview', page: SettingPages.Webview },
    { title: 'WifiAddNetworks', page: SettingPages.WifiAddNetworks },
    { title: 'WifiIp', page: SettingPages.WifiIp },
    { title: 'Wireless', page: SettingPages.Wireless },
    { title: 'ZenModePriority', page: SettingPages.ZenModePriority },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={(item) => (
          <TouchableOpacity
            style={styles.item}
            key={item.item.title}
            onPress={() => OpenSettings.open(item.item.page)}
          >
            <Text>{item.item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
  item: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    padding: 10,
  },
});
