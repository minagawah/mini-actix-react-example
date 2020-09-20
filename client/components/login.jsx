import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import { useAuth } from '../hooks/auth_provider';

const loginStyle = tw`pt-1 pl-6`;
const buttonStyle = tw`
  bg-red-500 hover:bg-red-300 text-white text-lg font-bold py-2 px-4 rounded border-none
`;

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const { login } = useAuth();

  const onClick = async () => {
    await login({ login_id: 'joe', password: '1234' });
    history.push(from.pathname);
  };

  return (
    <div id="login" css={loginStyle}>
      <div tw="mt-6 text-lg">Restricted to members only. Please login.</div>
      <button onClick={onClick} css={buttonStyle} tw="mt-4">
        Login
      </button>
    </div>
  );
};
