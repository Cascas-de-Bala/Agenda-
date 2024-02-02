import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePic}
        source={require('./img/Dean.png')}
      />
      <Text style={styles.name}>Ackles</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Chamada iniciada')}>
          <MaterialIcons name="call" size={54} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Mensagem enviada')}>
          <MaterialIcons name="message" size={54} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Chamada de vídeo iniciada')}>
          <MaterialIcons name="videocam" size={54} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:dean13@hotmail.com?subject=Assunto&body=Mensagem')}>
          <MaterialIcons name="mail" size={54} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Telefone: +512 866-907-3235</Text>
        <Text style={styles.info}>Nome: Jensen Ackles</Text>
        <Text style={styles.info}>Apelido: Dean</Text>
        <Text style={styles.info}>E-mail: dean13@hotmail.com</Text>
        <Text style={styles.info}>Locais: Austin-Tx</Text>
        <Text style={styles.info}>Informações adicionais: Sobrenatural</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  name: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
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
