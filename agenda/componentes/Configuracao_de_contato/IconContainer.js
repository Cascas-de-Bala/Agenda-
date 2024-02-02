// IconContainer.js
import React from 'react';
import { View, TouchableOpacity, Alert, Linking, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconContainer() {
  return (
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
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
});
