/* eslint-disable no-unused-vars */
import React, {
  useState, useEffect, createContext, useContext, useMemo,
} from 'react';

import PageLoading from 'components/PageLoading';

import { auth, provider } from 'helpers/firebase';

const initialValues = {
  authenticated: null,
  currentUser: null,
  loading: true,
};

const AuthContext = createContext(initialValues);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [authenticated, setAuthenticated] = useState();
  const [loading, setLoading] = useState();

  const login = () => {
    auth.useDeviceLanguage();
    auth.signInWithRedirect(provider);
  };

  const logout = () => {
    auth.signOut();
    setAuthenticated(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user?.providerData[0]) {
        setCurrentUser(user?.providerData[0]);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);

  const value = useMemo(
    () => ({ currentUser, authenticated }),
    [currentUser, authenticated],
  );
  return (
    <AuthContext.Provider value={{ ...value, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
