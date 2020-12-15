import React from 'react';
import {Value, set, useCode} from 'react-native-reanimated';
import {timing} from 'react-native-redash/lib/module/v1';
import {StyleSheet, View} from 'react-native';
import CircularProgress from '../../components/CircularProgress';
import {
  COLOR_BG,
  COLOR_FG,
  RADIUS,
  STROKE_WIDTH,
} from '../../components/CircularProgress/Constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000001',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const CircularProgressView = () => {
  const progress = new Value(0);
  useCode(() => set(progress, timing({duration: 10000})), [progress]);
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <CircularProgress bg={COLOR_BG} fg={COLOR_FG} {...{progress}} />
      </View>
      <View style={styles.overlay}>
        <View
          style={{
            width: RADIUS * 2 - STROKE_WIDTH * 2,
            height: RADIUS * 2 - STROKE_WIDTH * 2,
            borderRadius: RADIUS - STROKE_WIDTH,
            backgroundColor: COLOR_BG,
          }}
        />
      </View>
    </View>
  );
};

export default CircularProgressView;
