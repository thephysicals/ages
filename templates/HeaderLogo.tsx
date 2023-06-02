import React from 'react';
import {View, Image, Text} from 'react-native';

const HeaderLogo = ({children}: {children: JSX.Element}): JSX.Element => {
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
    </>
  );
};

export default HeaderLogo;
