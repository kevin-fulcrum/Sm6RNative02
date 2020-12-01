import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Authentication/Login';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import Register from '../screens/Authentication/Register';
import Welcome from '../screens/Authentication/Welcome';
import Onboarding from '../screens/Authentication/Onboarding/Onboarding';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
