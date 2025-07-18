import React, { useId } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputContainer = styled.div`
  position: relative;
  margin: 1rem 0;
`;

const StyledInput = styled(motion.input)`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #4CAF50;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.3), 0 0 0 2px #4CAF50;
  }
  
  &:focus-visible {
    outline: 2px solid #4CAF50;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => props.error && `
    border-color: #f44336;
    &:focus {
      border-color: #f44336;
      box-shadow: 0 0 20px rgba(244, 67, 54, 0.3);
    }
  `}
`;

const Label = styled.label`
  display: block;
  color: white;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const ErrorMessage = styled(motion.div)`
  color: #f44336;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
`;

const HelperText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
`;

const ThemedInput = ({ 
  label,
  error,
  helperText,
  className,
  id: providedId,
  required = false,
  ...inputProps 
}) => {
  const generatedId = useId();
  const inputId = providedId || generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <InputContainer className={className}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && (
            <span aria-label="required" role="img" style={{color: '#f44336', marginLeft: '4px'}}>
              *
            </span>
          )}
        </Label>
      )}
      <StyledInput
        id={inputId}
        error={error}
        required={required}
        aria-invalid={!!error}
        aria-describedby={
          [
            error ? errorId : null,
            helperText ? helperId : null
          ].filter(Boolean).join(' ') || undefined
        }
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        {...inputProps}
      />
      {error && (
        <ErrorMessage
          id={errorId}
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </ErrorMessage>
      )}
      {helperText && !error && (
        <HelperText id={helperId} role="note">
          {helperText}
        </HelperText>
      )}
    </InputContainer>
  );
};

export default ThemedInput;
