import React from 'react';
import { View, StyleSheet } from 'react-native'
import ButtonPayment from '../../components/core/Buttons/ButtonPayment'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EDFF'
    }
})

const TapGesture = () => {
    return (
        <View style={styles.container}>
        <ButtonPayment />
        </View>
    )
}

export default TapGesture;