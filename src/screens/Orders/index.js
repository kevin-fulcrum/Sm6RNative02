import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import MenuFooter from '../../components/core/Menu/MenuFooter';
import Button from '../../components/core/Buttons/Button';
import Order from '../../components/Orders';
import {windowHeight, windowWidth} from '../../resource/functions/Dimensions';
import Api from '../../api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ordersContainer: {
    flex: 1,
    marginTop: 30,
  },
});

const Orders = ({navigation, route}) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    Api.orderApi
      .getOrders()
      .then((data) => {
        if (data.errors) {
          console.warn('get api order error', data);
          setError(data.errors);
        } else {
          console.warn('get api order', data);
          setOrders(data);
        }
      })
      .catch((e) => {
        console.warn('get api order catch', e);
        setError(e.errors);
      });
  }, []);
  const goToOrder = (item) => {
    console.warn('goToOrder item', item);
    navigation.navigate('OrderDetail', item);
  };
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <View style={styles.ordersContainer}>
            <Text style={styles.title}>My Orders</Text>
            {orders.length !== 0 &&
              orders.map((item, index) => (
                <Order
                  key={index}
                  index={index}
                  productImage={item.productImage[0].url}
                  productName={item.productsName[0]}
                  price={item.totalPrice}
                  onPress={() => goToOrder(item)}
                />
              ))}
            {error ? <Text style={styles.title}>{error}</Text> : null}
          </View>
        </View>
      </ScrollView>
      <MenuFooter navigation={navigation} />
    </SafeAreaView>
  );
};

export default Orders;
