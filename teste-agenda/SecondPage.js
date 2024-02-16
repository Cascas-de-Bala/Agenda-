import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-elements';

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={contact.image}
        style={styles.avatar}
      />
      <Card>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
          Telefone: {contact.phone}
        </Text>
        <Text style={{marginBottom: 10}}>
          Apelido: {contact.nickname}
        </Text>
        <Text style={{marginBottom: 10}}>
          E-mail: {contact.email}
        </Text>
        <Text style={{marginBottom: 10}}>
          Localização: {contact.location}
        </Text>
        <Text style={{marginBottom: 10}}>
          Informações adicionais: {contact.additionalInfo}
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
});

export default ContactDetailScreen;

