import React from 'react';
import { SafeAreaView } from 'react-native';
import SearchBar from '../componentes/FirstPageComp/SearchBar';
import ContactList from '../componentes/FirstPageComp/ContactList';


export default function FirstPage() {
  return (
    <SafeAreaView>
      <SearchBar />
      <ContactList />
    </SafeAreaView>
  );
}