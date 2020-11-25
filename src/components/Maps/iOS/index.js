import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {...StyleSheet.absoluteFillObject},
});

const MapIOS = () => {
  return (
    <MapView
      style={styles.maps}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{latitude: 37.78825, longitude: -122.4324}}
        title="this is a marker"
        description="this is a marker description"
      />
    </MapView>
  );
};

export default MapIOS;
