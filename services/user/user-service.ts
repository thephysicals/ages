import {http} from '../http-commons';
import User from '../../types/User';
import Violation from '../../types/Violation';

const create = (
  data: User,
  onSuccess: (fn: any) => void,
  onError: (fn: Violation[]) => void,
) => {
  http
    .post('/v1/usuario', data)
    .then(result => {
      onSuccess(result);
    })
    .catch(error => {
      onError(error.response.data.violations);
    });
};

const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export {create, cpfMask};
