import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getJwtDecoded} from '../../services/login/login-service';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import {LoginUser} from '../../types/LoginUser';
import {Message, TypeMessage} from '../../types/Message';
import SpecialButton from '../SpecialButton';

const Separator = () => <View style={styles.separator} />;

function HomeScreen(props: any) {
  const navigation = useNavigation();
  const messageSuccess = props?.route?.params?.messageSuccess;
  const [msg, setMessage] = React.useState<Message>({
    message: '',
    violations: [],
    type: TypeMessage.success,
  });
  const [userLoginUser, setLoginUser] = React.useState<LoginUser>();

  useEffect(() => {
    if (messageSuccess) {
      setMessage(messageSuccess);
    }
  }, [messageSuccess]);

  useEffect(() => {
    if (!userLoginUser) {
      getJwtDecoded().then((loggedUser: LoginUser) => {
        setLoginUser(loggedUser);
      });
    }
  }, [userLoginUser]);

  const getUnderline = (userLoginUser: LoginUser) => {
    return {
      textDecorationLine: 'underline',
      textDecorationColor: userLoginUser?.color,
    };
  };

  const buttonPress = (tipoBotao: string) => {
    switch (tipoBotao) {
      case 'multiuso':
        navigation.navigate('ListagemRecursos', {
          title: 'Salas multiusos',
        });
        break;
    }
  };

  return (
    <HeaderSmallLogo title="Minha home" message={msg} setMessage={setMessage}>
      <View style={styles.container}>
        <Text style={styles.label}>
          Olá,{' '}
          <Text style={getUnderline(userLoginUser!)}>
            {userLoginUser?.given_name}
          </Text>
          !
        </Text>
        <View style={styles.container}>
          <Separator />
          <SpecialButton
            title="Sala multiuso"
            image={require('../../assets/class-multiuso.png')}
            onPress={() => {
              buttonPress('multiuso');
            }}
          />
          <Separator />
          <SpecialButton
            title="Sala específica"
            image={require('../../assets/class-especifica.png')}
            onPress={() => {}}
          />
          <Separator />
          <SpecialButton
            title="Equipamento portátil"
            image={require('../../assets/project.png')}
            onPress={() => {}}
          />
        </View>
      </View>
    </HeaderSmallLogo>
  );
}
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Dosis',
    fontSize: 30,
    padding: 10,
    color: '#000000',
  },
  container: {alignItems: 'flex-start', padding: 20},
  separator: {
    borderBottomColor: '#C7D7FB',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    marginBottom: 10,
  },
});
export default HomeScreen;
