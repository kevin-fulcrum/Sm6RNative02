import React, { useState(, useRef) } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Platform } from 'react-native'
import Button from '../../components/core/Buttons/Button';
import Input from '../../components/core/Form/TextInput';
import { CardPayment } from '../../components/Payment/CardPayment';
import { windowHeight, windowWidth } from '../../resource/functions/Dimensions';
import { onChange } from 'react-native-reanimated';

const styles = StyleSheet.create({

});

const Checkout = ({ navigation, route }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expireDate, setExpireDate ] = useState('')
    const [cvv, setCvv] = useState('')
    const inputExpireDate = useRef();
    const inputCvv = useRef();
    const inputCardHolder = useRef();
    const inputCardNumber = useRef();
    const { paymentMethods } = route.params
    return(
        <SafeAreaView style={styles.containerSafeArea}>
            <ScrollView>
                <View style={styles.container}>
                    <CardPayment item={paymentMethods}/>
                </View>
                <View style={styles.paymentContainer}>
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
                    <View style={styles.action}>
                        <Input 
                            label='Card holder'
                            labelStyle={style.title}
                            value={cardHolder}
                            ref={inputCardHolder}
                            type='name'
                            placeholder=''
                            placeholderTextColor='#cccccc'
                            textInputStyle={styles.textInput}
                            maxLength={50}
                            onChangeInput={(value) => onChange(value, 'cardHolder')}
                        />
                    </View>
                    <View style={styles.secureCardData}>
                        <View style={[styles.expireDate, styles.action]}>
                            <Input 
                                label='Expire Date'
                                labelStyle={styles.title}
                                value={expireDate}
                                ref={inputExpireDate}
                                type='expireDate'
                                placeholder='XX/XX'
                                placeholderTextColor='#cccccc'
                                keyboardType='numeric'
                                textInputStyle={styles.textInput}
                                maxLength={5}
                                onChangeInput={(value) => onChange(value, 'expireDate')}
                            />
                        </View>
                        <View style={[styles.dataCvv, styles.action]}>
                            <Input 
                                label='CVV'
                                labelStyle={styles.title}
                                value={cvv}
                                ref={inputCvv}
                                type='cvv'
                                placeholder='XXX'
                                placeholderTextColor='#cccccc'
                                keyboardType='numeric'
                                textInputStyle={styles.textInput}
                                maxLength={3}
                            />
                        </View>
                    </View>
                    <View style={styles.buyButtonContainer}>
                    <Button
                        onPress={sendPayment}
                        variant="primary"
                        label="Complete Payment"
                        disabled={disabled}
                    />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Checkout;