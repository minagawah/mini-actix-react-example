import axios from 'axios';

import { API_ENDPOINT_URL } from '../../config';

const DEFAULT_OPTION = { withCredentials: true };

export const articles = async () => {
  const res = await axios.get(
    `${API_ENDPOINT_URL}/article/all`,
    DEFAULT_OPTION
  );
  return res.data || [];
};
