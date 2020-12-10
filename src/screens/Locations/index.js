import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import GoogleMaps from '../../components/Maps/Android/'
const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

const Locations = ({navigation, route}) => {
  const {title, image, id, price, description, category, collections} =
    route.params || {};
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <GoogleMaps />
    </SafeAreaView>
  );
};

export default Locations;
