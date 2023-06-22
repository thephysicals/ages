import React from 'react';
import {Text} from 'react-native';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import {Message, TypeMessage} from '../../types/Message';

function HomeScreen() {
  const [msg, setMessage] = React.useState<Message>({
    message: '',
    violations: [],
    type: TypeMessage.success,
  });

  return (
    <HeaderSmallLogo title="Home" message={msg} setMessage={setMessage}>
      <>
        <Text>Home</Text>
      </>
    </HeaderSmallLogo>
  );
}

export default HomeScreen;
