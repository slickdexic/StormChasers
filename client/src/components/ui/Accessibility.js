import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const LiveRegion = styled.div`
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

/**
 * Screen Reader Only component - content visible only to screen readers
 */
export const ScreenReaderOnly = ({ children, ...props }) => (
  <VisuallyHidden {...props}>
    {children}
  </VisuallyHidden>
);

/**
 * Live announcement component for dynamic content updates
 */
export const LiveAnnouncer = ({ 
  message, 
  politeness = 'polite', 
  clearDelay = 5000,
  ...props 
}) => {
  const announcerRef = useRef(null);

  useEffect(() => {
    if (message && announcerRef.current) {
      // Clear previous message
      announcerRef.current.textContent = '';
      
      // Set new message after brief delay to ensure screen reader picks it up
      setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = message;
        }
      }, 100);

      // Clear message after delay to avoid cluttering
      if (clearDelay > 0) {
        setTimeout(() => {
          if (announcerRef.current) {
            announcerRef.current.textContent = '';
          }
        }, clearDelay);
      }
    }
  }, [message, clearDelay]);

  return (
    <LiveRegion
      ref={announcerRef}
      aria-live={politeness}
      aria-atomic="true"
      {...props}
    />
  );
};

/**
 * Skip Link component for keyboard navigation
 */
export const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-bg);
  color: var(--accent-color);
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  border: 2px solid var(--accent-color);
  z-index: 9999;
  
  &:focus {
    top: 6px;
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }
`;

/**
 * Game State Announcer - announces important game state changes
 */
export const GameStateAnnouncer = ({ gameState, currentStage, ...props }) => {
  const getStageAnnouncement = () => {
    switch (currentStage) {
      case 'dealer-selection':
        return 'Dealer selection stage. Players are selecting cards to determine dealer.';
      case 'storm':
        return 'Storm stage. Card game in progress.';
      case 'betting':
        return 'Betting stage. Players are placing bets.';
      case 'racing':
        return 'Racing stage. Players are moving on the track.';
      case 'results':
        return 'Results stage. Round results are being displayed.';
      default:
        return '';
    }
  };

  return (
    <LiveAnnouncer 
      message={getStageAnnouncement()} 
      politeness="assertive"
      {...props} 
    />
  );
};

/**
 * Turn Announcer - announces whose turn it is
 */
export const TurnAnnouncer = ({ activePlayerName, isMyTurn, ...props }) => {
  const message = isMyTurn 
    ? 'It is your turn' 
    : activePlayerName 
      ? `It is ${activePlayerName}'s turn`
      : '';

  return (
    <LiveAnnouncer 
      message={message} 
      politeness="polite"
      {...props} 
    />
  );
};

/**
 * Card Action Announcer - announces card-related actions
 */
export const CardActionAnnouncer = ({ action, cardDescription, ...props }) => {
  const getActionMessage = () => {
    if (!action || !cardDescription) return '';
    
    switch (action) {
      case 'played':
        return `${cardDescription} was played`;
      case 'drawn':
        return `Card was drawn`;
      case 'discarded':
        return `${cardDescription} was discarded`;
      default:
        return '';
    }
  };

  return (
    <LiveAnnouncer 
      message={getActionMessage()} 
      politeness="polite"
      {...props} 
    />
  );
};

export default {
  ScreenReaderOnly,
  LiveAnnouncer,
  SkipLink,
  GameStateAnnouncer,
  TurnAnnouncer,
  CardActionAnnouncer
};
