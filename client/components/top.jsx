import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const topStyle = tw`pt-8 pl-6`;

export const Top = () => (
  <div id="top" css={topStyle}>
    <Link to='/articles' tw="text-lg">Articles</Link>
  </div>
)
