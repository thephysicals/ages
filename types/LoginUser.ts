interface LoginUser {
  email: string;
  exp: number;
  given_name: string;
  groups: string[];
  iat: number;
  iss: string;
  sub: string;
  upn: string;
}

export type {LoginUser};
