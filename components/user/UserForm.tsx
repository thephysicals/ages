import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {create} from '../../services/user/user-service';
import User from '../../types/User';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import Violation from '../../types/Violation';
import {Message, TypeMessage} from '../../types/Message';

const Separator = () => <View style={styles.separator} />;
const UserForm = ({navigation}: {navigation: any}) => {
  const [cpf, setCpf] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = React.useState('');
  const [msg, setMessage] = React.useState<Message>({
    message: '',
    violations: [],
    type: TypeMessage.success,
  });

  const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const createViolation = (field: string, message: string): Violation => {
    const v: Violation = {field, message};
    return v;
  };

  const createUser = (data: User) => {
    const initialViolations: Violation[] = [];
    const message: Message = {
      message: '',
      type: TypeMessage.success,
      violations: [],
    };

    if (!data.cpf) {
      initialViolations.push(createViolation('cpf', 'Informe seu CPF'));
    }

    if (!data.nome) {
      initialViolations.push(createViolation('nome', 'Informe seu nome'));
    }

    if (!data.email) {
      initialViolations.push(createViolation('email', 'Informe seu email'));
    }

    if (!data.senha) {
      initialViolations.push(createViolation('senha', 'Informe sua senha'));
    }

    if (!confirmacaoSenha) {
      initialViolations.push(
        createViolation(
          'confirmacaoSenha',
          'Repita sua senha no campo Confirme sua senha',
        ),
      );
    }
    if (data.email && !validateEmail(data.email)) {
      initialViolations.push(createViolation('email', 'Email inválido'));
    }

    if (data.senha && confirmacaoSenha) {
      if (data.senha !== confirmacaoSenha) {
        initialViolations.push(
          createViolation('senha', 'A confirmação de senha não confere'),
        );
      }
    }
    if (initialViolations.length > 0) {
      message.violations = initialViolations;
      message.type = TypeMessage.warning;
      setMessage(message);
      return;
    }
    create(
      data,
      () => {
        const messageSuccess: Message = {
          message: 'Usuário cadastrado com sucesso!',
          type: TypeMessage.success,
          violations: [],
        };
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen', params: {messageSuccess}}],
        });
        setMessage(messageSuccess);
      },
      (v: Violation[]) => {
        const messageError: Message = {
          message: 'Erro ao cadastrar usuário!',
          type: TypeMessage.warning,
          violations: v,
        };
        setMessage(messageError);
        return;
      },
    );
  };
  return (
    <HeaderSmallLogo title="Novo usuário" message={msg} setMessage={setMessage}>
      <View style={styles.container}>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o CPF"
          keyboardType="numeric"
          inputMode="numeric"
          keyboardAppearance="dark"
          autoCorrect={false}
          value={cpf}
          onChangeText={setCpf}
        />
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu nome"
          inputMode="text"
          keyboardAppearance="dark"
          autoCorrect={true}
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu email"
          inputMode="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          autoCorrect={true}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          autoComplete="off"
          keyboardAppearance="dark"
          secureTextEntry={true}
          autoCorrect={false}
          value={senha}
          onChangeText={setSenha}
        />
        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          autoComplete="off"
          keyboardAppearance="dark"
          secureTextEntry={true}
          autoCorrect={false}
          value={confirmacaoSenha}
          onChangeText={setConfirmacaoSenha}
        />
        <Separator />
        <Button
          onPress={() => {
            const user: User = {
              cpf: cpf,
              nome: nome,
              email: email,
              senha: senha,
            };

            createUser(user);
          }}
          title="Cadastrar"
        />
      </View>
    </HeaderSmallLogo>
  );
};

const styles = {
  container: {},
  titulo: {fontFamily: 'Dosis', fontSize: 20, padding: 5, flex: 1},
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
  separator: {
    borderBottomColor: '#C7D7FB',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
  },
};
export default UserForm;
