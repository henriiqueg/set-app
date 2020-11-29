import React, {
  useState, useEffect, createContext, useContext,
} from 'react';

import PageLoading from 'components/PageLoading';

import { auth, provider } from 'helpers/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = () => {
    auth.useDeviceLanguage();
    auth.signInWithRedirect(provider);
  };

  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user?.providerData[0]);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (<PageLoading />) : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
