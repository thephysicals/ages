import React from 'react';
import {View, Image, Text} from 'react-native';
import MessageFragment from './MessageFragment';
import {Message} from '../types/Message';

const HeaderSmallLogo = ({
  children,
  title,
  message,
  setMessage,
}: {
  children: JSX.Element;
  title: string;
  message: Message;
  setMessage: (m: Message) => void;
}): JSX.Element => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <Image
          source={require('../assets/logot40.png')}
          style={{justifyContent: 'flex-start', marginRight: 10}}
        />
        <Text
          style={{
            fontFamily: 'Dosis',
            fontSize: 20,
            fontWeight: 'bold',
            flex: 3,
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 5,
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

export default HeaderSmallLogo;
