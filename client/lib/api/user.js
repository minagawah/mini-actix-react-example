import axios from 'axios';

import { API_ENDPOINT_URL } from '../../config';

const DEFAULT_OPTION = { withCredentials: true };

export const login = async entry => {
  const res = await axios.post(
    `${API_ENDPOINT_URL}/auth`,
    entry,
    DEFAULT_OPTION
  );
  return res.data || {};
};

export const logout = async () => {
  const res = await axios.delete(`${API_ENDPOINT_URL}/auth`, DEFAULT_OPTION);
  return res.data || {};
};
