// Modal de Login

import React, { useState } from 'react';
import { Modal } from '../../../common/Modal/Modal';
import { Button } from '../../../common/Button/Button';
import { useAuth } from '../../../../hooks';
import type { UserRole } from '../../../../types/auth.types';
import './LoginModal.css';

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>('operario');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login({ username, password, role: selectedRole });
      
      // Limpiar formulario
      setUsername('');
      setPassword('');
      setError(null);
      
      // Cerrar modal
      onClose();
      
      // Callback de éxito
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      setError('Credenciales inválidas. Por favor, verifica tu usuario y contraseña.');
      console.error('Error en login:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    // Limpiar estado al cerrar
    setUsername('');
    setPassword('');
    setError(null);
    setSelectedRole('operario');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Iniciar Sesión"
      size="small"
    >
      <form onSubmit={handleSubmit} className="login-form">
        {/* Selector de Rol */}
        <div className="form-group">
          <label className="form-label">Tipo de Usuario</label>
          <div className="role-selector">
            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="operario"
                checked={selectedRole === 'operario'}
                onChange={(e) => setSelectedRole(e.target.value as UserRole)}
              />
              <span className="role-label">
                <span className="role-icon">👷</span>
                <span>Operario</span>
                <span className="role-description">Solo lectura</span>
              </span>
            </label>
            
            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={selectedRole === 'admin'}
                onChange={(e) => setSelectedRole(e.target.value as UserRole)}
              />
              <span className="role-label">
                <span className="role-icon">👨‍💼</span>
                <span>Administrador</span>
                <span className="role-description">Lectura y escritura</span>
              </span>
            </label>
          </div>
        </div>

        {/* Campo de Usuario */}
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Usuario
          </label>
          <input
            id="username"
            type="text"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su usuario"
            required
            autoComplete="username"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            required
            autoComplete="current-password"
          />
        </div>

        {/* Mensaje de Error */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Información de usuarios de prueba */}
        <div className="login-info">
          <p><strong>Usuarios de prueba:</strong></p>
          <p>👷 Operario: <code>operario</code> / <code>operario</code></p>
          <p>👨‍💼 Admin: <code>admin</code> / <code>admin</code></p>
        </div>

        {/* Botones */}
        <div className="form-actions">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            loading={loading}
            disabled={!username || !password}
          >
            Ingresar →
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;
