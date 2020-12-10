import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
} from 'react-native';
import {
  windowWidth,
  windowHeight,
} from '../../../resource/functions/Dimensions';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#DADADA',
    backgroundColor: '#F9f9f9',
    paddingBottom: 0,
  },
  title: {
    color: '#212121',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonFooter: {
    width: windowWidth / 4,
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  Image: {
    height: 36,
    width: 36,
  },
});

const MenuFooter = () => {
  const onPressMenuFooter = ({navigation, route}) => {
    console.warn('onPressMenuFooter');
  };
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.buttonFooter}>
          <TouchableOpacity style={styles.buttonFooter}>
            <Image
              style={styles.image}
              onPress={() => onPressMenuFooter('Dashboard')}
              source={require('../../../resource/static/images/icons/030-online shop.png')}
            />
            <Text style={styles.title}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonFooter}>
          <TouchableOpacity style={styles.buttonFooter}>
            <Image
              style={styles.image}
              onPress={() => onPressMenuFooter('Dashboard')}
              source={require('../../../resource/static/images/icons/030-online shop.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonFooter}>
          <TouchableOpacity style={styles.buttonFooter}>
            <Image
              style={styles.image}
              onPress={() => onPressMenuFooter('Dashboard')}
              source={require('../../../resource/static/images/icons/030-online shop.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonFooter}>
          <TouchableOpacity style={styles.buttonFooter}>
            <Image
              style={styles.image}
              onPress={() => onPressMenuFooter('Dashboard')}
              source={require('../../../resource/static/images/icons/030-online shop.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuFooter;
