import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from './FirstPage';
import ContactDetailScreen from './SecondPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
        ola
      </Stack.Navigator>
    </NavigationContainer>
  );
}
