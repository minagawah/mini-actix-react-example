import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import tw from 'twin.macro';

import { SERVER_COOKIE_NAME, CLIENT_COOKIE_NAME } from '../config';

const aboutStyle = tw`pt-1 pl-6`;

export const About = () => {
  useEffect(() => {
    // SERVER: "HttpOnly" is set to TRUE. Not allowed to read from client-side.
    // CLIENT: "HttpOnly" is set to FALSE. Allowed to read from client-side.
    console.log(
      `[about] ${SERVER_COOKIE_NAME}: `,
      Cookies.get(SERVER_COOKIE_NAME)
    );
    console.log(
      `[about] ${CLIENT_COOKIE_NAME}: `,
      Cookies.get(CLIENT_COOKIE_NAME)
    );
  }, []);

  return (
    <div id="about" css={aboutStyle}>
      <h2>About</h2>
      <div tw="text-lg">
        This is a sample app to to integrate <code>actix-web</code> and{' '}
        <code>React</code>.
      </div>
    </div>
  );
};
