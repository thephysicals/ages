import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import HeaderLogo from '../../templates/HeaderLogo';

const Separator = () => <View style={styles.separator} />;

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [senhaConfimacao, setSenhaConfirmacao] = React.useState('');

  return (
    <HeaderLogo>
      <View style={styles.container}>
        <Text style={styles.titulo}>Log In</Text>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o CPF"
          keyboardType="numeric"
          inputMode="numeric"
          keyboardAppearance="dark"
          autoCorrect={false}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          autoComplete="off"
          keyboardAppearance="dark"
          secureTextEntry={true}
          autoCorrect={false}
        />
        <Separator />
        <Button onPress={() => {}} title="Log In" />
      </View>
    </HeaderLogo>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#C7D7FB',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
  },
  container: {},
  label: {
    fontFamily: 'Dosis',
    fontSize: 20,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C7D7FB',
    borderRadius: 10,
    height: 40,
    padding: 5,
  },
  titulo: {fontFamily: 'Dosis', fontSize: 20, padding: 5, flex: 1},
});

export default LoginScreen;
