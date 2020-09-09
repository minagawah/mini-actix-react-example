import axios from 'axios';

import { API_ENDPOINT_URL } from '../../config';

export const login = async entry => {
  const res = await axios.post(
    `${API_ENDPOINT_URL}/auth`,
    entry,
    { withCredentials: true }
  );
  console.log('[user] res: ', JSON.stringify(res));
  return res.data || {};
}

export const logout = async () => {
  const res = await axios.delete(
    `${API_ENDPOINT_URL}/auth`,
    { withCredentials: true }
  );
  console.log('[user] res: ', JSON.stringify(res));
  return res.data || {};
}
