import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import CustomNavigationBar from './Componentes/CustomNavigationBar';
import SearchBarComponent from './Componentes/SeachBarComponentes';

const ContactListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    nickname: '',
    email: '',
    location: '',
    image: { uri: '' },
    additionalInfo: ''
  });

  useEffect(() => {
    const initialContacts = []; // Substitua isso pelos seus contatos iniciais
    const sortedContacts = [...initialContacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }, []);

  const updateSearch = (search) => {
    setSearch(search);

    if (search) {
      setContacts(contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())));
    } else {
      const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
      setContacts(sortedContacts);
    }
  };

  const addContact = () => {
    setContacts(prevContacts => [...prevContacts, newContact]);
    setNewContact({
      name: '',
      phone: '',
      nickname: '',
      email: '',
      location: '',
      image: { uri: '' },
      additionalInfo: ''
    });
    setShowForm(false);
  };

  const removeContact = (contactName) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.name !== contactName));
  };

  return (
    <View style={styles.container}>
      <SearchBarComponent search={search} updateSearch={updateSearch} />
      {showForm && (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={newContact.name}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, name: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={newContact.phone}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, phone: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Apelido"
            value={newContact.nickname}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, nickname: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={newContact.email}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, email: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Localização"
            value={newContact.location}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, location: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="URL da Imagem"
            value={newContact.image.uri}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, image: { uri: text } }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Informações Adicionais"
            value={newContact.additionalInfo}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, additionalInfo: text }))}
          />
          <Button title="Salvar Contato" onPress={addContact} />
        </View>
      )}
      {contacts.map((contact, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.contactItem}
          onPress={() => navigation.navigate('NewPage', { contact })}
        >
          <Image source={contact.image} style={styles.contactImage} />
          <Text style={styles.contactName}>{contact.name}</Text>
          <Button title="Remover" onPress={() => removeContact(contact.name)} />
        </TouchableOpacity>
      ))}
      <CustomNavigationBar navigation={navigation} />
      <Button title="Adicionar Contato" onPress={() => setShowForm(true)} /> 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  formContainer: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'black',
    opacity:0.8,
    margin: 10,
    borderRadius:10,
    color: 'white', // Adiciona a cor da fonte como branca
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#2D2D2F',
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
    color: 'white',
  },
  contactPhone: {
    fontSize: 14,
    color: 'white', // Adiciona a cor da fonte como branca
  },
});


export default ContactListScreen;

