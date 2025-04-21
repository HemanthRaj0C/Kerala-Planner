'use client';

import { useState } from 'react';

export default function useLocalStorage() {
  // Get value from local storage
  const getStoredValue = (key, defaultValue = null) => {
    // Check if running on the client side
    if (typeof window !== 'undefined') {
      try {
        // Get value from local storage
        const item = window.localStorage.getItem(key);
        
        // Parse stored JSON if exists, otherwise return defaultValue
        return item ? (
          // Check if item is a JSON string
          item === 'true' || item === 'false' ? 
            item === 'true' : // Handle boolean values
            JSON.parse(item)
        ) : defaultValue;
      } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
        return defaultValue;
      }
    }
    return defaultValue;
  };

  // Store value in local storage
  const setStoredValue = (key, value) => {
    if (typeof window !== 'undefined') {
      try {
        // Save to localStorage
        window.localStorage.setItem(
          key,
          typeof value === 'object' ? JSON.stringify(value) : value
        );
        
        return true;
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
        return false;
      }
    }
    return false;
  };

  // Remove value from local storage
  const removeStoredValue = (key) => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error);
        return false;
      }
    }
    return false;
  };

  // Clear all values from local storage
  const clearStorage = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.clear();
        return true;
      } catch (error) {
        console.error('Error clearing localStorage:', error);
        return false;
      }
    }
    return false;
  };

  return [getStoredValue, setStoredValue, removeStoredValue, clearStorage];
}