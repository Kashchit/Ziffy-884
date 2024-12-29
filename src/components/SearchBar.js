import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search for restaurants"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#FF5A5F', // Zomato-like red color
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    fontWeight: '600',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default SearchBar;
