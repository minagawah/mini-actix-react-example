import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import { useAuth } from '../hooks/auth_provider';
import { authUser } from '../lib/api';

const loginStyle = tw`pl-4 pt-1`;
const buttonStyle = tw`
  bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded border-none
`;

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const { login } = useAuth();

  const onClick = async () => {
    const res = await authUser({ message: 'hello' });
    login(res);
    history.push(from.pathname);
  };

  return (
    <div id="login" css={loginStyle}>
      <h2>Login</h2>
      <button onClick={onClick} css={buttonStyle}>
        Login
      </button>
    </div>
  );
}
