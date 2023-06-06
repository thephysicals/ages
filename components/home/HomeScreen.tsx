import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import HeaderLogo from '../../templates/HeaderLogo';

const Separator = () => <View style={styles.separator} />;

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <HeaderLogo>
      <>
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
            onPress={() => {
              navigation.navigate('UserForm');
            }}>
            cadastrar
          </Text>
          . {'\n'} Entre como Visitante para simples consulta, sem acesso às
          opções avançadas como reservas, comentários e cadastro de
          equipamentos.
        </Text>
        <Separator />
        <Button
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          title="Log In"
        />
        <Separator />
        <Button onPress={() => {}} title="Visitante" />
      </>
    </HeaderLogo>
  );
}

const styles = {
  separator: {
    borderBottomColor: '#C7D7FB',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
  },
};

export default HomeScreen;
