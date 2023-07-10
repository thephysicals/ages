import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {listarRecursoPeloTipo} from '../../services/recurso/recurso-service';
import HeaderSmallLogo from '../../templates/HeaderSmallLogo';
import {Message, TypeMessage} from '../../types/Message';
import {Recurso, TipoRecurso} from '../../types/Recurso';
import Violation from '../../types/Violation';
import LineTable from '../LineTable';
import {useNavigation} from '@react-navigation/native';

const ListaRecursosScreen = (props: any) => {
  const navigation = useNavigation();
  const [lista, setLista] = React.useState<Recurso[]>();
  const [message, setMessage] = React.useState<Message>({
    message: '',
    violations: [],
    type: TypeMessage.success,
  });

  useEffect(() => {
    listarRecursoPeloTipo(
      TipoRecurso.SALA_MULTIUSO,
      data => {
        var recursos: Recurso[] = [];
        data.map((d: any) => {
          var recurso: Recurso = {
            id: d.id,
            nome: d.nome,
            descricao: d.descricao,
            tipoRecurso: d.tipoRecurso,
            tipoEquimento: d.tipoEquimento,
          };
          recursos.push(recurso);
        });
        setLista(recursos);
      },
      (violations: Violation[]) => {
        const m: Message = {
          type: TypeMessage.warning,
          message: 'Erro ao listar recursos',
          violations: violations,
        };
        setMessage(m);
        let semRecurso: Recurso[] = [];
        setLista(semRecurso);
      },
    );
  }, []);

  return (
    <HeaderSmallLogo
      title={props?.route?.params?.title}
      message={message}
      setMessage={setMessage}>
      <View>
        <FlatList
          data={lista}
          renderItem={({item}) => (
            <LineTable recurso={item} navigation={navigation} />
          )}
        />
      </View>
    </HeaderSmallLogo>
  );
};

export default ListaRecursosScreen;
