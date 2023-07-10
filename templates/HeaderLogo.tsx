import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import {Message} from '../types/Message';
import MessageFragment from './MessageFragment';

const HeaderLogo = ({
  message,
  setMessage,
  children,
  navigation,
}: {
  message: Message;
  setMessage: (m: Message) => void;
  children: JSX.Element;
  navigation: any;
}): JSX.Element => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Index'}],
            });
          }}>
          <Image source={require('../assets/logot80.png')} />
        </TouchableHighlight>
        <Text style={{fontFamily: 'Dorsa', fontSize: 60, color: '#000000'}}>
          A.G.E.S
        </Text>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: '#E7ECF6',
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#C7D7FB',
        }}>
        {children}
      </View>
      <MessageFragment message={message} setMessage={setMessage} />
    </>
  );
};

export default HeaderLogo;
