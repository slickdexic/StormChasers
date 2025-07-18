import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }

  ${props => props.position === 'top' && `
    bottom: auto;
    top: 100%;
    margin-top: 8px;
    margin-bottom: 0;

    &::after {
      top: auto;
      bottom: 100%;
      border-top-color: transparent;
      border-bottom-color: rgba(0, 0, 0, 0.9);
    }
  `}

  ${props => props.position === 'left' && `
    bottom: auto;
    top: 50%;
    left: auto;
    right: 100%;
    transform: translateY(-50%);
    margin-right: 8px;
    margin-bottom: 0;

    &::after {
      top: 50%;
      left: 100%;
      right: auto;
      bottom: auto;
      transform: translateY(-50%);
      border-top-color: transparent;
      border-left-color: rgba(0, 0, 0, 0.9);
    }
  `}

  ${props => props.position === 'right' && `
    bottom: auto;
    top: 50%;
    left: 100%;
    right: auto;
    transform: translateY(-50%);
    margin-left: 8px;
    margin-bottom: 0;

    &::after {
      top: 50%;
      left: auto;
      right: 100%;
      bottom: auto;
      transform: translateY(-50%);
      border-top-color: transparent;
      border-right-color: rgba(0, 0, 0, 0.9);
    }
  `}
`;

const Tooltip = ({ children, content, position = 'bottom', delay = 0.5 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <TooltipContainer
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && content && (
        <TooltipContent
          position={position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
