import axios from 'axios';
import config from '../config';

export function setup(token) {
  axios.defaults.baseURL = config.apiPath;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = token;
  console.log('Axios has been setup');
}

export function removeToken() {
  axios.defaults.headers.common.Authorization = null;
  console.log('Axios token has been removed');
}

export * from './auth';
