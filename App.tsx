import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HeaderLogo from './templates/HeaderLogo';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <HeaderLogo>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontFamily: 'Dosis',
          padding: 10,
        }}>
        Essa é a área de gerenciamento e reservas de equipamentos e salas
        compartilhadas do CEFID. Clique em login se já tem cadastro, se não,
        clique em{' '}
        <Text
          style={{textDecorationLine: 'underline', color: 'blue'}}
          onPress={() => {}}>
          cadastrar
        </Text>
        . {'\n'} Entre como Visitante para simples consulta, sem acesso às
        opções avançadas como reservas, comentários e cadastro de equipamentos.
      </Text>
      <View
        style={{
          borderBottomColor: '#C7D7FB',
          borderBottomWidth: StyleSheet.hairlineWidth,
          padding: 10,
        }}
      />
      <Button onPress={() => {}} title="Log In" />
      <View
        style={{
          borderBottomColor: '#C7D7FB',
          borderBottomWidth: StyleSheet.hairlineWidth,
          padding: 10,
        }}
      />
      <Button onPress={() => {}} title="Visitante" />
    </HeaderLogo>
  );
}

function DetailsScreen() {
  return (
    <HeaderLogo>
      <Text>Details Screen</Text>
    </HeaderLogo>
  );
}

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
