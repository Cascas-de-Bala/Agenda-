// Importando os componentes necessários do React e React Native
import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactDetailScreen from './SecondPage'; // Importe o componente ContactDetailScreen aqui

// Definindo o componente ContactListScreen
const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([
    // Adicione seus contatos aqui
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <View>
      <Button title="Adicionar Contato" onPress={() => addContact({ /* detalhes do contato */ })} />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text onPress={() => navigation.navigate('ContactDetail', { contact: item })}>{item.name}</Text>
            <Button title="Deletar" onPress={() => deleteContact(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

// Definindo o Stack Navigator
const Stack = createStackNavigator();

// Definindo o componente App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exportando o componente App

export default App;

