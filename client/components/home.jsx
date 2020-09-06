import React from 'react';
import tw, { css } from 'twin.macro';

import logo from '../logo.svg';

const homeStyle = tw`p-4`;

const logoStyle = css`
  width: 110px;
  ${tw`mt-1`}
`;

export const Home = () => (
  <div id="home" css={homeStyle}>
    <div tw="text-lg font-bold">Welcome!</div>
    <img src={logo} alt="logo" css={logoStyle} />
  </div>
)
