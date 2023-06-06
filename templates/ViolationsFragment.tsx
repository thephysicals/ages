import React from 'react';
import {View, Text, Modal, Pressable, StyleSheet} from 'react-native';
import Violation from '../types/Violation';

const ViolationsFragment = ({
  violations,
  setViolations,
}: {
  violations: Violation[];
  setViolations: (v: Violation[]) => void;
}) => {
  if (violations) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={violations.length > 0}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <>
              {violations.map((v, k) => {
                return (
                  <Text style={styles.modalText} key={k}>
                    {v.message}
                  </Text>
                );
              })}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setViolations([])}>
                <Text style={styles.textStyle}>OK!</Text>
              </Pressable>
            </>
          </View>
        </View>
      </Modal>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    fontFamily: 'Dosis',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Dosis',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ViolationsFragment;
