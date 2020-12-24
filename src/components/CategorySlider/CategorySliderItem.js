import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 3.5,
    height: Platform.OS === 'ios' ? height / 10 : height / 12,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 8,
    // margin: 10,
    left: 7,
  },
  image: {
    width: width / 3.5,
    height: height / 12,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0.8, height: 0.8},
    textAlign: 'center',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
});

const CategorySliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CategorySliderItem;
