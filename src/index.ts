import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to CustomBarcodeScanner.web.ts
// and on native platforms to CustomBarcodeScanner.ts
import CustomBarcodeScannerModule from './CustomBarcodeScannerModule';
import CustomBarcodeScannerView from './CustomBarcodeScannerView';
import { ChangeEventPayload, CustomBarcodeScannerViewProps } from './CustomBarcodeScanner.types';

// Get the native constant value.
export const PI = CustomBarcodeScannerModule.PI;

export function hello(): string {
  return CustomBarcodeScannerModule.hello();
}

export async function setValueAsync(value: string) {
  return await CustomBarcodeScannerModule.setValueAsync(value);
}

const emitter = new EventEmitter(CustomBarcodeScannerModule ?? NativeModulesProxy.CustomBarcodeScanner);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { CustomBarcodeScannerView, CustomBarcodeScannerViewProps, ChangeEventPayload };
