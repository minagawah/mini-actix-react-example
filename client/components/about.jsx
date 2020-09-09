import React from 'react';
import tw from 'twin.macro';

const aboutStyle = tw`pt-1 pl-6`;

export const About = () => (
  <div id="about" css={aboutStyle}>
    <h2>About</h2>
    <div tw="text-lg">
      This is a sample app to to integrate <code>actix-web</code> and <code>React</code>.
    </div>
  </div>
);
