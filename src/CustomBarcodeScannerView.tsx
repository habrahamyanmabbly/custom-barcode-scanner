import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { CustomBarcodeScannerViewProps } from './CustomBarcodeScanner.types';

const NativeView: React.ComponentType<CustomBarcodeScannerViewProps> =
  requireNativeViewManager('CustomBarcodeScanner');

export default function CustomBarcodeScannerView(props: CustomBarcodeScannerViewProps) {
  return <NativeView {...props} />;
}
