// componentes/FirstPageComp/SearchBar.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = () => (
  <TextInput style={styles.searchBar} placeholder="Pesquisar contatos" />
);

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
});

export default SearchBar;
