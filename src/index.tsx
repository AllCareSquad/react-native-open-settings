import { NativeModules } from 'react-native';

type OpenSettingsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { OpenSettings } = NativeModules;

export default OpenSettings as OpenSettingsType;
