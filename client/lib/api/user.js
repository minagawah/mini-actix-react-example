import axios from 'axios';

import { API_ENDPOINT_URL } from './config';

export const auth = async entry => (
  axios.post(
    `${API_ENDPOINT_URL}/auth`,
    entry
  )
)
