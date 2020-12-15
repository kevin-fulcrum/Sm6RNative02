import React from 'react';
import {View} from 'react-native';
import {RADIUS} from './Constans';

const HalfCircle = ({color}) => {
  return (
    <View style={{width: RADIUS * 2, height: RADIUS, overflow: 'hidden'}}>
      <View
        style={{
          backgroundColor: color,
          width: RADIUS * 2,
          height: RADIUS * 2,
          borderRadius: RADIUS,
        }}
      />
    </View>
  );
};

export default HalfCircle;
