import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Animated,
} from 'react-native';
import {carouselData} from '../../resource/functions/data/carouselData';
import Carousel from '../../components/Carousel/Carousel';
import CategorySliderItem from '../../components/CategorySlider//CategorySliderItem';

import ProductSliderItem from '../../components/ProductSlider/ProductSliderItem';
import {getProducts, getCategories} from '../../resource/database/products';
import MenuFooter from '../../components/core/Menu/MenuFooter';
const Dashboard = ({navigation, route}) => {
  const [productData, setProductData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const scrollXProducts = new Animated.Value(0);
  const scrollXCategories = new Animated.Value(0);

  useEffect(() => {
    const fetchData = async () => {
      console.warn('warn useEffect');
      try {
        const products = await getProducts();
        const categories = await getCategories();
        setProductData(products);
        setCategoriesData(categories);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchData();
  }, []);
  const productDetail = (item) => {
    navigation.navigate('ProductDetails', item);
  };
  const categoryDetail = (item) => {
    console.warn('categoryDetail item', item);
    const productCategory = productData.filter(
      (products) => products.category === item.description,
    );
    navigation.navigate('categoryDetails', productCategory);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Carousel data={carouselData} />
      </View>
      {productData.length > 0 && (
        <View style={{flex: 1}}>
          <Text style={styles.title}>Products</Text>
          <FlatList
            data={productData}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
              return (
                <ProductSliderItem
                  item={item.item}
                  onPress={() => productDetail(item.item)}
                />
              );
            }}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollXProducts}}},
            ])}
          />
        </View>
      )}
      {categoriesData.length > 0 && (
        <View style={{flex: 1}}>
          <Text style={styles.title}>Categories</Text>
          <FlatList
            data={categoriesData}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
              return (
                <CategorySliderItem
                  item={item.item}
                  onPress={() => categoryDetail(item.item)}
                />
              );
            }}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollXCategories}}},
            ])}
          />
        </View>
      )}
      <MenuFooter navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Dashboard;
