import React from 'react';
import {View} from 'react-native';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import {Message} from '../../types/Message';
import {Recurso} from '../../types/Recurso';
import CardDetail from '../CardDetail';

const DetalheRecursoScreen = (props: any) => {
  const recurso: Recurso = props?.route?.params?.recurso;
  const [message, setMessage] = React.useState<Message>();

  return (
    <HeaderSmallLogo
      title={props?.route?.params?.title}
      message={message}
      setMessage={setMessage}>
      <View>
        <CardDetail recurso={recurso} />
      </View>
    </HeaderSmallLogo>
  );
};

export default DetalheRecursoScreen;
