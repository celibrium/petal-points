import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  let [balance, setBalance] = useState(0); // Example global variable

  return (
    <GlobalContext.Provider value={{ balance, setBalance }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
