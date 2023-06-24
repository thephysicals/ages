import axios from 'axios';

let http = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-type': 'application/json',
  },
});

let httpSecure = (jwt: string) =>
  axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + jwt,
    },
  });

export {http, httpSecure};
