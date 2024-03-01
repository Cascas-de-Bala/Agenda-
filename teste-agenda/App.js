import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from './ContactListScreen';
import ContactDetailScreen from './ContactDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList" screenOptions={{headerShown : false}}>
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="NewPage" component={ContactDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


