import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 4,
    height: height / 5.5,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {},
  image: {
    width: width / 4,
    height: height / 5.5,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#212121',
    fontSize: 13,
    fontWeight: '300',
  },
});

const ProductSliderItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={{
            uri: item.image[0].url,
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductSliderItem;
