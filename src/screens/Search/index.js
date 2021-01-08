import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../../components/core/SearchBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Search = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};

export default Search;
