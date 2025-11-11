// Funciones de Formato y Utilidades

import { format as formatDate } from 'date-fns';
import { es } from 'date-fns/locale';

/**
 * Formatea un número con decimales
 */
export const formatNumber = (
  value: number | null | undefined,
  decimals: number = 2
): string => {
  if (value === null || value === undefined) return '--';
  return value.toFixed(decimals);
};

/**
 * Formatea un número como porcentaje
 */
export const formatPercentage = (
  value: number | null | undefined,
  decimals: number = 1
): string => {
  if (value === null || value === undefined) return '--';
  return `${value.toFixed(decimals)}%`;
};

/**
 * Formatea una fecha
 */
export const formatDateTime = (
  date: string | Date | null | undefined,
  formatStr: string = 'dd/MM/yyyy HH:mm:ss'
): string => {
  if (!date) return '--';
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return formatDate(dateObj, formatStr, { locale: es });
  } catch {
    return '--';
  }
};

/**
 * Formatea una fecha relativa (hace X minutos)
 */
export const formatRelativeTime = (date: string | Date | null | undefined): string => {
  if (!date) return '--';
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diffMs = now.getTime() - dateObj.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) return 'Hace unos segundos';
    if (diffMinutes < 60) return `Hace ${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`;
    if (diffHours < 24) return `Hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
    if (diffDays < 7) return `Hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    
    return formatDateTime(dateObj, 'dd/MM/yyyy');
  } catch {
    return '--';
  }
};

/**
 * Formatea un valor con unidad
 */
export const formatValueWithUnit = (
  value: number | null | undefined,
  unit: string,
  decimals: number = 2
): string => {
  if (value === null || value === undefined) return '--';
  return `${formatNumber(value, decimals)} ${unit}`;
};

/**
 * Trunca texto largo
 */
export const truncateText = (text: string, maxLength: number = 50): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Capitaliza primera letra
 */
export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Convierte snake_case a Title Case
 */
export const snakeToTitle = (text: string): string => {
  return text
    .split('_')
    .map(word => capitalize(word))
    .join(' ');
};

/**
 * Genera un color basado en el estado
 */
export const getStatusColor = (status: string): string => {
  const statusLower = status.toLowerCase();
  
  const colorMap: Record<string, string> = {
    'active': '#4CAF50',
    'good': '#4CAF50',
    'normal': '#4CAF50',
    'warning': '#FFC107',
    'maintenance': '#FFC107',
    'critical': '#F44336',
    'error': '#F44336',
    'inactive': '#808080',
  };
  
  return colorMap[statusLower] || '#808080';
};

/**
 * Valida si un valor está en un rango
 */
export const isInRange = (
  value: number,
  min: number,
  max: number
): boolean => {
  return value >= min && value <= max;
};

/**
 * Calcula el porcentaje de un valor respecto a un máximo
 */
export const calculatePercentage = (
  value: number,
  max: number
): number => {
  if (max === 0) return 0;
  return (value / max) * 100;
};

/**
 * Formatea bytes a unidad legible
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
