import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {AuthContext} from '../../../navigation/AuthProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentDrawer: {
    flex: 1,
  },
  userInfo: {
    marginLeft: 20,
  },
  image: {
    width: 36,
    height: 36,
  },
});

const MenuDrawer = (props) => {
  const {logout} = useContext(AuthContext);
  const submitLogOut = () => {
    logout();
    props.navigation.navigate('AuthStackNavigator');
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.contentDrawer}>
          <View style={styles.userInfo} />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../resource/static/images/icons/030-online-shop.png')}
              />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../resource/static/images/icons/032-delivery-truck.png')}
              />
            )}
            label="My Orders"
            onPress={() => {
              props.navigation.navigate('Orders');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../resource/static/images/icons/035-logout.png')}
              />
            )}
            label="Logout"
            onPress={() => submitLogOut()}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawer;
