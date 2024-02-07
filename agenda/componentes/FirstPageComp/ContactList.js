// componentes/FirstPageComp/ContactList.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const Contatos = [
  { nome: 'Diego', imagem: 'url_da_imagem' },
  { nome: 'Erick', imagem: 'url_da_imagem' },
  { nome: 'Felipe Moraes', imagem: 'url_da_imagem' },
  { nome: 'João Pedro', imagem: 'url_da_imagem' },
  { nome: 'João Victor', imagem: 'url_da_imagem' },
  { nome: 'Lucas Gustavo', imagem: 'url_da_imagem' },
  { nome: 'Mayck', imagem: 'url_da_imagem' },
  { nome: 'Ackles', imagem: 'url_da_imagem' },
];

const Item = ({ nome, imagem }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: imagem }} style={styles.profileImage} />
    <Text style={styles.name}>{nome}</Text>
  </View>
);

const ContactList = () => {
  const renderItem = ({ item }) => (
    <Item nome={item.nome} imagem={item.imagem} />
  );

  return (
    <FlatList
      data={Contatos}
      renderItem={renderItem}
      keyExtractor={item => item.nome}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});

export default ContactList;

