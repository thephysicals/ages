import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import {Message, TypeMessage} from '../../types/Message';
import {RescursoReservado} from '../../types/RecursoReservado';
import {locarRecurso} from '../../services/locacao/locacao-service';
import Violation from '../../types/Violation';

const Separator = () => <View style={styles.separator} />;

const DetalheRecursoReservadoScreen = (props: any) => {
  const recursoReservado: RescursoReservado =
    props?.route?.params?.recursoReservado;

  const [message, setMessage] = React.useState<Message>();
  const navigation = useNavigation();

  const confimarLocacao = (idRecurso: number, cpf: string, datas: string[]) => {
    locarRecurso(
      idRecurso,
      cpf,
      datas,
      () => {
        const messageSuccess: Message = {
          message: 'Recurso locado com sucesso!',
          type: TypeMessage.success,
          violations: [],
        };
        navigation.reset({
          index: 0,
          routes: [{name: 'Home', params: {messageSuccess}}],
        });
        setMessage(messageSuccess);
      },
      (violations: Violation[]) => {
        const m: Message = {
          type: TypeMessage.warning,
          message: 'Erro ao listar recursos',
          violations: violations,
        };
        setMessage(m);
      },
    );
  };

  return (
    <HeaderSmallLogo
      title="Detalhes da locação"
      message={message}
      setMessage={setMessage}>
      <ScrollView>
        <View style={styles.cardContainerSolicitante}>
          <Text style={styles.title}>Solicitante</Text>
          <Separator />
          <Text style={styles.detail}>
            {recursoReservado.loginUser.given_name}
          </Text>
          <Text style={styles.detail}>{recursoReservado.loginUser.email}</Text>
        </View>
        <View style={styles.cardContainerRecurso}>
          <Text style={styles.title}>Recurso</Text>
          <Separator />
          <Text style={styles.detail}>{recursoReservado.recurso.nome}</Text>
          <Text style={styles.detail}>
            {recursoReservado.recurso.descricao}
          </Text>
        </View>
        <View style={styles.cardContainerData}>
          <Text style={styles.title}>Datas</Text>
          <Separator />
          <Text style={styles.detail}>
            {recursoReservado.dates.map(
              d =>
                d.substring(8, 10) +
                '/' +
                d.substring(5, 7) +
                '/' +
                d.substring(0, 4) +
                '\n',
            )}
          </Text>
        </View>
        <Button
          title="Confirmar"
          onPress={async () => {
            confimarLocacao(
              recursoReservado.recurso.id,
              recursoReservado.loginUser.sub,
              recursoReservado.dates,
            );
          }}
        />
      </ScrollView>
    </HeaderSmallLogo>
  );
};
const styles = StyleSheet.create({
  cardContainerSolicitante: {
    display: 'flex',
    flexDirection: 'column',
    height: 140,
    backgroundColor: '#FFFEED',
    borderWidth: 1,
    borderColor: '#C7D7FB',
    borderRadius: 10,
    margin: 3,
    paddingLeft: 4,

    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardContainerRecurso: {
    display: 'flex',
    flexDirection: 'column',
    height: 140,
    backgroundColor: '#FFFEED',
    borderWidth: 1,
    borderColor: '#C7D7FB',
    borderRadius: 10,
    margin: 3,
    paddingLeft: 4,

    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardContainerData: {
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '#FFFEED',
    borderWidth: 1,
    borderColor: '#C7D7FB',
    borderRadius: 10,
    margin: 3,
    paddingLeft: 4,

    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  detail: {
    fontFamily: 'Dosis',
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
  },
  title: {
    fontFamily: 'Dosis',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000000',
  },
  separator: {
    borderBottomColor: '#C7D7FB',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 5,
    marginBottom: 3,
  },
});
export default DetalheRecursoReservadoScreen;
