import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const homeStyle = tw`pt-8 pl-6`;

export const Home = () => (
  <div id="home" css={homeStyle}>
    <Link to='/articles' tw="text-lg">Articles</Link>
  </div>
)
