import React from 'react';
import tw from 'twin.macro';

const homeStyle = tw`p-4`;

export const Home = () => (
  <div id="home" css={homeStyle}>
    <div tw="text-lg font-bold">Welcome!</div>
  </div>
)
