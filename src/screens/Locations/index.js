import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import GoogleMaps from '../../components/Maps/Android/';
import MenuFooter from '../../components/core/Menu/MenuFooter';
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
    <>
      <SafeAreaView style={styles.containerSafeArea}>
        <GoogleMaps />
      </SafeAreaView>
      <MenuFooter navigation={navigation} route={route} />
    </>
  );
};

export default Locations;
