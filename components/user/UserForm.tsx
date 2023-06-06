import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {create} from '../../services/user/user-service';
import User from '../../types/User';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import Violation from '../../types/Violation';

const Separator = () => <View style={styles.separator} />;
const UserForm = () => {
  const [cpf, setCpf] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = React.useState('');
  const [violations, setViolations] = React.useState<Violation[]>([]);

  const createUser = (data: User) => {
    create(data, (v: Violation[]) => {
      setViolations(v);
    });
  };
  return (
    <HeaderSmallLogo
      title="Novo usuário"
      violations={violations}
      setViolations={setViolations}>
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
