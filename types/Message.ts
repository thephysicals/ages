import Violation from './Violation';

interface Message {
  type: TypeMessage;
  message: string;
  violations: Violation[];
}

enum TypeMessage {
  error,
  warning,
  success,
}
export type {Message};
export {TypeMessage};
