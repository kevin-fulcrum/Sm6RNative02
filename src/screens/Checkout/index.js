import React, { useState(, useRef) } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Platform } from 'react-native'
import Buttom from '../../components/core/Buttons/Button';
import Input from '../../components/core/Form/TextInput';
import { CardPayment } from '../../components/Payment/CardPayment';
import { windowHeight, windowWidth } from '../../resource/functions/Dimensions';

const styles = StyleSheet.create({

});

const Checkout = ({ navigation, route }) => {
    const [cardNumber, setCardNumber] = useState('')
    const inputCardNumber = useRef();
    const { paymentMethods } = route.params
    return(
        <SafeAreaView style={styles.containerSafeArea}>
            <ScrollView>
                <View style={styles.container}>
                    <CardPayment item={paymentMethods}/>
                </View>
                <View style={styles.paymentContainer}>
                    <>
                        <View style={styles.action}>
                            <Input 
                                label='Card number'
                                labelStyle={styles.title}
                                value={cardNumber}
                                ref={inputCardNumber}
                                type='cardNumber'
                                placeholder=''
                                placeholderTextColor='#cccccc'
                                textInputStyle={styles.textInput}
                                keyboardType='numeric'
                                maxLength={16}
                                onChangeInput={(value)=> onChange(value, 'cardNumber')}
                            />
                        </View>
                    </>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Checkout;