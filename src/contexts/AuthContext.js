import { createContext, useState, useEffect } from "react";

import * as MainApi from "../utils/MainApi";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

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
      })
      .catch((err) => { console.log(err) })
  }, [token]);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      token,
      setToken
    }}>
      {children}
    </AuthContext.Provider>
  )
}
