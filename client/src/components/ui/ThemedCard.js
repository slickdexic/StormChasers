import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Badge = styled.span`
  background: ${props => {
    switch (props.variant) {
      case 'success': return '#4CAF50';
      case 'warning': return '#FF9800';
      case 'error': return '#f44336';
      case 'info': return '#2196F3';
      default: return '#6c757d';
    }
  }};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Content = styled.div`
  line-height: 1.6;
`;

const ThemedCard = ({ 
  title, 
  badge, 
  badgeVariant = 'default',
  children,
  className,
  ...motionProps 
}) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={className}
      {...motionProps}
    >
      {(title || badge) && (
        <Header>
          {title && <h3>{title}</h3>}
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        </Header>
      )}
      <Content>
        {children}
      </Content>
    </CardContainer>
  );
};

export default ThemedCard;
