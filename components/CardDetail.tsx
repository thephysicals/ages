import React, {useEffect} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Recurso} from '../types/Recurso';
import SevenDaysBar from './SevenDaysBar';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {RescursoReservado} from '../types/RecursoReservado';
import {getJwtDecoded} from '../services/login/login-service';
import {recuperarLocacao} from '../services/locacao/locacao-service';
import {Message} from '../types/Message';
import MessageFragment from '../templates/MessageFragment';
import Violation from '../types/Violation';

const CardDetail = ({
  recurso,
  navigation,
}: {
  recurso: Recurso;
  navigation: any;
}) => {
  LocaleConfig.locales.pt = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Maio',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan.',
      'Fev.',
      'Mar.',
      'Abr.',
      'Mai.',
      'Jun.',
      'Jul.',
      'Ago.',
      'Set.',
      'Out.',
      'Nov.',
      'Dez.',
    ],
    dayNames: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    today: 'Hoje',
  };
  LocaleConfig.defaultLocale = 'pt';

  const [markedDates, setMarkedDates] = React.useState({});
  const [selectedDates, setSelectedDates] = React.useState({});
  const [message, setMessage] = React.useState<Message>();
  const [userColor, setUserColor] = React.useState('');

  useEffect(() => {
    getJwtDecoded().then(d => setUserColor(d.color));
  }, []);

  useEffect(() => {
    recuperarLocacao(
      recurso.id,
      data => {
        console.log(data);
        setMarkedDates(data);
      },
      (vs: Violation[]) => {
        console.log('ERROR', vs);
      },
    );
  }, [recurso.id]);

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <Image
          source={require('../assets/sala-multiuso-grande.png')}
          style={styles.imageHeader}
        />
        <Text style={styles.description}>{recurso.descricao}</Text>
        <SevenDaysBar />
      </View>
      <View>
        <Calendar
          theme={{
            stylesheet: {
              calendar: {
                header: {
                  week: {
                    marginTop: 1,
                    marginHorizontal: 2,
                  },
                  marginTop: 1,
                },
              },
            },
          }}
          markingType={'period'}
          markedDates={markedDates}
          onDayPress={day => {
            let newMarkedDates = {
              ...markedDates,
              [day.dateString]: {
                color: userColor,
                textColor: 'white',
              },
            };
            let selectedMarkedDates = {
              ...selectedDates,
              [day.dateString]: {
                color: userColor,
                textColor: 'white',
              },
            };
            setSelectedDates(selectedMarkedDates);
            setMarkedDates(newMarkedDates);
          }}
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
        />
      </View>
      <Button
        title="Reservar"
        onPress={async () => {
          const datas: string[] = Object.keys(selectedDates);
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const recursoReservado: RescursoReservado = {
            loginUser: await getJwtDecoded(),
            dates: datas,
            recurso: recurso,
          };

          navigation.navigate('DetalheRecursoReservado', {
            recursoReservado: recursoReservado,
          });
        }}
      />
      <MessageFragment message={message} setMessage={setMessage} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 180,
    backgroundColor: '#FFFEED',
    borderWidth: 1,
    borderColor: '#C7D7FB',
    borderRadius: 10,
    marginTop: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  description: {
    flex: 1,
    alignContent: 'flex-end',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Dosis',
    color: '#000000',
  },
  imageHeader: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    height: '70%',
    width: '100%',
    marginTop: 10,
    flex: 0,
  },
});
export default CardDetail;
