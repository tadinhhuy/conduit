import axios from 'axios';
import ENDPOINTS from '../constants/endpoints';
import { checkToken, getAuthToken } from '../helpers/auth';

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    config.baseURL = ENDPOINTS.BASE_URL;
    if (process.env.NODE_ENV !== 'development') {
      config.method = 'GET';
    }

    if (checkToken()) {
      config.headers['Authorization'] = 'Token ' + getAuthToken();
    }

    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
