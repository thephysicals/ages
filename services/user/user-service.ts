import http from '../http-commons';
import User from '../../types/User';
import Violation from '../../types/Violation';

const create = (data: User, onError: (fn: Violation[]) => void) => {
  http.post('/v1/usuario', data).catch(error => {
    onError(error.response.data.violations);
  });
};

export {create};
