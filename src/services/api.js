import axios from 'axios';
import {API_KEY, BASE_URL} from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default api;
