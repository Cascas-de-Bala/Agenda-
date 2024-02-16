// Importando os componentes necessários do React, React Native e React Native Elements
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Image, Icon } from 'react-native-elements';

// Definindo o componente ContactDetailScreen
const ContactDetailScreen = ({ route, navigation }) => { // Adicione navigation aqui
  // Extraindo o contato das rotas
  const { contact } = route.params;


  // Retornando a visualização do componente
  return (
    <View style={styles.container}>
      {/* Exibindo a imagem do contato */}
      <Image
        source={contact.image}
        style={styles.avatar}
      />
      <View>
        {/* // Exibindo o editor*/}
        <View style={styles.editIconContainer}>
          <Icon
            name='edit'
            type='font-awesome'
            color='#517fa4'
            size={24}
            onPress={() => navigation.navigate('EditContactScreen', { contact: contact })}
            
          />
        </View>
        {/* // Adicionando um divisor */}
        <Card.Divider />
        {/* // Exibindo o número de telefone do contato */}
        <View style={styles.infoContainer}>
          <Icon name='phone' type='font-awesome' color='#517fa4' size={24} />
          <Text style={styles.infoText}>Telefone: {contact.phone}</Text>
        </View>
        {/* // Exibindo o nome do contato */}
        <View style={styles.infoContainer}>
          <Icon name='user' type='font-awesome' color='#517fa4' size={24} />
          <Text style={styles.infoText}>Nome: {contact.nickname}</Text>
        </View>
        {/* // Exibindo o e-mail do contato */}
        <View style={styles.infoContainer}>
          <Icon name='envelope' type='font-awesome' color='#517fa4' size={24} />
          <Text style={styles.infoText}>E-mail: {contact.email}</Text>
        </View>
        {/* // Exibindo a localização do contato */}
        <View style={styles.infoContainer}>
          <Icon name='map-marker' type='font-awesome' color='#517fa4' size={24} />
          <Text style={styles.infoText}>Localização: {contact.location}</Text>
        </View>
        {/* // Exibindo informações adicionais do contato */}
        <View style={styles.infoContainer}>
          <Icon name='info-circle' type='font-awesome' color='#517fa4' size={24} />
          <Text style={styles.infoText}>Informações adicionais: {contact.additionalInfo}</Text>
        </View>
      </View>
    </View>
    
  );
};

// Definindo os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
  },
  infoText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 19
  },
});

// Exportando o componente ContactDetailScreen
export default ContactDetailScreen;
