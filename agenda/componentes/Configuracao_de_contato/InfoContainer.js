// InfoContainer.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function InfoContainer() {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.info}>Telefone: +512 866-907-3235</Text>
      <Text style={styles.info}>Nome: Jensen Ackles</Text>
      <Text style={styles.info}>Apelido: Dean</Text>
      <Text style={styles.info}>E-mail: dean13@hotmail.com</Text>
      <Text style={styles.info}>Locais: Austin-Tx</Text>
      <Text style={styles.info}>Informações adicionais: Sobrenatural</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    infoContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
      },
      info: {
        color: '#fff',
        fontSize: 32,
        marginTop: 20,
      },
});
