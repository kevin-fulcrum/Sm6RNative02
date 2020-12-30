module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
