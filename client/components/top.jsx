import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import tw from 'twin.macro';

import { CLIENT_COOKIE_NAME } from '../config';

const topStyle = tw`pt-8 pl-6`;

export const Top = () => {
  useEffect(() => {
    // "HttpOnly" will be set FALSE, and you can
    // read the value from the client side.
    Cookies.set(CLIENT_COOKIE_NAME, 'salsa');
  }, []);

  return (
    <div id="top" css={topStyle}>
      <Link to="/articles" tw="text-lg">
        Articles
      </Link>
    </div>
  );
};
