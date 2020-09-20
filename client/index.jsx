import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { AuthProvider } from './hooks/auth_provider';

import { createStore } from './ducks';

import { App } from './app';
import * as serviceWorker from './serviceWorker';

const store = createStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
    ,
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
