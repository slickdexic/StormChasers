import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.5); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.3); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(255, 56, 56, 0.1) 0%, transparent 50%),
    rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(15px);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  ${css`animation: ${float} 3s ease-in-out infinite;`}
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 60%
    );
    ${css`animation: ${sparkle} 4s ease-in-out infinite;`}
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const OuterRing = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(0, 212, 255, 0.1);
  border-top: 4px solid #00d4ff;
  border-radius: 50%;
  ${css`animation: ${spin} 1.5s linear infinite;`}
`;

const MiddleRing = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 215, 0, 0.1);
  border-right: 3px solid #ffd700;
  border-radius: 50%;
  ${css`animation: ${spin} 1s linear infinite reverse;`}
`;

const InnerCore = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #00d4ff, #0099cc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${css`animation: ${glow} 2s ease-in-out infinite;`}
  
  &::after {
    content: '⚡';
    font-size: 20px;
    color: white;
    text-shadow: 0 0 10px white;
  }
`;

const LoadingText = styled.div`
  color: white;
  font-family: 'Orbitron', monospace;
  font-size: 20px;
  font-weight: 700;
  ${css`animation: ${pulse} 2s ease-in-out infinite;`}
  text-align: center;
  text-shadow: 
    0 0 10px #00d4ff,
    0 0 20px rgba(0, 212, 255, 0.5);
  position: relative;
  z-index: 2;
`;

const LoadingSubtext = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const ProgressDots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00d4ff;
  ${css`animation: ${pulse} 1.5s ease-in-out infinite;`}
  animation-delay: ${props => props.delay}s;
`;

const InlineSpinnerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const InlineSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-top: 2px solid #00d4ff;
  border-radius: 50%;
  ${css`animation: ${spin} 1s linear infinite;`}
`;

function LoadingSpinner({ 
  overlay = false, 
  text = "Loading Havoc Speedway...", 
  subtext = "Preparing your racing experience",
  inline = false 
}) {
  if (inline) {
    return (
      <InlineSpinnerContainer>
        <InlineSpinner />
      </InlineSpinnerContainer>
    );
  }

  const content = (
    <LoadingContainer>
      <SpinnerContainer>
        <OuterRing />
        <MiddleRing />
        <InnerCore />
      </SpinnerContainer>
      
      <div>
        <LoadingText>{text}</LoadingText>
        {subtext && <LoadingSubtext>{subtext}</LoadingSubtext>}
        
        <ProgressDots>
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </ProgressDots>
      </div>
    </LoadingContainer>
  );

  if (overlay) {
    return <LoadingOverlay>{content}</LoadingOverlay>;
  }

  return content;
}

export default LoadingSpinner;
