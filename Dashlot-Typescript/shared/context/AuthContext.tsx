import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { cognitoService } from '../aws/cognitoService';
import { CognitoUser } from 'amazon-cognito-identity-js';

// Definir la interfaz para el contexto de autenticación
interface AuthContextType {
  user: CognitoUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  loginWithOAuth: () => void;
  logout: () => void;
  error: string | null;
}

// Crear el contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto de autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Verificar el estado de autenticación al cargar la página
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await cognitoService.getCurrentUser();
        setUser(currentUser);
        setIsAuthenticated(!!currentUser);
      } catch (err) {
        console.error('Error al verificar la autenticación:', err);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Función para iniciar sesión con credenciales
  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await cognitoService.login(username, password);
      const currentUser = await cognitoService.getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(!!currentUser);
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Función para iniciar sesión con OAuth
  const loginWithOAuth = () => {
    cognitoService.initiateOAuthLogin();
  };

  // Función para cerrar sesión
  const logout = () => {
    cognitoService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  // Valor del contexto
  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    loginWithOAuth,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};