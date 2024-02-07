// SearchBarComponent.js
import React from 'react';
import { SearchBar } from 'react-native-elements';

const SearchBarComponent = ({ search, updateSearch }) => (
  <SearchBar
    placeholder="Pesquisar contatos"
    onChangeText={updateSearch}
    value={search}
    lightTheme
    round
  />
);

export default SearchBarComponent;
