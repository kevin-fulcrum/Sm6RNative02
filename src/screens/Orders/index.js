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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

const Orders = ({navigation, route}) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const goToOrder = (item) => {
    console.warn('item');
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
                  productImage={item.productImage}
                  productName={item.productsName}
                  price={item.totalPrice}
                  onPress={() => goToOrder(item)}
                />
              ))}
            {error && <Text style={styles.title}>{error}</Text>}
          </View>
        </View>
      </ScrollView>
      <MenuFooter navigation={navigation} />
    </SafeAreaView>
  );
};

export default Orders;
