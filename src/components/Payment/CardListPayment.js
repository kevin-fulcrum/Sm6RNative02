import React from 'react';
import {Animated, StyleSheet} from 'react-native';

import {
  CardPayment,
  PRODUCT_HEIGHT as DEFAULT_PRODUCT_HEIGHT,
} from './CardPayment';

import {windowHeight} from '../../resource/functions/Dimensions';

export const MARGIN = 16;
export const PRODUCT_HEIGHT = DEFAULT_PRODUCT_HEIGHT + MARGIN * 2;
const height = windowHeight - 64;

const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: 'center',
  },
});

const CardListPayment = ({item, y, index, onPress}) => {
  const position = Animated.subtract(index * PRODUCT_HEIGHT, y);
  const isDisappearing = -PRODUCT_HEIGHT;
  const isTop = 0;
  const isBottom = height - PRODUCT_HEIGHT;
  const isAppering = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * PRODUCT_HEIGHT],
        outputRange: [0, -index * PRODUCT_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppering],
      outputRange: [0, -PRODUCT_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppering],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppering],
    outputRange: [0.5, 1, 1, 0.5],
  });
  const goToPay = (irem, idx) => {
    onPress & onPress(irem, idx);
  };
  return (
    <Animated.View
      style={[styles.card, {opacity, transform: [{translateY}, {scale}]}]}>
      <CardPayment onPress={goToPay} item={item} />
    </Animated.View>
  );
};

export default CardListPayment;
