import React, { createContext, useState } from 'react';

const LoginContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };