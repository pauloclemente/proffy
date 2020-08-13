import axios from 'axios';
import ip from '../../ip';
const api = axios.create({
  baseURL: ip,
});

export default api;