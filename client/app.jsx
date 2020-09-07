import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { useAuth } from './hooks/auth_provider';

import { Home } from './components/home';
import { Articles } from './components/articles';
import { About } from './components/about';
import { Login } from './components/login';

import logo from './logo.svg';
import './styles.css';

const ProtectedRoute = ({ component, ...props }) => {
  const { user } = useAuth();
  return (
    <Route
      {...props}
      component={user ? component : ({ location }) => (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )}
    />
  );
  // return user ? (
  //   <Route
  //     {...props}
  //     component={component}
  //   />
  // ) : (
  //   <Route
  //     {...props}
  //     component={({ location }) => (
  //       <Redirect
  //         to={{
  //           pathname: '/login',
  //           state: { from: location },
  //         }}
  //       />
  //     )}
  //   />
  // );
};

const appStyle = css`
  height: 100vh;
  a {
    color: #0080ff;
    &:hover, &:visited, &:active {
      color: #e53e3e;
    }
  }
  ${tw`text-gray-800`}
`;

const headerStyle = css`
  background-color: #282c34;
  min-height: 60px;
  ${tw`flex flex-row justify-start items-center text-white`}
`;

const linkStyle = tw`no-underline ml-4 text-white! hover:text-red-600!`;
const logoutStyle = css`${linkStyle} ${tw`cursor-pointer`}`;

export const App = () => {
  const { user, logout } = useAuth();

  return (
    <div css={appStyle}>
      <header css={headerStyle}>
        <Link to='/'>
          <img src={logo} alt="logo" css={css`height:45px; pointer-events:none;`} />
        </Link>
        <Link to='/articles' css={linkStyle}>Articles</Link>
        <Link to='/about' css={linkStyle}>About</Link>
        {!!user && (<span css={logoutStyle} onClick={() => logout()}>Logout</span>)}
      </header>
      <div id="container" css={css`height:100%`}>
        <Route exact path='/' component={Home} />
        <ProtectedRoute path='/articles' component={Articles} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
      </div>
    </div>
  );
}
