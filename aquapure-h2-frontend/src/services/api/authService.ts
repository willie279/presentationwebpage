// Servicio de Autenticación

import { apiClient } from './axiosConfig';
import type { LoginCredentials, AuthResponse, User } from '../../types/auth.types';
import { STORAGE_KEYS } from '../utils/constants';

/**
 * Usuarios mock para desarrollo
 * En producción, esto vendría del backend
 */
const MOCK_USERS = [
  {
    id: 'admin001',
    username: 'admin.emp',
    password: 'admin123', // En producción, esto estaría hasheado
    nombre: 'Administrador EMP',
    email: 'admin@emp-medellin.com',
    role: 'admin' as const,
  },
  {
    id: 'oper001',
    username: 'operario.emp',
    password: 'operario123',
    nombre: 'Operario Planta',
    email: 'operario@emp-medellin.com',
    role: 'operario' as const,
  },
  {
    id: 'admin002',
    username: 'admin',
    password: 'admin',
    nombre: 'Admin Test',
    email: 'admin.test@emp-medellin.com',
    role: 'admin' as const,
  },
  {
    id: 'oper002',
    username: 'operario',
    password: 'operario',
    nombre: 'Operario Test',
    email: 'operario.test@emp-medellin.com',
    role: 'operario' as const,
  },
];

/**
 * Login con credenciales
 * NOTA: Esta es una implementación mock para desarrollo
 * En producción, esto haría una llamada real al backend
 */
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simulación de delay de red
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Buscar usuario
  const user = MOCK_USERS.find(
    u => u.username === credentials.username && 
         u.password === credentials.password &&
         u.role === credentials.role
  );
  
  if (!user) {
    throw new Error('Credenciales inválidas');
  }
  
  // Generar token mock (en producción vendría del servidor)
  const token = btoa(`${user.username}:${Date.now()}`);
  
  const userResponse: User = {
    id: user.id,
    username: user.username,
    nombre: user.nombre,
    email: user.email,
    role: user.role,
  };
  
  return {
    token,
    user: userResponse,
  };
  
  // En producción, sería algo como:
  // const response = await apiClient.post('/auth/login', credentials);
  // return response.data;
};

/**
 * Logout
 */
export const logout = async (): Promise<void> => {
  // Limpiar localStorage
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_ROLE);
  localStorage.removeItem(STORAGE_KEYS.USER_NAME);
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  
  // En producción, también invalidar el token en el servidor:
  // await apiClient.post('/auth/logout');
};

/**
 * Verifica si el token actual es válido
 */
export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    // En producción, verificar con el backend:
    // const response = await apiClient.post('/auth/verify', { token });
    // return response.data.valid;
    
    // Mock: solo verificar que existe
    return !!token;
  } catch {
    return false;
  }
};

/**
 * Obtiene los datos del usuario actual
 */
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) return null;
    
    // En producción:
    // const response = await apiClient.get('/auth/me');
    // return response.data;
    
    // Mock: obtener de localStorage
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    if (userData) {
      return JSON.parse(userData);
    }
    
    return null;
  } catch {
    return null;
  }
};

/**
 * Refresca el token de autenticación
 */
export const refreshToken = async (): Promise<string> => {
  // En producción:
  // const response = await apiClient.post('/auth/refresh');
  // return response.data.token;
  
  // Mock: generar nuevo token
  const currentToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  if (!currentToken) throw new Error('No hay token para refrescar');
  
  const newToken = btoa(`refreshed:${Date.now()}`);
  localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, newToken);
  
  return newToken;
};

/**
 * Cambia la contraseña del usuario
 */
export const changePassword = async (
  oldPassword: string,
  newPassword: string
): Promise<void> => {
  // En producción:
  // await apiClient.post('/auth/change-password', { oldPassword, newPassword });
  
  // Mock: solo simular delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Contraseña cambiada (mock)');
};

export default {
  login,
  logout,
  verifyToken,
  getCurrentUser,
  refreshToken,
  changePassword,
};
