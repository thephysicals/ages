import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../http-commons';
import Violation from '../../types/Violation';
import {Login} from '../../types/Login';
import {LoginUser} from '../../types/LoginUser';
import jwt_decode from 'jwt-decode';

const LOGIN_USER_STORED = 'LOGIN_USER_STORED';

const loginService = (
  data: Login,
  onSuccess: (fn: any) => void,
  onError: (fn: Violation[]) => void,
) => {
  http
    .post('/v1/login', data)
    .then(result => {
      onSuccess(result);
    })
    .catch(error => {
      onError(error.response.data.violations);
    });
};

const decryptJwt = (jwt: string | null): LoginUser => {
  let decoded: LoginUser = jwt_decode(jwt!);
  return decoded;
};

const storeJwt = (jwt: string): void => {
  AsyncStorage.setItem(LOGIN_USER_STORED, jwt);
};

const getJwtDecoded = async (): Promise<LoginUser> => {
  let jwt: string | null = await AsyncStorage.getItem(LOGIN_USER_STORED);
  if (jwt) {
    let loginUser: LoginUser = decryptJwt(jwt);
    return loginUser;
  }
  throw Error;
};

const getJwt = async (): Promise<string> => {
  let jwt: string | null = await AsyncStorage.getItem(LOGIN_USER_STORED);
  if (jwt) {
    return jwt;
  }
  throw Error;
};

export {loginService, decryptJwt, storeJwt, getJwtDecoded, getJwt};
