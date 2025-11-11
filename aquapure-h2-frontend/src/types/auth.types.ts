// Tipos relacionados con Autenticación

export type UserRole = 'admin' | 'operario';

export interface User {
  id: string;
  username: string;
  nombre: string;
  email: string;
  role: UserRole;
}

export interface LoginCredentials {
  username: string;
  password: string;
  role: UserRole;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  userName: string | null;
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  canWrite: boolean;
}
