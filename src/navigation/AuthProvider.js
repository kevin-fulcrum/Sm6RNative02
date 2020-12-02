import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            const data = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            return data;
          } catch (err) {
            console.warn('err', err.message);
            switch (err.code) {
              case 'auth/invalid-email':
              case 'auth/user-disabled':
              case 'auth/user-not-found':
                return {
                  message: 'Invalid Email, try with another email address',
                  isError: true,
                };
              case 'auth/wrong-password':
                return err.message;
              default:
                return 'Something went wrong!';
            }
          }
        },
        register: async (email, password) => {
          try {
            const data = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            console.warn('data register', data);
          } catch (e) {
            console.warn(e);
          }
        },
        logout: async () => {
          try {
            const data = await auth().signOut();
            console.warn('data signOut', data);
          } catch (e) {
            console.warn(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
