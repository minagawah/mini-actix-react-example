import axios from 'axios';

export const authUser = async entry => (
  axios.post(
    'http://localhost:5000/api/auth',
    entry
  )
)
