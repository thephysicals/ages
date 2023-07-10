import React, {useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import HeaderLogo from '../../templates/HeaderLogo';
import {Login} from '../../types/Login';
import {Message, TypeMessage} from '../../types/Message';
import Violation from '../../types/Violation';
import {loginService, storeJwt} from '../../services/login/login-service';
import {useNavigation} from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

const LoginScreen = (props: any) => {
  const navigation = useNavigation();

  const messageSuccess = props?.route?.params?.messageSuccess;
  const [login, setLogin] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [message, setMessage] = React.useState<Message>({
    message: '',
    violations: [],
    type: TypeMessage.success,
  });

  const createViolation = (
    field: string,
    messageViolation: string,
  ): Violation => {
    const v: Violation = {field: field, message: messageViolation};
    return v;
  };

  const loginUser = (l: Login) => {
    const initialViolations: Violation[] = [];
    if (!l.login) {
      initialViolations.push(
        createViolation('senha', 'Por favor, informe o CPF'),
      );
    }
    if (!l.senha) {
      initialViolations.push(
        createViolation('senha', 'Por favor, informe sua senha'),
      );
    }

    if (initialViolations.length > 0) {
      message.violations = initialViolations;
      message.type = TypeMessage.warning;
      setMessage(message);
      return;
    }
    loginService(
      l,
      async data => {
        storeJwt(data.data.token);
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      },
      (violations: Violation[]) => {
        const messageError: Message = {
          message: 'Erro ao tentar logar usuário!',
          type: TypeMessage.warning,
          violations: violations,
        };
        setMessage(messageError);
        return;
      },
    );
  };

  useEffect(() => {
    if (messageSuccess) {
      setMessage(messageSuccess);
    }
  }, [messageSuccess]);

  return (
    <HeaderLogo
      message={message}
      setMessage={setMessage}
      navigation={navigation}>
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
          onChangeText={setLogin}
          value={login}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          autoComplete="off"
          keyboardAppearance="dark"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={setSenha}
          value={senha}
        />
        <Separator />
        <Button
          onPress={() => {
            loginUser({login, senha});
          }}
          title="Log In"
        />
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
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C7D7FB',
    borderRadius: 10,
    height: 40,
    padding: 5,
  },
  titulo: {
    fontFamily: 'Dosis',
    fontSize: 20,
    padding: 5,
    flex: 1,
    color: '#000000',
  },
});

export default LoginScreen;
