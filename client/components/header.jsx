import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { useAuth } from '../hooks/auth_provider';

import logo from '../logo.svg';

const headerStyle = css`
  background-color: #282c34;
  min-height: 60px;
  ${tw`flex flex-row justify-start items-center text-white`}
`;

// "!" at the end is "!important" in Tailwind CSS.
const linkStyle = tw`no-underline ml-4 text-white! hover:text-blue-400!`;

const logoutStyle = css`
  ${linkStyle} ${tw`cursor-pointer`}
`;

export const Header = () => {
  const history = useHistory();
  const { user, logout } = useAuth();

  const onClick = async () => {
    await logout();
    history.push('/');
  };

  return (
    <header css={headerStyle}>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          css={css`
            height: 45px;
            pointer-events: none;
          `}
        />
      </Link>
      <Link to="/about" css={linkStyle}>
        About
      </Link>
      {!!user && (
        <span css={logoutStyle} onClick={() => onClick()}>
          Logout
        </span>
      )}
    </header>
  );
};
