/**
 * Reusable Card Component
 * Modular card component for displaying content sections
 */

import React from 'react';
import './Card.css';

const Card = ({ children, className = '', variant = 'default', ...props }) => {
  const cardClasses = `card card-${variant} ${className}`.trim();

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
