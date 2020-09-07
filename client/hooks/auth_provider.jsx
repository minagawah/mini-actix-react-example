/**
 * Based on David Barral's simple auth provider example:
 * https://medium.com/trabe/how-we-handle-react-context-e43d303a27a2
 */

import React, { useState, useContext, useMemo, createContext } from 'react';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = props => {
  const [user, setUser] = useState(null);
  const auth = useMemo(() => ({
    user,
    login: user => setUser(user),
    logout: () => setUser(null),
  }), [user]);

  return <AuthContext.Provider value={auth} {...props} />;
}

export const useAuth = () => useContext(AuthContext)
