import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';

export const AuthContext = createContext(); 

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [] });  // Set default empty employees array

  useEffect(() => {
    setLocalStorage();  // Ensure this function is working properly
    const storedData = getLocalStorage();  // Retrieve data from localStorage
    if (storedData && storedData.employees) {
      setUserData({ employees: storedData.employees });  // Set employees from localStorage
    } else {
      setUserData({ employees: [] });  // Ensure fallback to empty array if no data found
    }
  }, []); // Only runs on component mount

  return (
    <AuthContext.Provider value={[userData, setUserData]}> {/* Provide both state and setState */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
