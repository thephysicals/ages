import {TipoRecurso} from '../../types/Recurso';
import Violation from '../../types/Violation';
import {httpSecure} from '../http-commons';
import {getJwt} from '../login/login-service';

const listarRecursoPeloTipo = async (
  tipoRecurso: TipoRecurso,
  onSuccess: (fn: any) => void,
  onError: (fn: Violation[]) => void,
) => {
  let jwt = await getJwt();
  httpSecure(jwt)
    .get('/v1/recurso', {params: {tipoRecurso: tipoRecurso}})
    .then(result => {
      onSuccess(result.data);
    })
    .catch(error => {
      let violations: Violation[] = [];
      if (error.response) {
        if (error.response.status === 401) {
          let v: Violation = {
            field: 'all',
            message: 'Usuário sem permissão para listar recursos',
          };
          violations.push(v);
        }
      }
      onError(violations);
    });
};

export {listarRecursoPeloTipo};
