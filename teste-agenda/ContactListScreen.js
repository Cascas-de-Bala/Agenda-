import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomNavigationBar from './Componentes/CustomNavigationBar';

// Definindo o componente SearchBarComponent
const SearchBarComponent = ({ search, updateSearch, style }) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      placeholder="Pesquisar"
      placeholderTextColor="#808080" // Define a cor do placeholder
      value={search}
      onChangeText={updateSearch}
    />
  );
};

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  // Regex para números de telefone do Brasil, Europa e América do Norte
  const re = /^(\+55\d{2}9\d{8})|(\+\d{1,3}[- ]?\d{10,14})$/;
  return re.test(phone);
};

const ContactListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]); // Novo estado para os resultados da pesquisa
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({
    id: '',
    name: '',
    phone: '',
    nickname: '',
    email: '',
    location: '',
    additionalInfo: ''
  });
  const [formError, setFormError] = useState(''); // Novo estado para o erro do formulário
  const [emailError, setEmailError] = useState(''); // Novo estado para o erro de e-mail
  const [phoneError, setPhoneError] = useState(''); // Novo estado para o erro de telefone

  useEffect(() => {
    const initialContacts = []; // Substitua isso pelos seus contatos iniciais
    const sortedContacts = [...initialContacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
    setFilteredContacts(sortedContacts); // Inicializa os resultados da pesquisa com todos os contatos
  }, []);

  const updateSearch = (search) => {
    setSearch(search);

    if (search) {
      setFilteredContacts(contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())));
    } else {
      setFilteredContacts(contacts);
    }
  };

  const addContact = () => {
    const updatedContacts = [...contacts, { ...newContact, id: Math.random().toString() }];
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts); // Atualiza os resultados da pesquisa
    setNewContact({
      id: '',
      name: '',
      phone: '',
      nickname: '',
      email: '',
      location: '',
      additionalInfo: ''
    });
    setShowForm(false);
  };

  const editContact = (id) => {
    const contactToEdit = contacts.find(contact => contact.id === id);
    setNewContact(contactToEdit); // Preenche o formulário com as informações do contato
    setShowForm(true); // Mostra o formulário
  };

  const saveContact = () => {
    // Verifica se todas as informações necessárias foram preenchidas
    if (!newContact.name || !newContact.phone || !newContact.nickname || !newContact.email || !newContact.location || !newContact.additionalInfo) {
      setFormError('Por favor, preencha todas as informações.');
      return;
    } else {
      setFormError('');
    }

    if (!isValidEmail(newContact.email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    } else {
      setEmailError('');
    }

    if (!isValidPhone(newContact.phone)) {
      setPhoneError('Por favor, insira um número de telefone válido.');
      return;
    } else {
      setPhoneError('');
    }

    const existingContactIndex = contacts.findIndex(contact => contact.id === newContact.id);

    let updatedContacts;
    if (existingContactIndex !== -1) {
      // Se o contato já existir, atualiza as informações do contato
      updatedContacts = contacts.map((contact, index) =>
        index === existingContactIndex ? newContact : contact
      );
    } else {
      // Se o contato não existir, adiciona o novo contato à lista
      updatedContacts = [...contacts, newContact];
    }

    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts); // Atualiza os resultados da pesquisa
    setNewContact({
      id: '',
      name: '',
      phone: '',
      nickname: '',
      email: '',
      location: '',
      additionalInfo: ''
    });
    setShowForm(false);
  };

  const removeContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts); // Atualiza os resultados da pesquisa
  };

  return (
    <View style={styles.container}>
      <SearchBarComponent style={styles.searchBar} search={search} updateSearch={updateSearch} />
      {showForm && (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#808080" // Define a cor do placeholder
            value={newContact.name}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, name: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="#808080" // Define a cor do placeholder
            value={newContact.phone}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, phone: text }))}
          />
          <View style={styles.errorContainer}>{phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}</View>
          <TextInput
            style={styles.input}
            placeholder="Apelido"
            placeholderTextColor="#808080" // Define a cor do placeholder
            value={newContact.nickname}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, nickname: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#808080" // Define a cor do placeholder
            value={newContact.email}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, email: text }))}
          />
          <View style={styles.errorContainer}>{emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}</View>
          <TextInput
            style={styles.input}
            placeholder="Localização"
            placeholderTextColor="#808080" // Define a cor do placeholder
            value={newContact.location}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, location: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Informações Adicionais"
            placeholderTextColor="#808080" // Define a cor do placeholder
            value={newContact.additionalInfo}
            onChangeText={text => setNewContact(prevState => ({ ...prevState, additionalInfo: text }))}
          />
          <View style={styles.errorContainer}>{formError ? <Text style={styles.errorText}>{formError}</Text> : null}</View>
          <Button title="Salvar Contato" onPress={saveContact} />
        </View>
      )}
      <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
        <Icon name="plus" size={15} color="white" />
      </TouchableOpacity>
      {filteredContacts.map((contact, index) => (
        <TouchableOpacity
          key={index}
          style={styles.contactItem}
          onPress={() => navigation.navigate('NewPage', { contact })}
        >
          <Image source={contact.image} style={styles.contactImage} />
          <Text style={styles.contactName}>{contact.name}</Text>
          <TouchableOpacity style={styles.buttonEdit} onPress={() => editContact(contact.id)}>
            <Icon name="edit" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRemove} onPress={() => removeContact(contact.id)}>
            <Icon name="trash" size={20} color="white" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      <CustomNavigationBar navigation={navigation} />
    </View>
  );
};

// Definindo os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2F',
    padding: 10,
    marginTop: 45,
  },
  searchBar: {
    backgroundColor: '#2D2D2F', // Altere isso para a cor de fundo desejada
  },
  formContainer: {
    backgroundColor: '#3E3E40',
    padding: 15,
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
    opacity: 0.8,
    margin: 10,
    borderRadius: 10,
    color: 'white',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E3E40',
    padding: 15,
    margin: 5,
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  contactName: {
    fontSize: 20,
    color: 'white',
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    right: 34,
    top: 28,
    backgroundColor: '#2D2D2F',
    padding: 5,
    borderRadius: 50,
  },
  buttonEdit: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonRemove: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});

export default ContactListScreen;