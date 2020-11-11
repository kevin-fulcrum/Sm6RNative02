import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 245,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

const ButtonDefault = ({variant, label, onPress}) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12,13,52, 0.05)';
  const color = variant === 'primary' ? '#ffffff' : '#0C0D34';
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDefault;
