// context/AuthContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null); // Puede ser 'admin', 'user', 'pf', etc.
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  // Función para iniciar sesión
  const login = (type) => {
    setUserType(type);
    setIsAuthenticated(true);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUserType(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ userType, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
