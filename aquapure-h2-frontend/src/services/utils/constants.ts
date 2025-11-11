// Constantes de la Aplicación

// URLs y Endpoints
export const FIWARE_URL = import.meta.env.VITE_FIWARE_URL || 'http://localhost:1026';
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// Fiware Headers
export const FIWARE_SERVICE = import.meta.env.VITE_FIWARE_SERVICE || 'aquapure';
export const FIWARE_SERVICEPATH = import.meta.env.VITE_FIWARE_SERVICEPATH || '/';

// Intervalos de Actualización
export const DATA_UPDATE_INTERVAL = Number(import.meta.env.VITE_DATA_UPDATE_INTERVAL) || 2000;

// Tipos de Entidades Fiware
export const ENTITY_TYPES = {
  SENSOR: 'WaterPuritySensor',
  VARIABLE: 'SystemVariable',
  INDICATOR: 'PerformanceIndicator',
  DEVICE: 'TreatmentDevice',
} as const;

// Roles de Usuario
export const USER_ROLES = {
  ADMIN: 'admin',
  OPERARIO: 'operario',
} as const;

// Estados de Sensores
export const SENSOR_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  MAINTENANCE: 'maintenance',
  ERROR: 'error',
} as const;

// Umbrales de Pureza
export const PURITY_THRESHOLDS = {
  GOOD: 98,
  WARNING: 95,
  CRITICAL: 90,
} as const;

// Colores EMP Medellín
export const COLORS = {
  BLANCO_HUESO: '#F5F5DC',
  GRIS: '#808080',
  NEGRO_GRIS: '#2C2C2C',
  VERDE_EMP: '#4CAF50',
  VERDE_HOVER: '#45a049',
} as const;

// Rutas de la Aplicación
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  VARIABLES: '/variables',
  INDICADORES: '/indicadores',
  SENSORES: '/sensores',
  ANALISIS: '/analisis',
} as const;

// LocalStorage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_ROLE: 'userRole',
  USER_NAME: 'userName',
  USER_DATA: 'userData',
} as const;

// Mensajes de Error
export const ERROR_MESSAGES = {
  AUTH_FAILED: 'Credenciales inválidas',
  NETWORK_ERROR: 'Error de conexión',
  SERVER_ERROR: 'Error del servidor',
  UNAUTHORIZED: 'No tiene permisos para realizar esta acción',
  NOT_FOUND: 'Recurso no encontrado',
} as const;

// Configuración de Gráficas
export const CHART_CONFIG = {
  COLORS: {
    PRIMARY: '#4CAF50',
    SECONDARY: '#808080',
    ACCENT: '#2196F3',
    WARNING: '#FFC107',
    ERROR: '#F44336',
  },
  DEFAULT_HEIGHT: 300,
  DEFAULT_WIDTH: 600,
} as const;
