import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPage = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.contactItem}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactInfo}>Telefone: {contact.phone}</Text>
        <Text style={styles.contactInfo}>Apelido: {contact.nickname}</Text>
        <Text style={styles.contactInfo}>Email: {contact.email}</Text>
        <Text style={styles.contactInfo}>Localização: {contact.location}</Text>
        <Text style={styles.contactInfo}>Informações Adicionais: {contact.additionalInfo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  contactItem: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 5,
  },
  contactName: {
    fontSize: 18,
    color: '#000',
  },
  contactInfo: {
    fontSize: 14,
    color: 'gray',
  },
});

export default NewPage;


