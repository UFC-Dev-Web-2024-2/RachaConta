// AppContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const initialState = {
  user: { name: "Elixandre", username: "eliquisxan" },
  friends: [
    { name: 'Andre', username: 'andre1', avatarBgColor: '#3f51b5' },
    { name: 'Matheus', username: 'matheus2', avatarBgColor: '#f50057' },
    { name: 'Rodrigo', username: 'rodrigao', avatarBgColor: '#ff9800' }
  ],
  accounts: []
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem('appState');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  const addAccount = (account) => {
    setState(prev => ({
      ...prev,
      accounts: [...prev.accounts, account]
    }));
  };

  const updateAccount = (updatedAccount) => {
    setState(prev => ({
      ...prev,
      accounts: prev.accounts.map(acc => acc.id === updatedAccount.id ? updatedAccount : acc)
    }));
  };

  return (
    <AppContext.Provider value={{ state, addAccount, updateAccount }}>
      {children}
    </AppContext.Provider>
  );
};
