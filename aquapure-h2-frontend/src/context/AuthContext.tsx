// Context de Autenticación

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as authService from '../services/api/authService';
import type { AuthContextType, User, UserRole, LoginCredentials } from '../types/auth.types';
import { STORAGE_KEYS } from '../services/utils/constants';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Verificar autenticación al cargar
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        const storedRole = localStorage.getItem(STORAGE_KEYS.USER_ROLE) as UserRole | null;
        const storedName = localStorage.getItem(STORAGE_KEYS.USER_NAME);
        const storedUserData = localStorage.getItem(STORAGE_KEYS.USER_DATA);

        if (token && storedRole && storedName) {
          // Verificar que el token sea válido
          const isValid = await authService.verifyToken(token);
          
          if (isValid) {
            setIsAuthenticated(true);
            setUserRole(storedRole);
            setUserName(storedName);
            
            if (storedUserData) {
              setUser(JSON.parse(storedUserData));
            }
          } else {
            // Token inválido, limpiar localStorage
            handleLogout();
          }
        }
      } catch (error) {
        console.error('Error al verificar autenticación:', error);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      const response = await authService.login(credentials);
      const { token, user: userData } = response;

      // Guardar en localStorage
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER_ROLE, userData.role);
      localStorage.setItem(STORAGE_KEYS.USER_NAME, userData.nombre);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));

      // Actualizar estado
      setIsAuthenticated(true);
      setUserRole(userData.role);
      setUserName(userData.nombre);
      setUser(userData);
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  };

  const logout = () => {
    handleLogout();
  };

  const handleLogout = () => {
    // Limpiar localStorage
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_ROLE);
    localStorage.removeItem(STORAGE_KEYS.USER_NAME);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);

    // Resetear estado
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName(null);
    setUser(null);

    // Llamar al servicio de logout (en producción)
    authService.logout();
  };

  const canWrite = userRole === 'admin';

  const value: AuthContextType = {
    isAuthenticated,
    userRole,
    userName,
    user,
    login,
    logout,
    canWrite,
  };

  // Mostrar loading mientras se verifica auth
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontSize: '18px',
        color: '#4CAF50'
      }}>
        Cargando...
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export default AuthContext;
