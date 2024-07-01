// authProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the auth information
const AuthContext = createContext();

// This component will wrap around any part of your app that needs auth info
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulate user authentication state
  useEffect(() => {
    // Here you would check for user authentication state, e.g., check a token in localStorage
    // For demonstration, we'll just set a fake user after 1 second
    const fakeUser = { id: '123', name: 'John Doe', photoURL: 'https://example.com/photo.jpg' };
    const timer = setTimeout(() => setUser(fakeUser), 1000);

    return () => clearTimeout(timer);
  }, []);

  const logOut = () => {
    // Here you would clear the authentication token or similar
    return new Promise((resolve, reject) => {
      try {
        setUser(null); // Clear user state
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);