import React, {useEffect} from 'react';
import {Text} from 'react-native';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import {Message, TypeMessage} from '../../types/Message';

function HomeScreen(props: any) {
  const messageSuccess = props.route.params.messageSuccess;

  const [msg, setMessage] = React.useState<Message>({
    message: '',
    violations: [],
    type: TypeMessage.success,
  });

  useEffect(() => {
    if (messageSuccess) {
      setMessage(messageSuccess);
    }
  }, [messageSuccess]);

  return (
    <HeaderSmallLogo title="Home" message={msg} setMessage={setMessage}>
      <>
        <Text>Home</Text>
      </>
    </HeaderSmallLogo>
  );
}

export default HomeScreen;
