import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuDrawer from '../components/core/Menu/MenuDrawer';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const DrawerStack = (props) => {
  const {user} = props;
  return (
    <Drawer.Navigator
      initialRouteName={user ? 'Dashboard' : 'AuthStackNavigator'}
      drawerContent={(parameters) =>
        user ? <MenuDrawer {...parameters} /> : null
      }>
      <Drawer.Screen
        name="AuthStackNavigator"
        component={AuthStack}
        options={{gestureEnabled: false}}
      />
      <Drawer.Screen name={'Dashboard'} component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
