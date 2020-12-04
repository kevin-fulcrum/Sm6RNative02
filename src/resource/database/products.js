import database from '@react-native-firebase/database';

const reference = database().ref('/products');

export const getProducts = () => {
  reference.once('value').then((snapshot) => {
    console.warn('product data: ', snapshot.val());
  });
};
