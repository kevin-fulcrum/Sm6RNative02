import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 20,
    height: height / 4,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: width - 20,
    height: height / 4,
    borderRadius: 10,
  },
});

const ProductItemSlider = ({item}) => {
  console.warn('item.item.url', item.item.url);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.item.url,
        }}
      />
    </View>
  );
};

export default ProductItemSlider;
