import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Home/Dashboard';
import ProductDetails from '../screens/Products/Product/ProductDetails';
import ShoppingCart from '../screens/ShoppingCart';
import Locations from '../screens/Locations';
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
    </Stack.Navigator>
  );
};

export default HomeStack;
