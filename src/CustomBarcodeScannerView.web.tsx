import * as React from 'react';

import { CustomBarcodeScannerViewProps } from './CustomBarcodeScanner.types';

export default function CustomBarcodeScannerView(props: CustomBarcodeScannerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
