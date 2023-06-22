import React from 'react';
import {View, Image, Text} from 'react-native';
import {Message} from '../types/Message';
import MessageFragment from './MessageFragment';

const HeaderLogo = ({
  message,
  setMessage,
  children,
}: {
  message: Message;
  setMessage: (m: Message) => void;
  children: JSX.Element;
  navigation: any;
}): JSX.Element => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/logot80.png')} />
        <Text style={{fontFamily: 'Dorsa', fontSize: 40, fontWeight: 'bold'}}>
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
