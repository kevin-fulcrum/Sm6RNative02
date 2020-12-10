import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import CartItem from '../../components/ShoppingCart/CartItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  shoppingCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textEmpty: {
    fontSize: 20,
  },
});

const ShoppingCart = ({navigation, route}) => {
  const {title, image, id, price, description, category, collections} =
    route.params || {};
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView nestedScrollEnabled>
        <View style={styles.container}>
          {route.params ? (
            <CartItem
              title={title}
              image={image}
              price={price}
              category={category}
              collections={collections}
            />
          ) : (
            <View style={styles.shoppingCartContainer}>
              <Text style={styles.textEmpty}>Shopping cart is empty</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingCart;
