import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries, touchTargets } from '../../utils/responsive';

const Button = styled(motion.button)`
  padding: ${props => {
    switch(props.size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  
  /* Ensure minimum touch target size on mobile */
  min-height: ${touchTargets.minimum};
  
  ${mediaQueries.mobile} {
    min-height: ${touchTargets.comfortable};
    padding: ${props => {
      switch(props.size) {
        case 'small': return '12px 20px';
        case 'large': return '20px 40px';
        default: return '16px 28px';
      }
    }};
  }
  
  background: ${props => {
    switch(props.variant) {
      case 'primary': return 'linear-gradient(45deg, var(--accent-color), var(--accent-color-dark))';
      case 'secondary': return 'linear-gradient(45deg, var(--tertiary-bg), var(--secondary-bg))';
      case 'danger': return 'linear-gradient(45deg, var(--error-color), #cc0000)';
      case 'success': return 'linear-gradient(45deg, var(--success-color), #00cc44)';
      default: return 'linear-gradient(45deg, var(--accent-color), var(--accent-color-dark))';
    }
  }};
  
  border: none;
  border-radius: ${props => props.rounded ? '25px' : '10px'};
  color: ${props => props.variant === 'secondary' ? 'var(--primary-text)' : 'var(--primary-bg)'};
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '0.9rem';
      case 'large': return '1.3rem';
      default: return '1rem';
    }
  }};
  
  /* Responsive font sizes */
  ${mediaQueries.mobile} {
    font-size: ${props => {
      switch(props.size) {
        case 'small': return '0.8rem';
        case 'large': return '1.1rem';
        default: return '0.9rem';
      }
    }};
  }
  
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  /* Improve touch interaction on mobile */
  ${mediaQueries.mobile} {
    &:active {
      transform: scale(0.98);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 252, 241, 0.4);
  }
  
  /* Reduce hover effects on touch devices */
  @media (hover: none) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
    
    &:hover:before {
      left: -100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &:hover:before {
      left: -100%;
    }
  }
  
  &:focus {
    outline: 3px solid var(--accent-color);
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--primary-bg), 0 0 0 5px var(--accent-color);
  }
  
  &:focus-visible {
    outline: 3px solid var(--accent-color);
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--primary-bg), 0 0 0 5px var(--accent-color);
  }
  
  &:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function ThemedButton({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  rounded = false, 
  loading = false,
  disabled = false,
  onClick,
  ariaLabel,
  ariaDescribedBy,
  role = 'button',
  type = 'button',
  id,
  ...props 
}) {
  // Create accessible label text
  const getAccessibleLabel = () => {
    if (ariaLabel) return ariaLabel;
    if (typeof children === 'string') return children;
    return 'Button';
  };

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (disabled || loading) return;
    
    // Activate button on Enter or Space
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onClick) onClick(event);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      rounded={rounded}
      disabled={disabled || loading}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={role}
      type={type}
      id={id}
      aria-label={getAccessibleLabel()}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      tabIndex={disabled ? -1 : 0}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      {...props}
    >
      {loading && (
        <LoadingSpinner 
          role="status" 
          aria-label="Loading"
        />
      )}
      <span aria-hidden={loading ? 'true' : 'false'}>
        {children}
      </span>
    </Button>
  );
}

export default ThemedButton;
