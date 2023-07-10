import React, {useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import HeaderLogo from '../../templates/HeaderLogo';
import {Login} from '../../types/Login';
import {Message, TypeMessage} from '../../types/Message';
import Violation from '../../types/Violation';
import {loginService, storeJwt} from '../../services/login/login-service';
import {useNavigation} from '@react-navigation/native';
import {cpfMask} from '../../services/user/user-service';

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

  const maskCpf = (cpf: string) => {
    setLogin(cpfMask(cpf));
  };

  const createViolation = (field: string, message: string): Violation => {
    const v: Violation = {field, message};
    return v;
  };

  const loginUser = (l: Login) => {
    const initialViolations: Violation[] = [];
    const msg: Message = {
      message: '',
      type: TypeMessage.success,
      violations: [],
    };
    if (!l.login) {
      initialViolations.push(createViolation('cpf', 'Informe seu CPF'));
    }

    if (l.login && l.login.length < 14) {
      initialViolations.push(createViolation('cpf', 'CPF inválido'));
    }

    if (!l.senha) {
      initialViolations.push(createViolation('senha', 'Informe a senha'));
    }

    if (initialViolations.length > 0) {
      msg.violations = initialViolations;
      msg.type = TypeMessage.warning;
      setMessage(msg);
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
          onChangeText={maskCpf}
          value={login}
          placeholderTextColor="#5C5C5C"
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
          placeholderTextColor="#5C5C5C"
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
    color: '#000000',
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
