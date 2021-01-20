/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import CartItem from '../../components/ShoppingCart/CartItem';
import CartDetailsPayment from '../../components/ShoppingCart/CartDetailsPayment';
import MenuFooter from '../../components/core/Menu/MenuFooter';
import Input from '../../components/core/Form/TextInput';
import cartActions from '../../redux/actions/cartAction';

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-around',
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
  shippingContainer: {
    flex: 0.5,
    marginTop: 20,
    flexDirection: 'row',
  },
  shippingContent: {
    flex: 0.5,
    marginHorizontal: 10,
  },
  action: {
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  title: {
    color: '#212121',
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
  },
  detailContainer: {
    flex: 1,
    marginVertical: 10,
  },
});

const ShoppingCart = ({navigation, route}) => {
  const cartData = useSelector((state) => state.cartReducer);
  const inputLocation = useRef(null);
  const inputMessage = useRef(null);
  const {title, image, price, description, category, collections} =
    route.params || {};
  const parameters = route.params;
  const [location, setLocation] = useState();
  const [message, setMessage] = useState();
  const [disabledButton, setDisabledButton] = useState(true);
  const [total, setTotal] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(cartActions.getCartProduct());
        if (cartData.cart.length !== 0) sumTotal(cartData.cart);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchData();
  }, [dispatch, cartData.cart]);

  const sumTotal = (products) => {
    console.warn('sumTotal');
    const totalPrice =
      products.length > 1
        ? products.reduce((prev, cur) => prev + cur.price, 0)
        : products[0].price;
    setTotal(totalPrice);
  };

  const onChange = (value, type) => {
    if (type === 'location') {
      setLocation(value);
    }
    if (type === 'message') {
      setMessage(value);
    }
    if (
      value.length > 0 &&
      inputLocation.current.state.validate &&
      inputMessage.current.state.validate
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const removeProduct = async (id) => {
    await dispatch(cartActions.removeCartProductById(id));
    console.warn('cartData.cart', cartData.cart);
    if (cartData.cart.length !== 0) await sumTotal(cartData.cart);
  };

  const goToPayment = () => {
    const params = {
      item: cartData.cart,
      location,
      message,
      total,
    };
    navigation.navigate('PaymentMethods', params);
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={65}
      style={styles.keyboardAvoid}>
      <SafeAreaView style={styles.containerSafeArea}>
        <View style={styles.container}>
          {cartData.cart.length > 0 ? (
            <>
              <ScrollView nestedScrollEnabled style={{flex: 0.1}}>
                {cartData.cart.length !== 0 &&
                  cartData.cart.map((item, index) => (
                    <CartItem
                      key={`cart-item-${index}`}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      category={item.category}
                      collections={item.collections}
                      onPress={() => removeProduct(item.id)}
                    />
                  ))}
              </ScrollView>
              <View style={styles.shippingContainer}>
                <View style={styles.shippingContent}>
                  <View style={styles.action}>
                    <Input
                      label="Location"
                      labelStyle={styles.title}
                      vale={location}
                      ref={inputLocation}
                      type="name"
                      placeholder="Lima, Peru"
                      placeholderTextColor="#cccccc"
                      textInputStyle={styles.textInput}
                      maxLength={90}
                      onChangeInput={(value) => onChange(value, 'location')}
                    />
                  </View>
                </View>
                <View style={styles.shippingContent}>
                  <View style={styles.action}>
                    <Input
                      label="Message"
                      labelStyle={styles.title}
                      vale={message}
                      ref={inputMessage}
                      type="name"
                      placeholder="Shipping detail"
                      placeholderTextColor="#cccccc"
                      textInputStyle={styles.textInput}
                      maxLength={90}
                      onChangeInput={(value) => onChange(value, 'message')}
                    />
                  </View>
                </View>
              </View>
              {total && (
                <View style={styles.detailContainer}>
                  <CartDetailsPayment
                    price={total}
                    shipping={parseInt(8, 10)}
                    onPress={goToPayment}
                    disabled={disabledButton}
                  />
                </View>
              )}
            </>
          ) : (
            <View style={styles.shoppingCartContainer}>
              <Text style={styles.textEmpty}>Shopping cart is empty</Text>
            </View>
          )}
        </View>
        <MenuFooter navigation={navigation} route={route} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ShoppingCart;
