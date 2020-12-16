import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import CircularProgress from '../../CircularProgress';
import {COLOR_BG, COLOR_FG} from '../../CircularProgress/Constans';

import FingerPrint from '../../../resource/static/images/icons/fingerprint.svg';
const SIZE = 150;
const STOKE_WIDTH = 10;
const ICON_SIZE = 96;

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: STOKE_WIDTH,
    left: STOKE_WIDTH,
    right: STOKE_WIDTH,
    bottom: STOKE_WIDTH,
    backgroundColor: '#ffffff',
    borderRadius: (SIZE - STOKE_WIDTH * 2) / 2,
    zIndex: 100,
  },
});

const ButtonPayment = ({progress}) => {
  return (
    <View>
      <CircularProgress
        radius={SIZE / 2}
        {...{progress}}
        fg={COLOR_FG}
        bg={COLOR_BG}
      />
      <View style={styles.iconContainer}>
        <FingerPrint width={ICON_SIZE} height={ICON_SIZE} fill="#2CB9B0" />
      </View>
    </View>
  );
};

export default ButtonPayment;
