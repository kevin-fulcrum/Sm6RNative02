import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {windowWidth} from '../../resource/functions/Dimensions';

const ratio = 228 / 362;

export const PRODUCT_WIDTH = windowWidth * 0.8;
export const PRODUCT_HEIGHT = PRODUCT_WIDTH * ratio;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 15,
    borderRadius: 8,
    width: PRODUCT_WIDTH,
    height: PRODUCT_HEIGHT,
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBrand: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
  },
});

const CardPayment = ({item, onPress}) => {
  const {color, imageBrand} = item;
  const goToPay = (items, index) => {
    onPress & onPress(items, index);
  };
  return (
    <TouchableOpacity onPress={goToPay}>
      <View style={[styles.container, {backgroundColor: color}]}>
        <View style={styles.containerImage}>
          <Image source={{uri: imageBrand}} style={styles.imageBrand} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {CardPayment};
