import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Recurso} from '../types/Recurso';

const LineTable = ({
  recurso,
  navigation,
}: {
  recurso: Recurso;
  navigation: any;
}) => {
  const selecionarRecurso = (r: Recurso) => {
    navigation.navigate('DetalheRecurso', {recurso: r, title: r.nome});
  };

  return (
    <Pressable
      onPress={() => {
        selecionarRecurso(recurso);
      }}>
      <View style={styles.containerLinha}>
        <Text style={styles.titulo}>{recurso.nome}</Text>
        <Text style={styles.descricao}>{recurso.descricao}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerLinha: {
    height: 70,
    marginTop: 3,
    backgroundColor: '#FFFEED',
    borderWidth: 1,
    borderColor: '#C7D7FB',
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  titulo: {
    fontWeight: '200',
    textAlign: 'left',
    fontFamily: 'Dosis',
    marginLeft: 5,
    fontSize: 20,
  },
  descricao: {
    textAlign: 'left',
    fontFamily: 'Dosis',
    marginLeft: 5,
    fontSize: 15,
  },
});

export default LineTable;
