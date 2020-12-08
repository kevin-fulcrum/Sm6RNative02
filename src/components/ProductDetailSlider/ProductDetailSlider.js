import React from 'react';
import {View, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import ProductItemSlider from './ProductItemSlider';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ProductDetailSlider = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={1}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <ProductItemSlider item={item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />
        <View style={styles.dot}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#212121',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  return null;
};

export default ProductDetailSlider;
