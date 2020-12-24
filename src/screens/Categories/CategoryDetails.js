import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MenuFooter from '../../components/core/Menu/MenuFooter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

const CategoryDetails = ({navigation, route}) => {
  const {products} = route.params;
  console.warn('route.products CategoryDetails', products);

  const productDetail = (item) => {
    navigation.navigate('ProductDetails', item);
  };
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Text>Hola</Text>
        </View>
      </ScrollView>
      <MenuFooter navigation={navigation} />
    </SafeAreaView>
  );
};

export default CategoryDetails;
