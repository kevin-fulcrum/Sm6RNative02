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
import {useSelector, useDispatch} from 'react-redux';
import ordersAction from '../../redux/actions/ordersAction';
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
  const [error, setError] = useState('');
  const ordersData = useSelector((state) => state.ordersReducer);
  console.warn('ordersData', ordersData);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(ordersAction.getOrders());
      } catch (err) {
        console.warn(err);
        setError(err);
      }
    };
    fetchData();
  }, [dispatch]);
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
            {ordersData.orders.length !== 0 &&
              ordersData.orders.map((item, index) => (
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
