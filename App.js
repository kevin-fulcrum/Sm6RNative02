/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Onboarding from './src/screens/Authentication/Onboarding/Onboarding'
import Welcome from './src/screens/Authentication/Welcome'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Onboarding /> */}
      <Welcome />
    </View>
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
