/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from './src/screens/Home/Dashboard';
import MapIOS from './src/components/Maps/iOS';
import GoogleMaps from './src/components/Maps/Android';
import TrackUserLocationMap from './src/components/Maps/TrackUserLocationMap';
import Register from './src/screens/Authentication/Register';
import Login from './src/screens/Authentication/Login';
import {AuthProvider} from './src/navigation/AuthProvider';
import UseCamera from './src/screens/UseCamera';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{header: () => null}}
        />
        {/* <AuthProvider> */}
        {/* <View style={styles.container}> */}
        {/* <Dashboard /> */}
        {/* <MapIOS /> */}
        {/* <GoogleMaps /> */}
        {/* <TrackUserLocationMap /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <UseCamera /> */}
        {/* </View> */}
        {/* </AuthProvider> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default App;
