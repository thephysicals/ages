import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './components/home/HomeScreen';
import LoginScreen from './components/login/LoginScreen';
import UserForm from './components/user/UserForm';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1D6AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'A.G.E.S.'}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Log In'}}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{title: 'Cadastrar novo usuário'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
