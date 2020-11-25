import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {...StyleSheet.absoluteFillObject},
});

const GoogleMaps = () => {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.maps}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onRegionChange={(region) => {
        setLocation({
          latitude: region.latitude,
          longitude: region.longitude,
        });
      }}
      onRegionChangeComplete={(region) => {
        setLocation({
          latitude: region.latitude,
          longitude: region.longitude,
        });
      }}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="this is a marker"
        description="this is a marker description"
      />
    </MapView>
  );
};

export default GoogleMaps;
