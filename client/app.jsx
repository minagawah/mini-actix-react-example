import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { useAuth } from './hooks/auth_provider';

import { Top } from './components/top';
import { Header } from './components/header';
import { Articles } from './components/articles';
import { About } from './components/about';
import { Login } from './components/login';

import './styles.css';

const ProtectedRoute = ({ component, ...props }) => {
  const { user } = useAuth();
  return (
    <Route
      {...props}
      component={
        user
          ? component
          : ({ location }) => (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location },
                }}
              />
            )
      }
    />
  );
};

const appStyle = css`
  height: 100vh;
  ${tw`text-gray-800`}
`;

export const App = () => (
  <div css={appStyle}>
    <Header />
    <div
      id="container"
      css={css`
        height: 100%;
      `}
    >
      <Route exact path="/" component={Top} />
      <ProtectedRoute path="/articles" component={Articles} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </div>
  </div>
);
