import React from 'react';
import {TouchableHighlight, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IndexScreen from './components/index/IndexScreen';
import LoginScreen from './components/login/LoginScreen';
import UserForm from './components/user/UserForm';
import HomeScreen from './components/home/HomeScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const logOut = () => {};

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
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
          name="Index"
          component={IndexScreen}
          options={{title: 'A.G.E.S.'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerRight: () => (
              <TouchableHighlight onPress={() => logOut()}>
                <Image
                  source={require('./assets/log-out.png')}
                  style={styles.image}
                />
              </TouchableHighlight>
            ),
          })}
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

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
  },
});
export default App;
