import React from 'react';
import {Modal, View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {Message, TypeMessage} from '../types/Message';

const MessageFragment = ({
  message,
  setMessage,
}: {
  message: Message;
  setMessage: (m: Message) => void;
}) => {
  if (message.type === TypeMessage.success) {
    if (message && message.message) {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={message.message !== ''}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image source={require('../assets/success.png')} />
              <Text style={styles.modalText}>{message.message}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>
                  setMessage({
                    message: '',
                    type: TypeMessage.error,
                    violations: [],
                  })
                }>
                <Text style={styles.textStyle}>OK!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      );
    } else {
      return <></>;
    }
  } else if (message.type === TypeMessage.warning) {
    if (message.violations) {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={message.violations.length > 0}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image source={require('../assets/warning.png')} />
              <>
                {message.violations.map((v, k) => {
                  return (
                    <Text style={styles.modalText} key={k}>
                      {v.message}
                    </Text>
                  );
                })}
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() =>
                    setMessage({
                      message: '',
                      type: TypeMessage.error,
                      violations: [],
                    })
                  }>
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
export default MessageFragment;
