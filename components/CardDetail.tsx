import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Recurso} from '../types/Recurso';
import SevenDaysBar from './SevenDaysBar';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CardDetail = ({recurso}: {recurso: Recurso}) => {
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

  return (
    <>
      <View style={styles.cardContainer}>
        <Image
          source={require('../assets/sala-multiuso-grande.png')}
          style={styles.imageHeader}
        />
        <Text style={styles.description}>{recurso.descricao}</Text>
        <SevenDaysBar />
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          markingType={'period'}
          markedDates={{
            '2023-06-15': {marked: true, dotColor: '#50cebb'},
            '2023-06-16': {marked: true, dotColor: '#50cebb'},
            '2023-06-21': {
              startingDay: true,
              color: '#50cebb',
              textColor: 'white',
            },
            '2023-06-22': {color: '#70d7c7', textColor: 'white'},
            '2023-06-23': {
              color: '#70d7c7',
              textColor: 'white',
              marked: true,
              dotColor: 'white',
            },
            '2023-06-24': {color: '#70d7c7', textColor: 'white'},
            '2023-06-25': {
              endingDay: true,
              color: '#50cebb',
              textColor: 'white',
            },
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 230,
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
  },
  imageHeader: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    height: '70%',
    width: '100%%',
    marginTop: 10,
    flex: 0,
  },
  calendarContainer: {},
});
export default CardDetail;
