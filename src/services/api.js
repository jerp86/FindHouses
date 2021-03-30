import axios from 'axios';
import { API_URL, HOST, KEY } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': HOST,
    useQueryString: true,
  },
});

export default api;
