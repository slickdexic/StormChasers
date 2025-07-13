import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useGame } from '../contexts/GameContext';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ErrorContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ff4757;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ErrorIcon = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ErrorText = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

function ErrorMessage({ message }) {
  const { clearError } = useGame();

  useEffect(() => {
    const timer = setTimeout(() => {
      clearError();
    }, 5000);

    return () => clearTimeout(timer);
  }, [clearError]);

  if (!message) return null;

  return (
    <ErrorContainer>
      <ErrorIcon>⚠</ErrorIcon>
      <ErrorText>{message}</ErrorText>
      <CloseButton onClick={clearError}>×</CloseButton>
    </ErrorContainer>
  );
}

export default ErrorMessage;
