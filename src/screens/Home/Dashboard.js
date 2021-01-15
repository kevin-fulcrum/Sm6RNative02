/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Animated,
} from 'react-native';
import Carousel from '../../components/Carousel/Carousel';
import CategorySliderItem from '../../components/CategorySlider//CategorySliderItem';

import ProductSliderItem from '../../components/ProductSlider/ProductSliderItem';
import {
  // getProducts,
  getCategories,
  getCollections,
} from '../../resource/database/products';
import MenuFooter from '../../components/core/Menu/MenuFooter';
import {useSelector, useDispatch} from 'react-redux';
import productsAction from '../../redux/actions/productsAction';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Dashboard = (props) => {
  const {navigation, route} = props;
  const result = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(result.products);
  const [categoriesData, setCategoriesData] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);
  const scrollXProducts = new Animated.Value(0);
  const scrollXCategories = new Animated.Value(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(productsAction.getAllProducts());
        const categories = await getCategories();
        const collections = await getCollections();
        setCategoriesData(categories);
        setCollectionsData(collections);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchData();
  }, [dispatch]);
  const productDetail = (item) => {
    navigation.navigate('ProductDetails', item);
  };
  const categoryDetail = (item) => {
    console.warn('categoryDetail item', item);
    const productCategory = result.products.filter(
      (products) => products.category === item.description,
    );
    navigation.navigate('categoryDetails', {
      products: productCategory,
      title: item.description,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Carousel data={collectionsData} />
      </View>
      {result.products.length !== 0 && (
        <View style={{flex: 1}}>
          <Text style={styles.title}>Products</Text>
          <AnimatedFlatList
            data={result.products}
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
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollXProducts},
                  },
                },
              ],
              {
                listener: (event) => console.log(event),
                useNativeDriver: true,
              },
            )}
          />
        </View>
      )}
      {categoriesData.length > 0 && (
        <View style={{flex: 1}}>
          <Text style={styles.title}>Categories</Text>
          <AnimatedFlatList
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
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollXCategories},
                  },
                },
              ],
              {
                listener: (event) => console.log(event),
                useNativeDriver: true,
              },
            )}
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
