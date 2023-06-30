import {Recurso} from './Recurso';
import User from './User';

interface RecursoLocado {
  id: number;
  datasReservadas: string[];
  recurso: Recurso;
  status: string;
  usuario: User;
}

export type {RecursoLocado};
