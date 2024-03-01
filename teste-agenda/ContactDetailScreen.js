import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.contactItem}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <View style={styles.contactInfoIconContainer}>
          <Icon name="phone" size={20} style={styles.iconStyle}/>
          <Text style={styles.contactInfo}>Telefone: {contact.phone}</Text>
        </View>
        <View style={styles.contactInfoIconContainer}>
          <Icon name="user" size={20} style={styles.iconStyle}/>
          <Text style={styles.contactInfo}>Apelido: {contact.nickname}</Text>
        </View>
        <View style={styles.contactInfoIconContainer}>
          <Icon name="envelope" size={20} style={styles.iconStyle}/>
          <Text style={styles.contactInfo}>Email: {contact.email}</Text>
        </View>
        <View style={styles.contactInfoIconContainer}>
          <Icon name="map-marker" size={20} style={styles.iconStyle}/>
          <Text style={styles.contactInfo}>Localização: {contact.location}</Text>
        </View>
        <View style={styles.contactInfoIconContainer}>
          <Icon name="info-circle" size={20} style={styles.iconStyle}/>
          <Text style={styles.contactInfo}>Informações Adicionais: {contact.additionalInfo}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center', // Adicionado para centralizar verticalmente
    alignItems: 'center', // Adicionado para centralizar horizontalmente
  },
  contactItem: {
    alignItems: 'center',
    padding: 20,
    margin: 5,
  },
  contactName: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  contactInfoIconContainer:{
     flexDirection:'row',
     alignItems:'center',
     marginBottom :5 
   },
   iconStyle:{
      color:'#fff',
      marginRight :10 
   }, 
   contactInfo:{
      fontSize :16,
      color:'#fff'
   }
});

export default ContactDetailScreen;


