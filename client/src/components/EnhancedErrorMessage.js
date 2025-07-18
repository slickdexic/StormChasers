import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ThemedButton from './ui/ThemedButton';

const ErrorContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 400px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ErrorCard = styled(motion.div)`
  background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  color: white;
  box-shadow: 0 8px 32px rgba(244, 67, 54, 0.3);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
`;

const ErrorHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const ErrorIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
`;

const ErrorContent = styled.div`
  flex: 1;
`;

const ErrorTitle = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ErrorActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: flex-end;
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0 0 12px 12px;
`;

const ErrorBoundaryFallback = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  text-align: center;
`;

const getErrorIcon = (type) => {
  switch (type) {
    case 'warning': return '⚠️';
    case 'info': return 'ℹ️';
    case 'success': return '✅';
    default: return '❌';
  }
};

const EnhancedErrorMessage = ({ 
  errors = [], 
  onDismiss, 
  onRetry,
  autoHide = true,
  hideDelay = 5000 
}) => {
  const [visibleErrors, setVisibleErrors] = React.useState(errors);

  React.useEffect(() => {
    setVisibleErrors(errors);
  }, [errors]);

  React.useEffect(() => {
    if (autoHide && visibleErrors.length > 0) {
      const timers = visibleErrors.map((error, index) => 
        setTimeout(() => {
          handleDismiss(error.id);
        }, hideDelay + (index * 500))
      );

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [visibleErrors, autoHide, hideDelay]);

  const handleDismiss = (errorId) => {
    setVisibleErrors(prev => prev.filter(e => e.id !== errorId));
    if (onDismiss) {
      onDismiss(errorId);
    }
  };

  const handleRetry = (error) => {
    handleDismiss(error.id);
    if (onRetry) {
      onRetry(error);
    }
  };

  return (
    <ErrorContainer>
      <AnimatePresence>
        {visibleErrors.map((error) => (
          <ErrorCard
            key={error.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ErrorHeader>
              <ErrorIcon>{getErrorIcon(error.type)}</ErrorIcon>
              <ErrorContent>
                <ErrorTitle>{error.title || 'Error'}</ErrorTitle>
                <ErrorMessage>{error.message}</ErrorMessage>
              </ErrorContent>
            </ErrorHeader>

            <CloseButton
              onClick={() => handleDismiss(error.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </CloseButton>

            {(error.action || onRetry) && (
              <ErrorActions>
                {error.action && (
                  <ThemedButton
                    size="small"
                    variant="secondary"
                    onClick={() => {
                      error.action();
                      handleDismiss(error.id);
                    }}
                  >
                    {error.actionLabel || 'Action'}
                  </ThemedButton>
                )}
                {onRetry && (
                  <ThemedButton
                    size="small"
                    onClick={() => handleRetry(error)}
                  >
                    Retry
                  </ThemedButton>
                )}
              </ErrorActions>
            )}

            {autoHide && (
              <ProgressBar
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: hideDelay / 1000, ease: 'linear' }}
              />
            )}
          </ErrorCard>
        ))}
      </AnimatePresence>
    </ErrorContainer>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryFallback>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            ⚠️ Something went wrong
          </h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
            The application encountered an unexpected error.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ 
              background: 'rgba(0,0,0,0.3)', 
              padding: '1rem', 
              borderRadius: '8px',
              marginBottom: '2rem',
              textAlign: 'left',
              maxWidth: '600px'
            }}>
              <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                Error Details
              </summary>
              <pre style={{ fontSize: '0.8rem', overflow: 'auto' }}>
                {this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <ThemedButton
            onClick={() => window.location.reload()}
            size="large"
          >
            Reload Application
          </ThemedButton>
        </ErrorBoundaryFallback>
      );
    }

    return this.props.children;
  }
}

export { EnhancedErrorMessage, ErrorBoundary };
export default EnhancedErrorMessage;
