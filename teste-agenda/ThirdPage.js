import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditContactScreen = () => {
  const [image, setImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('É necessário permissão para acessar a galeria!');
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setImage(pickerResult.uri);
  };

  return (
    <View style={styles.container}>
      <Button title="Escolher nova foto" onPress={openImagePickerAsync} color="#517fa4" />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} placeholder="+512 866-907-3235" />

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Jensen Ackles" />

      <Text style={styles.label}>Apelido</Text>
      <TextInput style={styles.input} placeholder="Dean" />

      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} placeholder="dean813@hotmail.com" />

      <Text style={styles.label}>Locais</Text>
      {/* Adicione o componente do mapa aqui */}

      <Text style={styles.label}>Informações adicionais</Text>
      <TextInput style={styles.input} placeholder="Se quiser sim mano" />

      <View style={styles.buttonContainer}>
        <Button title="Apagar" onPress={() => {}} color="#ff0000" />
        <Button title="Concluido" onPress={() => {}} color="#517fa4" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default EditContactScreen;

