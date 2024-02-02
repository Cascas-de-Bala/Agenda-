import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ProfilePic from './componentes/Configuracao_de_contato/ProfilePic';
import IconContainer from './componentes/Configuracao_de_contato/IconContainer';
import InfoContainer from './componentes/Configuracao_de_contato/InfoContainer';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <ProfilePic source={require('./img/Dean.png')} />
      <Text style={styles.name}>Ackles</Text>
      <IconContainer />
      <InfoContainer />
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
  name: {
    color: '#fff',
    fontSize: 40, // Ajuste o valor conforme necessário
    fontWeight: 'bold',
    marginTop: 10,
  },
});
