import { createContext, useState, useEffect } from "react";

import * as MainApi from "../../utils/MainApi";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [currentUserData, setCurrentUserData] = useState({});

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    setToken(jwt);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    MainApi
      .checkToken(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUserData(res.data);
      })
      .catch((err) => { console.log(err) })
  }, [token]);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      token,
      setToken,
      currentUserData,
      setCurrentUserData
    }}>
      {children}
    </AuthContext.Provider>
  )
}
