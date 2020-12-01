import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {carouselData} from '../../resource/functions/data/carouselData';
import Button from '../../components/core/Buttons/Button';
import Carousel from '../../components/Carousel/Carousel';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import {productSliderData} from '../../resource/functions/data/productSliderData';
import {categorySliderData} from '../../resource/functions/data/categorySliderData';
import {AuthContext} from '../../navigation/AuthProvider';
import CategorySlider from '../../components/CategorySlider/CategorySlider';

const Dashboard = () => {
  const {logout} = useContext(AuthContext);

  const submitLogOut = () => {
    logout();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Carousel data={carouselData} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>T-Shirt</Text>
        <ProductSlider data={productSliderData} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Categories</Text>
        <CategorySlider data={categorySliderData} />
      </View>
      <Button
        variant="primary"
        label="Log out"
        onPress={() => submitLogOut()}
      />
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
