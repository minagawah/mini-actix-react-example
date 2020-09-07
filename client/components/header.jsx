import React from 'react';
import { Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { useAuth } from '../hooks/auth_provider';

import logo from '../logo.svg';

const headerStyle = css`
  background-color: #282c34;
  min-height: 60px;
  ${tw`flex flex-row justify-start items-center text-white`}
`;

const linkStyle = tw`no-underline ml-4 text-white! hover:text-red-600!`;
const logoutStyle = css`${linkStyle} ${tw`cursor-pointer`}`;

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header css={headerStyle}>
      <Link to='/'>
        <img src={logo} alt="logo" css={css`height:45px; pointer-events:none;`} />
      </Link>
      <Link to='/articles' css={linkStyle}>Articles</Link>
      <Link to='/about' css={linkStyle}>About</Link>
      {!!user && (<span css={logoutStyle} onClick={() => logout()}>Logout</span>)}
    </header>
  );
}
