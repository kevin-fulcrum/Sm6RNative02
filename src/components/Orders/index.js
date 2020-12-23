import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 5,
  },
  containerImage: {
    flex: 0.3,
  },
  image: {
    width: 80,
    height: 120,
  },
  containerDetail: {
    flex: 0.6,
  },
  productName: {
    marginHorizontal: 10,
    color: '#212121',
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    color: '#212121',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

const Order = ({key, productImage, productName, price, onPress}) => {
  const goToDetails = () => {
    onPress && onPress();
  };
  return (
    <TouchableOpacity key={key} onPress={goToDetails}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          {productImage && (
            <Image style={styles.image} source={{uri: productImage}} />
          )}
        </View>
        <View style={styles.containerDetail}>
          {productName !== 0 && (
            <Text style={styles.productName}>{productName[0]}</Text>
          )}
          {price !== 0 && <Text style={styles.price}>{`$ ${price}`}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Order;
