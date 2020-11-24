import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MapIOS = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.container} />
    </View>
  );
};

export default MapIOS;
