import React from 'react'
import { View } from 'react-native'
import CircularProgress from '../../CircularProgress'
import {
    COLOR_BG,
    COLOR_FG,
  } from '../../CircularProgress/Constans';

const SIZE = 150;

const ButtonPayment = ({ progress }) => {
    return (
     <CircularProgress radius={SIZE / 2}  {...{progress}} fg={COLOR_FG} bg={COLOR_BG}/>   
    )
}

export default ButtonPayment;