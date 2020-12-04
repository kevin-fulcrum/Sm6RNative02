import database from '@react-native-firebase/database';

const reference = database().ref('/products');

export const getProducts = () => {
   const data = reference.once('value').then((snapshot) => {
    console.warn('getProducts data: ', snapshot.val());
    return  snapshot.val();
  });
  return data;
};
