import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SevenDaysBar = () => {
  const diasReservados = [1, 2, 5];
  const dias = [1, 2, 3, 4, 5, 6, 7];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva nos próximos sete dias</Text>
      <View style={styles.containerDays}>
        {dias.map(d => {
          if (diasReservados.includes(d)) {
            return <View style={styles.squareSelected} key={d} />;
          } else {
            return <View style={styles.squareNotSelected} key={d} />;
          }
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Dosis',
    fontSize: 10,
    marginLeft: 5,
    flex: 0,
    marginBottom: 2,
    color: '#000000',
  },
  squareNotSelected: {
    height: 8,
    width: 9,
    backgroundColor: '#FFFEED',
    borderWidth: 1,
    borderRightWidth: 1,
    borderColor: '#666666',
  },
  squareSelected: {
    height: 8,
    width: 9,
    backgroundColor: 'red',
    borderRightWidth: 1,
    borderColor: '#666666',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerDays: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    margin: 3,
  },
});
export default SevenDaysBar;
