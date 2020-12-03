import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  windowHeight,
  windowWidth,
} from '../../../resource/functions/Dimensions';
import Button from '../../../components/core/Buttons/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  categoryContainer: {
    flex: 0.1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  category: {
    fontSize: 30,
    fontWeight: '700',
  },
  imageContainer: {
    flex: 0.5,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  image: {
    width: windowWidth / 1.7,
    height: windowHeight / 2.3,
    marginLeft: 15,
  },
  content: {
    flex: 0.25,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  descriptionContainer: {
    marginHorizontal: 20,
  },
  description: {
    fontSize: 18,
    letterSpacing: 0.7,
  },
  footer: {
    flex: 0.15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
  },
  priceContainer: {
    flex: 0.4,
    justifyContent: 'center',
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 0.6,
  },
});

const ProductDetails = ({navigation, route}) => {
  console.warn(route.params);
  const {title, image, id, price, description, category} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{width: '30%', height: '100%'}}
          source={{
            uri: image,
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            label="Add to Cart"
            onPress={() => console.warn('button')}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
