import { StyleSheet, Text, View } from 'react-native';

import * as CustomBarcodeScanner from 'custom-barcode-scanner';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{CustomBarcodeScanner.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
