import axios from 'axios';

import { API_ENDPOINT_URL } from './config';

export const auth = async entry => {
  const res = await axios.post(
    `${API_ENDPOINT_URL}/auth`,
    entry
  );
  return res.data || {};
}
