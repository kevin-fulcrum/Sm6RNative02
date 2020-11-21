import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {carouselData} from '../../resource/functions/data/carouselData';
import Carousel from '../../components/Carousel/Carousel';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import {productSliderData} from '../../resource/functions/data/productSliderData';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{flex: 0.5}}>
          <Carousel data={carouselData} />
        </View>
        <View style={{flex: 0.35}}>
          <Text style={styles.title}>T-Shirt</Text>
          <ProductSlider data={productSliderData} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
});

export default Dashboard;
