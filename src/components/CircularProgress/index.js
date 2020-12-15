import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  lessThan,
  multiply,
} from 'react-native-reanimated';
import {transformOrigin} from 'react-native-redash/lib/module/v1';
import {PI, RADIUS} from './Constans';
import HalfCircle from './HalfCircle';

const CircularProgress = ({progress, bg, fg}) => {
  const theta = multiply(progress, 2 * PI);
  const opacity = lessThan(theta, PI);
  const rotate = interpolate(theta, {
    inputRange: [PI, 2 * PI],
    outputRange: [0, PI],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <>
      <View style={{zIndex: 1}}>
        <HalfCircle color={fg} />
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({x: 0, y: RADIUS / 2}, {rotate: theta}),
            opacity,
          }}>
          <HalfCircle color={bg} />
        </Animated.View>
      </View>
      <View style={{transform: [{rotate: '180deg'}]}}>
        <HalfCircle color={fg} />
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({x: 0, y: RADIUS / 2}, {rotate}),
          }}>
          <HalfCircle color={bg} />
        </Animated.View>
      </View>
    </>
  );
};

export default CircularProgress;
