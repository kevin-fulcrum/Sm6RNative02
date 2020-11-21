import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {carouselData} from '../../resource/functions/data/carouselData';
import Carousel from '../../components/Carousel/Carousel';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Carousel data={carouselData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default Dashboard;
