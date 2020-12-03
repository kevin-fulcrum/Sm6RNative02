import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from '../../../resource/functions/Dimensions';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: windowWidth / 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

const Button = ({variant, label, onPress, disabled}) => {
  const backgroundColor =
    variant === 'primary' && !disabled ? '#2CB9B0' : 'rgba(12,13,52, 0.05)';
  const color = variant === 'primary' ? '#ffffff' : '#0C0D34';
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, {backgroundColor}]}
      {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
