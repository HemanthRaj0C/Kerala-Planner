'use client';

import { createContext, useState, useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

// Create the AuthContext
export const AuthContext = createContext();

// Provider component that wraps app and makes auth available to any child component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [getStoredValue, setStoredValue] = useLocalStorage();

  // Check if user is logged in on initial load
  useEffect(() => {
    checkUserStatus();
  }, []);

  // Check user status from sessionStorage and localStorage
  const checkUserStatus = () => {
    const sessionLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const username = sessionStorage.getItem('username') || localStorage.getItem('username');
    const gender = sessionStorage.getItem('gender') || localStorage.getItem('gender');
    
    if (sessionLoggedIn && username) {
      setIsLoggedIn(true);
      setUser({
        username,
        gender,
      });
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
    
    setLoading(false);
  };

  // Login user
  const login = (userData) => {
    const { username, gender, rememberMe } = userData;
    
    // Store in sessionStorage for current session
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('gender', gender);
    
    // If remember me is checked, store in localStorage for persistence
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('gender', gender);
    }
    
    setIsLoggedIn(true);
    setUser({
      username,
      gender,
    });
    
    return true;
  };

  // Logout user
  const logout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('gender');
    
    setIsLoggedIn(false);
    setUser(null);
    
    return true;
  };

  // Register user for trip
  const registerForTrip = (tripData) => {
    localStorage.setItem('joinedTrip', 'true');
    localStorage.setItem('tripData', JSON.stringify(tripData));
    return true;
  };

  // Check if user is registered for trip
  const isRegisteredForTrip = () => {
    return localStorage.getItem('joinedTrip') === 'true';
  };

  // Context values to be provided
  const authContextValue = {
    isLoggedIn,
    user,
    loading,
    login,
    logout,
    registerForTrip,
    isRegisteredForTrip,
    checkUserStatus
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};