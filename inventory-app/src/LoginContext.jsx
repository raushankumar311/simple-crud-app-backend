import React, { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login logic (API call, local storage)
    // Assuming successful login for now
    setIsLoggedIn(true);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };