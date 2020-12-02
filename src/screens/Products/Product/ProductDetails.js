import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ProductDetails = ({navigation, route}) => {
  console.warn(route.params);
  const {title, image, id, price} = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;
