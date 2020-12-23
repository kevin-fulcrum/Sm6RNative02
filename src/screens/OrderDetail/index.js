import React from 'react';

import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import ProductDetailSlider from '../../components/ProductDetailSlider/ProductDetailSlider';
import MenuFooter from '../../components/core/Menu/MenuFooter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

const OrderDetail = ({navigation, route}) => {
  const {
    details,
    location,
    totalPrice,
    paymentMethod,
    productsName,
    productImage,
  } = route.params || {};
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <ProductDetailSlider data={productImage} />
          <Text style={styles.price}>{`$ ${totalPrice}`}</Text>
          <View style={styles.productDetailsContainer}>
            <View style={styles.productDetails}>
              <Text numberOfLines={2} style={styles.title}>
                {productsName[0]}
              </Text>
              <Text numberOfLines={4} style={styles.subtitle}>
                {`Order detail: ${details}`}
              </Text>
              <Text style={styles.subtitle}>{`Location: ${location}`}</Text>
              <Text
                style={
                  styles.subtitle
                }>{`Payment Method: ${paymentMethod}`}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <MenuFooter navigation={navigation} />
    </SafeAreaView>
  );
};

export default OrderDetail;
