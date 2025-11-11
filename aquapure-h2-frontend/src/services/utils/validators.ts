// Funciones de Validación

/**
 * Valida email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida que el campo no esté vacío
 */
export const isRequired = (value: string | null | undefined): boolean => {
  if (value === null || value === undefined) return false;
  return value.trim().length > 0;
};

/**
 * Valida longitud mínima
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Valida longitud máxima
 */
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

/**
 * Valida que sea un número
 */
export const isNumber = (value: any): boolean => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/**
 * Valida que sea un número entero
 */
export const isInteger = (value: any): boolean => {
  return Number.isInteger(Number(value));
};

/**
 * Valida rango numérico
 */
export const isInRange = (
  value: number,
  min: number,
  max: number
): boolean => {
  return value >= min && value <= max;
};

/**
 * Valida que sea un número positivo
 */
export const isPositive = (value: number): boolean => {
  return value > 0;
};

/**
 * Valida formato de usuario
 */
export const isValidUsername = (username: string): boolean => {
  // Solo letras, números, guiones y puntos, 3-20 caracteres
  const usernameRegex = /^[a-zA-Z0-9._-]{3,20}$/;
  return usernameRegex.test(username);
};

/**
 * Valida contraseña (mínimo 6 caracteres)
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

/**
 * Valida URL
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Valida formato de fecha ISO
 */
export const isValidISODate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

/**
 * Valida que un objeto no esté vacío
 */
export const isNotEmptyObject = (obj: any): boolean => {
  return obj && Object.keys(obj).length > 0;
};

/**
 * Valida que un array no esté vacío
 */
export const isNotEmptyArray = (arr: any[]): boolean => {
  return Array.isArray(arr) && arr.length > 0;
};

/**
 * Mensajes de error de validación
 */
export const getValidationMessage = (field: string, rule: string): string => {
  const messages: Record<string, string> = {
    required: `El campo ${field} es obligatorio`,
    email: `Ingrese un email válido`,
    minLength: `El campo ${field} debe tener al menos {min} caracteres`,
    maxLength: `El campo ${field} no puede tener más de {max} caracteres`,
    number: `El campo ${field} debe ser un número`,
    positive: `El campo ${field} debe ser un número positivo`,
    range: `El campo ${field} debe estar entre {min} y {max}`,
    username: `El nombre de usuario debe tener entre 3-20 caracteres (solo letras, números, ., _, -)`,
    password: `La contraseña debe tener al menos 6 caracteres`,
  };
  
  return messages[rule] || `El campo ${field} no es válido`;
};
