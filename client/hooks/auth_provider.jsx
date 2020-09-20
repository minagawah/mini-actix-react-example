/**
 * Based on David Barral's simple auth provider example:
 * https://medium.com/trabe/how-we-handle-react-context-e43d303a27a2
 */

import React, { useState, useContext, useMemo, createContext } from 'react';
import { login as userLogin, logout as userLogout } from '../lib/api/user';

const AuthContext = createContext({
  user: null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider = props => {
  const [user, setUser] = useState(null);

  const login = async entry => {
    const user = await userLogin(entry);
    setUser(user);
  };

  const logout = async () => {
    await userLogout();
    setUser(null);
  };

  const auth = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={auth} {...props} />;
};

export const useAuth = () => useContext(AuthContext);
