import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import CartItem from '../../components/ShoppingCart/CartItem';
import CartDetailsPayment from '../../components/ShoppingCart/CartDetailsPayment';
import MenuFooter from '../../components/core/Menu/MenuFooter';
import Input from '../../components/core/Form/TextInput';
import {onChange} from 'react-native-reanimated';

const styles = StyleSheet.create({
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
  const inputLocation = useRef(null);
  const inputMessage = useRef(null);
  const {title, image, id, price, description, category, collections} =
    route.params || {};
  const [location, setLocation] = useState();
  const [message, setMessage] = useState();
  const [disabledButton, setDisabledButton] = useState(true);
  const [total, setTotal] = useState(price);

  const sumTotal = (products) => {
    const total =
      products.length > 1
        ? products.reduce((prev, cur) => prev + cur.price, 0)
        : products[0].price;
    setTotal(total);
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

  const goToPayment = () => {
    const params = {
      products,
      location,
      message,
      total,
    };
    navigation.navigate('PaymentMethods', params);
  };
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        {route.params ? (
          <>
            <ScrollView nestedScrollEnabled style={{flex: 0.1}}>
              <CartItem
                title={title}
                image={image}
                price={price}
                category={category}
                collections={collections}
              />
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
            <View style={styles.detailContainer}>
              <CartDetailsPayment
                price={total}
                shipping={parseInt(8, 10)}
                onPress={goToPayment}
                disabled={disabledButton}
              />
            </View>
          </>
        ) : (
          <View style={styles.shoppingCartContainer}>
            <Text style={styles.textEmpty}>Shopping cart is empty</Text>
          </View>
        )}
      </View>
      <MenuFooter navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default ShoppingCart;
