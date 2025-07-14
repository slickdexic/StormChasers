import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const raceAnimation = keyframes`
  0% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(-10px); }
`;

const sparkleTrail = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.3); }
`;

const pitStopGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.2); }
`;

const TrackContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  position: relative;
  background: 
    radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(255, 56, 56, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  border-radius: 20px;
  border: 3px solid rgba(0, 212, 255, 0.3);
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

const TrackSVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TrackPath = styled.path`
  fill: none;
  stroke: #2a2a3e;
  stroke-width: 80;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const TrackCenter = styled.path`
  fill: none;
  stroke: #1a1a2e;
  stroke-width: 40;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const TrackLines = styled.path`
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 10, 10;
`;

const StartFinishLine = styled.rect`
  fill: url(#startFinishGradient);
  stroke: white;
  stroke-width: 2;
`;

const PitStopArea = styled.rect`
  fill: rgba(255, 165, 0, 0.2);
  stroke: #ffa500;
  stroke-width: 2;
  rx: 5;
  ${css`animation: ${pitStopGlow} 3s ease-in-out infinite;`}
`;

const PlayerPawn = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${props => props.color || '#00d4ff'};
  border: 3px solid white;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.4),
    0 0 0 2px ${props => props.color || '#00d4ff'},
    0 0 20px ${props => props.color || '#00d4ff'}40;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: ${props => {
    const lightColors = ['#ffd700', '#ff8c00', '#ff69b4'];
    return lightColors.includes(props.color) ? '#000' : '#fff';
  }};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  
  ${props => props.isMoving && css`
    animation: ${raceAnimation} 0.3s ease-in-out;
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 10px;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    transform: translate(-50%, -50%);
    ${css`animation: ${sparkleTrail} 2s ease-in-out infinite;`}
  }
`;

const PositionMarker = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rajdhani', sans-serif;
`;

const LapCounter = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid rgba(0, 212, 255, 0.5);
  color: white;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  .label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    display: block;
    margin-bottom: 5px;
  }
  
  .current {
    color: #00d4ff;
    font-size: 24px;
  }
  
  .total {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SpeedDisplay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 25px;
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.5);
  color: white;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  .label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    display: block;
    margin-bottom: 5px;
  }
  
  .speed {
    color: #ffd700;
    font-size: 28px;
    text-shadow: 0 0 10px #ffd700;
  }
  
  .unit {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-left: 5px;
  }
`;

const RaceTrack = ({ 
  players = [],
  currentLap = 1,
  totalLaps = 3,
  playerPositions = {},
  speed = 0,
  showPositionMarkers = false 
}) => {
  const playerColors = {
    yellow: '#ffd700',
    orange: '#ff8c00',
    red: '#ff3838',
    pink: '#ff69b4',
    purple: '#9b59b6',
    blue: '#00d4ff',
    green: '#00ff88',
    black: '#2c3e50'
  };

  // Calculate position on track (96 positions in a circuit)
  const getPositionCoordinates = (position) => {
    const totalPositions = 96;
    const angle = (position / totalPositions) * 2 * Math.PI;
    const centerX = 600;
    const centerY = 300;
    const radiusX = 450;
    const radiusY = 200;
    
    return {
      x: centerX + radiusX * Math.cos(angle - Math.PI / 2),
      y: centerY + radiusY * Math.sin(angle - Math.PI / 2)
    };
  };

  const getPlayerInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <TrackContainer>
      <TrackSVG viewBox="0 0 1200 600">
        <defs>
          <linearGradient id="startFinishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="25%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ff0000" />
            <stop offset="75%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ff0000" />
          </linearGradient>
        </defs>
        
        {/* Track outer boundary */}
        <TrackPath d="M 150 300 
                      Q 150 100, 350 100
                      L 850 100
                      Q 1050 100, 1050 300
                      Q 1050 500, 850 500
                      L 350 500
                      Q 150 500, 150 300 Z" />
        
        {/* Track center line */}
        <TrackCenter d="M 150 300 
                        Q 150 100, 350 100
                        L 850 100
                        Q 1050 100, 1050 300
                        Q 1050 500, 850 500
                        L 350 500
                        Q 150 500, 150 300 Z" />
        
        {/* Lane dividers */}
        <TrackLines d="M 150 300 
                       Q 150 120, 350 120
                       L 850 120
                       Q 1030 120, 1030 300
                       Q 1030 480, 850 480
                       L 350 480
                       Q 150 480, 150 300 Z" />
        
        {/* Start/Finish line */}
        <StartFinishLine x="580" y="80" width="40" height="40" />
        
        {/* Pit stop areas */}
        <PitStopArea x="200" y="450" width="100" height="30" />
        <PitStopArea x="900" y="450" width="100" height="30" />
        
        {/* Position markers */}
        {showPositionMarkers && Array.from({ length: 24 }, (_, i) => {
          const position = i * 4; // Every 4th position
          const coords = getPositionCoordinates(position);
          return (
            <circle
              key={i}
              cx={coords.x}
              cy={coords.y}
              r="8"
              fill="rgba(255, 255, 255, 0.1)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
          );
        })}
      </TrackSVG>

      {/* Player pawns */}
      {players.map((player) => {
        const position = playerPositions[player.id] || 0;
        const coords = getPositionCoordinates(position);
        
        return (
          <PlayerPawn
            key={player.id}
            color={playerColors[player.color]}
            style={{
              left: `${coords.x - 16}px`,
              top: `${coords.y - 16}px`
            }}
          >
            {getPlayerInitials(player.name)}
          </PlayerPawn>
        );
      })}

      {/* Position markers for reference */}
      {showPositionMarkers && Array.from({ length: 24 }, (_, i) => {
        const position = i * 4;
        const coords = getPositionCoordinates(position);
        return (
          <PositionMarker
            key={i}
            style={{
              left: `${coords.x - 12}px`,
              top: `${coords.y - 12}px`
            }}
          >
            {position}
          </PositionMarker>
        );
      })}

      {/* Lap counter */}
      <LapCounter>
        <span className="label">LAP</span>
        <div>
          <span className="current">{currentLap}</span>
          <span className="total">/{totalLaps}</span>
        </div>
      </LapCounter>

      {/* Speed display */}
      <SpeedDisplay>
        <span className="label">SPEED</span>
        <div>
          <span className="speed">{speed}</span>
          <span className="unit">MPH</span>
        </div>
      </SpeedDisplay>
    </TrackContainer>
  );
};

export default RaceTrack;
