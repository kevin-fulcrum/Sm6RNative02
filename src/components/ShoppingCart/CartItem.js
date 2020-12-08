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
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 10,
  },
  containerImage: {
    flex: 0.3,
  },
  image: {
    width: 80,
    height: 100,
  },
  containerDetail: {
    flex: 0.6,
  },
  title: {
    fontSize: 16,
    color: '#212121',
    marginHorizontal: 10,
  },
  detail: {
    fontSize: 14,
    color: '#212121',
    marginHorizontal: 10,
  },
  price: {
    fontSize: 20,
    color: '#212121',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  qty: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

const CartItem = ({title, image, price, category, collections}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        {image && <Image style={styles.image} source={{uri: image[0].url}} />}
      </View>
      <View style={styles.containerDetail}>
        {title && <Text style={styles.title}>{title}</Text>}
        {price && <Text style={styles.price}>{price}</Text>}
        {category && <Text style={styles.detail}>{category}</Text>}
        {collections && <Text style={styles.detail}>{collections}</Text>}
      </View>
    </View>
  );
};

export default CartItem;
