// Configuración de Axios para Fiware Orion

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { FIWARE_URL, FIWARE_SERVICE, FIWARE_SERVICEPATH, STORAGE_KEYS } from '../utils/constants';
import type { FiwareHeaders } from '../../types/api.types';

// Cliente Axios para Fiware Orion
export const fiwareClient: AxiosInstance = axios.create({
  baseURL: `${FIWARE_URL}/v2`,
  headers: {
    'Content-Type': 'application/json',
    'fiware-service': FIWARE_SERVICE,
    'fiware-servicepath': FIWARE_SERVICEPATH,
  } as FiwareHeaders,
  timeout: 10000,
});

// Interceptor para agregar token de autenticación
fiwareClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejo de errores
fiwareClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Error de respuesta del servidor
      console.error('Error de API:', error.response.data);
      
      if (error.response.status === 401) {
        // Token inválido o expirado
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        window.location.href = '/';
      }
    } else if (error.request) {
      // Error de red
      console.error('Error de red:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Cliente Axios genérico para otras APIs
export const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Agregar interceptores similares al apiClient
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default { fiwareClient, apiClient };
