import axios from 'axios';

let http = axios.create({
  baseURL: 'http://www.guiodai.com/api',
  timeout: 1000,
  withCredentials: false,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': '*',
  },
});

let httpSecure = (jwt: string) =>
  axios.create({
    baseURL: 'http://www.guiodai.com/api',
    timeout: 1000,
    withCredentials: false,
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + jwt,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });

export {http, httpSecure};
