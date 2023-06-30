import {LoginUser} from './LoginUser';
import {Recurso} from './Recurso';

interface RescursoReservado {
  loginUser: LoginUser;
  dates: string[];
  recurso: Recurso;
}

export type {RescursoReservado};
