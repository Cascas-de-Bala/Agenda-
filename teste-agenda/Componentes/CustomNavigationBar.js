// CustomNavigationBar.js
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const CustomNavigationBar = ({ navigation }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', padding: 10 }}>
    <Icon
      name='clock-o'
      type='font-awesome'
      color='white'
      onPress={() => navigation.navigate('Recentes')} />
    <Icon
      name='star-o'
      type='font-awesome'
      color='white'
      onPress={() => navigation.navigate('Favoritos')} />
    <Icon
      name='address-book-o'
      type='font-awesome'
      color='white'
      onPress={() => navigation.navigate('Contatos')} />
  </View>
);

export default CustomNavigationBar;
