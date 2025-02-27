import React, { createContext, useState, useEffect } from 'react';
import { api } from './api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    friends: [],
    accounts: [],
    isLoading: false,
    error: null
  });

  useEffect(() => {
    const loadInitialData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setState(prev => ({ ...prev, isLoading: true }));
        try {
          const [friends, accounts] = await Promise.all([
            api.getFriends(user.id),
            api.getAccounts(user.id)
          ]);
          setState(prev => ({ ...prev, user, friends, accounts, isLoading: false }));
        } catch (error) {
          setState(prev => ({ ...prev, error, isLoading: false }));
        }
      }
    };
    loadInitialData();
  }, []);

  const login = async (username, password) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const user = await api.getUser(username, password);
      // testar com json server
      // const user = await api.login(username, password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        const [friends, accounts] = await Promise.all([
          api.getFriends(user.id),
          api.getAccounts(user.id)
        ]);
        setState(prev => ({ ...prev, user, friends, accounts, isLoading: false }));
        return true;
      }
      return false;
    } catch (error) {
      setState(prev => ({ ...prev, error, isLoading: false }));
      return false;
    }
  };

  const register = async (userData) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const newUser = await api.register(userData);
      localStorage.setItem('user', JSON.stringify(newUser));
      setState(prev => ({ ...prev, user: newUser, isLoading: false }));
      return true;
    } catch (error) {
      setState(prev => ({ ...prev, error, isLoading: false }));
      return false;
    }
  };

  const addAccount = async (account) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const newAccount = await api.addAccount({ ...account, userId: state.user.id });
      setState(prev => ({
        ...prev,
        accounts: [...prev.accounts, newAccount],
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({ ...prev, error, isLoading: false }));
    }
  };

  const updateAccount = async (updatedAccount) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      await api.updateAccount(updatedAccount.id, updatedAccount);
      setState(prev => ({
        ...prev,
        accounts: prev.accounts.map(acc => acc.id === updatedAccount.id ? updatedAccount : acc),
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({ ...prev, error, isLoading: false }));
    }
  };

  return (
    <AppContext.Provider value={{ state, login, register, addAccount, updateAccount }}>
      {children}
    </AppContext.Provider>
  );
};