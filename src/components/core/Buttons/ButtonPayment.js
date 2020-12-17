import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Animated, {call, cond, eq, useCode} from 'react-native-reanimated';
import CircularProgress from '../../CircularProgress';
import {COLOR_BG, COLOR_FG} from '../../CircularProgress/Constans';
import {mix} from 'react-native-redash/lib/module/v1';
const SIZE = 300;
const STROKE_WIDTH = 10;
const ICON_SIZE = 70;
const CONTENT_SIZE = SIZE - STROKE_WIDTH * 2;

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: STROKE_WIDTH,
    left: STROKE_WIDTH,
    right: STROKE_WIDTH,
    bottom: STROKE_WIDTH,
    backgroundColor: 'white',
    borderRadius: CONTENT_SIZE / 2,
    zIndex: 100,
  },
  icon: {
    top: (CONTENT_SIZE - ICON_SIZE) / 2,
    left: (CONTENT_SIZE - ICON_SIZE) / 2,
  },
  activeIcon: {
    position: 'absolute',
    top: (CONTENT_SIZE - ICON_SIZE) / 2,
    left: (CONTENT_SIZE - ICON_SIZE) / 2,
  },
});

const ButtonPayment = ({progress}) => {
  const [active, setActive] = useState(false);
  const height = mix(progress, 0, ICON_SIZE);
  useCode(
    () =>
      cond(
        eq(progress, 1),
        call([], () => setActive(true)),
      ),
    [progress],
  );
  return (
    <View>
      <CircularProgress
        radius={SIZE / 2}
        {...{progress}}
        fg={COLOR_FG}
        bg={COLOR_BG}
      />
      <View style={styles.iconContainer}>
        <Image
          style={[styles.icon, {width: ICON_SIZE, height: ICON_SIZE}]}
          source={
            active
              ? require('../../../resource/static/images/icons/check.png')
              : require('../../../resource/static/images/icons/fingerprint.png')
          }
        />
        <Animated.View
          style={[styles.activeIcon, {height, opacity: active ? 0 : 1}]}>
          <Image
            source={require('../../../resource/static/images/icons/fingerprint.png')}
            style={{width: ICON_SIZE, height: ICON_SIZE}}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default ButtonPayment;
