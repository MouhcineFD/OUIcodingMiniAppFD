import {NativeModules} from 'react-native';

const {ToastModule} = NativeModules;

export const showShort = message => ToastModule.show(message, true);

export const showLong = message => ToastModule.show(message, false);
