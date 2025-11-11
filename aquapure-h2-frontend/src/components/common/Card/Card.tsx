// Componente Card reutilizable

import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
  style,
}) => {
  const classNames = [
    'card',
    hover && 'card-hover',
    onClick && 'card-clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div 
      className={classNames} 
      onClick={onClick}
      style={style}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
