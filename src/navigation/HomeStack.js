import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Home/Dashboard';
import ProductDetails from '../screens/Products/Product/ProductDetails';
import ShoppingCart from '../screens/ShoppingCart';
import Locations from '../screens/Locations';
import CircularProgress from '../screens/CircularProgress';
import TapGesture from '../screens/TapGesture';
import PaymentMethods from '../screens/PaymentMethods';
import Checkout from '../screens/Checkout';
import Orders from '../screens/Orders';
import OrderDetail from '../screens/OrderDetail';
import categoryDetails from '../screens/Categories/CategoryDetails';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={() => ({
          title: 'Shopping Cart',
          headerBackTitle: '',
          headerLeft: () => null,
          gestureEnabled: false,
        })}
      />
      <Stack.Screen
        name="Locations"
        component={Locations}
        options={() => ({
          title: 'Locations',
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="CircularProgress"
        component={CircularProgress}
        options={() => ({
          title: 'Circular Progress',
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="TapGesture"
        component={TapGesture}
        options={() => ({
          title: 'Tap Gesture',
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={() => ({
          title: 'Payment Methods',
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={() => ({
          title: 'Checkout',
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={() => ({
          title: 'Orders',
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={() => ({
          title: 'Order Detail',
          headerBackTitle: '',
        })}
      />
      <Stack.Screen
        name="categoryDetails"
        component={categoryDetails}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitle: '',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
