const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPassword = 6;
const cvv = 3;
const minCharacterCard = 15;
const expireDate = /^(0[1-9]|[0-2])\/?([0-9]{2}|[0-9]{2})$/;
const numbers = /^\d+$/;
const name = /^[a-zA-ZÀ-ú0-9]+( [a-zA-ZÀ-ú0-9]+)*$/;
const Validator = (type, value) => {
  switch (type) {
    case 'email':
      if (formatEmail.test(value)) {
        return {
          error: '',
        };
      }
      return {
        error: 'Incorrect email format. e: user@gmail.com',
        value,
      };
    case 'password':
      if (value.length >= minPassword) {
        return {
          error: '',
        };
      }
      return {
        error: '6 are the minimun character required',
        value,
      };
    case 'cardNumber':
      if (value.length >= minCharacterCard) {
        return {error: ''};
      }
      return {
        error: `${minCharacterCard} are the minimun number of character`,
        value,
      };
    case 'name':
      if (name.test(value)) {
        return {error: ''};
      }
      return {
        error: 'incorrect format field',
        value,
      };
    case 'expireDate':
      if (expireDate.test(value)) {
        return {error: ''};
      }
      return {
        error: 'incorrect format date',
        value,
      };
    case 'number':
      if (number.test(value)) {
        return {error: ''};
      }
      return {
        error: 'incorrect format number',
        value,
      };
    case 'cvv':
      if (value.length === cvv && numbers.test(value)) {
        return {error: ''};
      }
      return {
        error: 'incorrect cvv format',
        value,
      };
    default:
      return {
        error: '',
      };
  }
};

export default Validator;
