import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
  });

  const handleLogin = () => {
    setState({
      ...state,
      isAuth: true,
    });
  };

  const handleLogout = () => {
    setState({
      ...state,
      isAuth: false,
    });
  };

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
