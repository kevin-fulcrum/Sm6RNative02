import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import Button from '../../components/core/Buttons/Button';
import Input from '../../components/core/Form/TextInput';
import {CardPayment} from '../../components/Payment/CardPayment';
import CustomModal from '../../components/core/Modal';
import Api from '../../api';
import {windowHeight, windowWidth} from '../../resource/functions/Dimensions';
import {onChange} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#212121',
    fontWeight: 'bold',
  },
  action: {
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
  },
  buyButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  secureCardData: {
    flex: 1,
    flexDirection: 'row',
  },
  expireDate: {
    flex: 0.5,
  },
  dataCvv: {
    marginLeft: 25,
    flex: 0.3,
  },
  paymentContainer: {
    marginHorizontal: 20,
  },
});

const Checkout = ({navigation, route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const inputExpireDate = useRef();
  const inputCvv = useRef();
  const inputCardHolder = useRef();
  const inputCardNumber = useRef();
  const {paymentMethods, order} = route.params || {};
  const product = order.item || {};

  const sendPayment = () => {
    const parameters = {
      productId: [product.id],
      quantity: 1,
      details: order.message,
      location: order.location,
      totalPrice: order.total,
      paymentMethod: paymentMethods.description,
      productsName: [product.title],
      productImage: product.image,
    };
    Api.orderApi
      .createOrder(parameters)
      .then((data) => {
        if (data.errors) {
          setErrorMessage(data.errors);
          setIsVisible(true);
        } else {
          console.warn('Create success Order');
          console.warn('Payment Api');
        }
      })
      .catch((e) => {
        console.warn('e', e);
        setErrorMessage(e.errors);
        setIsVisible(true);
      });
  };

  const onChange = (value, type) => {
    if (type === 'cardNumber') {
      setCardNumber(inputCardNumber.current.state.value);
    }
    if (type === 'cardHolder') {
      setCardHolder(value);
    }
    if (type === 'expireDate') {
      setExpireDate(value);
    }
    if (type === 'cvv') {
      setCvv(value);
    }
    if (
      value.length > 0 &&
      inputCardNumber.current.state.validate &&
      inputCardHolder.current.state.validate &&
      inputExpireDate.current.state.validate &&
      inputCvv.current.state.validate
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView>
        <View style={styles.container}>
          <CardPayment item={paymentMethods} />
        </View>
        <View style={styles.paymentContainer}>
          <View style={styles.action}>
            <Input
              label="Card number"
              labelStyle={styles.title}
              value={cardNumber}
              ref={inputCardNumber}
              type="cardNumber"
              placeholder=""
              placeholderTextColor="#cccccc"
              textInputStyle={styles.textInput}
              keyboardType="numeric"
              maxLength={16}
              onChangeInput={(value) => onChange(value, 'cardNumber')}
            />
          </View>
          <View style={styles.action}>
            <Input
              label="Card holder"
              labelStyle={styles.title}
              value={cardHolder}
              ref={inputCardHolder}
              type="name"
              placeholder=""
              placeholderTextColor="#cccccc"
              textInputStyle={styles.textInput}
              maxLength={50}
              onChangeInput={(value) => onChange(value, 'cardHolder')}
            />
          </View>
          <View style={styles.secureCardData}>
            <View style={[styles.expireDate, styles.action]}>
              <Input
                label="Expire Date"
                labelStyle={styles.title}
                value={expireDate}
                ref={inputExpireDate}
                type="expireDate"
                placeholder="XX/XX"
                placeholderTextColor="#cccccc"
                textInputStyle={styles.textInput}
                maxLength={5}
                onChangeInput={(value) => onChange(value, 'expireDate')}
              />
            </View>
            <View style={[styles.dataCvv, styles.action]}>
              <Input
                label="CVV"
                labelStyle={styles.title}
                value={cvv}
                ref={inputCvv}
                type="cvv"
                placeholder="XXX"
                placeholderTextColor="#cccccc"
                keyboardType="numeric"
                textInputStyle={styles.textInput}
                maxLength={3}
                onChangeInput={(value) => onChange(value, 'cvv')}
              />
            </View>
          </View>
          <View style={styles.buyButtonContainer}>
            <Button
              onPress={sendPayment}
              variant="primary"
              label="Complete Payment"
              disabled={disabledButton}
            />
          </View>
        </View>
        <CustomModal
          isVisible={isVisible}
          backdrop={() => setIsVisible(false)}
          title={'Error!'}
          message={errorMessage}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
