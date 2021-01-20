/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
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
import MenuFooter from '../../components/core/Menu/MenuFooter';
import {useSelector, useDispatch} from 'react-redux';
import productsAction from '../../redux/actions/productsAction';
import categoriesAction from '../../redux/actions/categoriesAction';
import collectionsAction from '../../redux/actions/collectionsAction';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Dashboard = (props) => {
  const {navigation, route} = props;
  const productsData = useSelector((state) => state.productReducer);
  const categoriesData = useSelector((state) => state.categoriesReducer);
  const collectionsData = useSelector((state) => state.collectionsReducer);

  const dispatch = useDispatch();
  const scrollXProducts = new Animated.Value(0);
  const scrollXCategories = new Animated.Value(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(productsAction.getAllProducts());
        await dispatch(categoriesAction.getAllCategories());
        await dispatch(collectionsAction.getAllCollections());
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
    const productCategory = productsData.products.filter(
      (products) => products.category === item.description,
    );
    navigation.navigate('categoryDetails', {
      products: productCategory,
      title: item.description,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {collectionsData.collections.length !== 0 ? (
        <View style={{flex: 1}}>
          <Carousel data={collectionsData.collections} />
        </View>
      ) : null}

      {productsData.products.length !== 0 && (
        <View style={{flex: 1}}>
          <Text style={styles.title}>Products</Text>
          <AnimatedFlatList
            data={productsData.products}
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
      {categoriesData.categories.length > 0 ? (
        <View style={{flex: 1}}>
          <Text style={styles.title}>Categories</Text>
          <AnimatedFlatList
            data={categoriesData.categories}
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
      ) : null}
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
