import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

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
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawer;
