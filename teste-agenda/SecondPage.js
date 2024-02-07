import React from 'react';
import { View, Text } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View>
      <Card>
        <Avatar source={{uri: contact.image}} />
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

export default ContactDetailScreen;

