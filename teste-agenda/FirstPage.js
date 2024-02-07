// ContactListScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import contacts from './Contatos'; // Importando a lista de contatos
import CustomNavigationBar from './Componentes/CustomNavigationBar';
import SearchBarComponent from './Componentes/SeachBarComponentes';

const ContactListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredContacts(sortedContacts);
  }, []);

  const updateSearch = (search) => {
    setSearch(search);

    if (search) {
      setFilteredContacts(contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())));
    } else {
      const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
      setFilteredContacts(sortedContacts);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBarComponent search={search} updateSearch={updateSearch} />
      {filteredContacts.map((contact, index) => (
        <View key={index} style={styles.contactItem}>
          <Image source={{ uri: contact.image }} style={styles.contactImage} />
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactPhone}>{contact.phone}</Text>
        </View>
      ))}
      <CustomNavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactName: {
    fontSize: 18,
    color: 'black',
  },
  contactPhone: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ContactListScreen;
