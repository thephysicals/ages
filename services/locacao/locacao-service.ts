import {Locacao} from '../../types/Locacao';
import {RecursoLocado} from '../../types/RecursoLocado';
import Violation from '../../types/Violation';
import {httpSecure} from '../http-commons';
import {getJwt} from '../login/login-service';

const locarRecurso = async (
  idRecurso: number,
  cpf: string,
  datasReservadas: string[],
  onSuccess: (fn: any) => void,
  onError: (fn: Violation[]) => void,
) => {
  let jwt = await getJwt();

  const datasLocacao: Locacao = {
    datasReservadas: datasReservadas,
  };
  httpSecure(jwt)
    .post(`/v1/locacao/${idRecurso}/${cpf}`, datasLocacao)
    .then(result => {
      onSuccess(result.data);
    })
    .catch(error => {
      let violations: Violation[] = [];
      if (error.response) {
        if (error.response.status === 401) {
          let v: Violation = {
            field: 'all',
            message: 'Usuário sem permissão para locar recursos',
          };
          violations.push(v);
        }
      }
      onError(violations);
    });
};

const recuperarLocacao = async (
  idRecurso: number,
  onSuccess: (fn: RecursoLocado) => void,
  onError: (fn: Violation[]) => void,
) => {
  let jwt = await getJwt();
  httpSecure(jwt)
    .get<RecursoLocado>(`/v1/locacao?idRecurso=${idRecurso}`)
    .then(result => {
      onSuccess(result.data);
    })
    .catch(error => {
      let violations: Violation[] = [];
      if (error.response) {
        if (error.response.status === 401) {
          let v: Violation = {
            field: 'all',
            message: 'Usuário sem permissão para pesquisar locação',
          };
          violations.push(v);
        }
      }
      onError(violations);
    });
};

export {locarRecurso, recuperarLocacao};
