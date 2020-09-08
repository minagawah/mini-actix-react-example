import axios from 'axios';

import { API_ENDPOINT_URL } from './config';

export const articles = async () => {
  const res = await axios.get(`${API_ENDPOINT_URL}/articles`);
  return res.data || [];
}
