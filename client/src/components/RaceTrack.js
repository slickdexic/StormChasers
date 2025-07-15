import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';

const raceAnimation = keyframes`
  0% { transform: translateX(-2px) translateY(-1px); }
  50% { transform: translateX(2px) translateY(1px); }
  100% { transform: translateX(-2px) translateY(-1px); }
`;

const pitStopGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.2); }
`;

const polePositionGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6),
               0 0 30px rgba(255, 215, 0, 0.3),
               inset 0 0 10px rgba(255, 215, 0, 0.2);
  }
  50% { 
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.8),
               0 0 50px rgba(255, 215, 0, 0.5),
               inset 0 0 15px rgba(255, 215, 0, 0.4);
  }
`;

const TrackContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  background: 
    radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 56, 56, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #1e2139 100%);
  border-radius: 20px;
  border: 3px solid rgba(0, 212, 255, 0.4);
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  cursor: ${props => props.panEnabled ? 'grab' : 'default'};
  
  &:active {
    cursor: ${props => props.panEnabled ? 'grabbing' : 'default'};
  }
`;

const TrackViewport = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: center center;
  transition: ${props => props.animating ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'};
  transform: ${props => `translate(${props.panX}px, ${props.panY}px) scale(${props.zoom})`};
`;

const TrackSVG = styled.svg`
  width: 1000px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
`;

const TrackBase = styled.ellipse`
  fill: #1a1a2e;
  stroke: rgba(0, 212, 255, 0.2);
  stroke-width: 2;
`;

const TrackSurface = styled.ellipse`
  fill: none;
  stroke: #2a2a3e;
  stroke-width: ${props => props.width || 80};
`;

const LaneMarker = styled.ellipse`
  fill: none;
  stroke: rgba(255, 255, 255, 0.15);
  stroke-width: 1;
  stroke-dasharray: 8, 8;
`;

const StartFinishLine = styled.rect`
  fill: url(#startFinishGradient);
  stroke: white;
  stroke-width: 1;
`;

const PitArea = styled.rect`
  fill: rgba(255, 165, 0, 0.15);
  stroke: #ffa500;
  stroke-width: 1;
  rx: 3;
  ${css`animation: ${pitStopGlow} 4s ease-in-out infinite;`}
`;

const PitLane = styled.rect`
  fill: rgba(255, 165, 0, 0.1);
  stroke: rgba(255, 165, 0, 0.5);
  stroke-width: 1;
  stroke-dasharray: 4, 4;
  rx: 2;
`;

const PositionSpot = styled.circle`
  fill: ${props => props.highlighted ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  stroke: ${props => props.highlighted ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'};
  stroke-width: ${props => props.highlighted ? 2 : 1};
  cursor: ${props => props.selectable ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  
  ${props => props.highlighted && css`
    animation: ${polePositionGlow} 2s ease-in-out infinite;
  `}
  
  &:hover {
    fill: ${props => props.selectable ? 'rgba(255, 215, 0, 0.5)' : props.highlighted ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
    stroke-width: ${props => props.selectable ? 3 : props.highlighted ? 2 : 1};
  }
`;

const PlayerPawn = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: linear-gradient(135deg, ${props => props.color || '#00d4ff'}, ${props => props.color || '#00d4ff'}cc);
  border: 2px solid white;
  box-shadow: 
    0 3px 8px rgba(0, 0, 0, 0.4),
    0 0 0 1px ${props => props.color || '#00d4ff'},
    0 0 15px ${props => props.color || '#00d4ff'}60;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: bold;
  font-size: 11px;
  color: ${props => {
    const lightColors = ['#ffd700', '#ff8c00', '#ff69b4'];
    return lightColors.includes(props.color) ? '#000' : '#fff';
  }};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  transform-origin: center center;
  
  ${props => props.isMoving && css`
    animation: ${raceAnimation} 0.4s ease-in-out;
  `}
  
  ${props => props.isActive && css`
    transform: scale(1.2);
    box-shadow: 
      0 5px 15px rgba(0, 0, 0, 0.5),
      0 0 0 2px ${props.color || '#00d4ff'},
      0 0 25px ${props.color || '#00d4ff'}80;
  `}
`;

const CoinMarker = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.faceUp ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : 'linear-gradient(135deg, #8b4513, #a0522d)'};
  border: 1px solid ${props => props.faceUp ? '#e6c200' : '#654321'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 8px;
  color: ${props => props.faceUp ? '#8b4513' : '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 50;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  }
`;

const TrackControls = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 200;
`;

const ControlButton = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(0, 212, 255, 0.5);
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: rgba(0, 212, 255, 0.2);
    border-color: rgba(0, 212, 255, 0.8);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InfoPanel = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.9);
  border: 2px solid rgba(0, 212, 255, 0.5);
  border-radius: 15px;
  padding: 15px 20px;
  color: white;
  font-family: 'Orbitron', monospace;
  z-index: 200;
  
  .title {
    font-size: 14px;
    font-weight: bold;
    color: #00d4ff;
    margin-bottom: 8px;
  }
  
  .info {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 4px;
  }
`;

const RaceTrack = ({ 
  players = [],
  currentLap = 1,
  totalLaps = 3,
  playerPositions = {},
  placedCoins = {},
  activePlayerId = null,
  stage = 'racing', // 'lane-selection', 'coin', 'racing'
  onLaneSelect = null,
  onCoinPlace = null,
  panZoomEnabled = true,
  focusOnPolePosition = false,
  showPositionNumbers = false
}) => {
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [animating, setAnimating] = useState(false);
  
  const containerRef = useRef();
  
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

  // Track layout based on GameDevGuide specifications
  const getPositionCoordinates = useCallback((position, lane = 1) => {
    // Track center
    const centerX = 500;
    const centerY = 400;
    
    // Lane radii based on GameDevGuide
    const laneRadii = {
      1: 200, // Inside lane
      2: 220, // Lane 2  
      3: 240, // Lane 3
      4: 260  // Outside lane
    };
    
    // Convert position (1-96) to angle
    const positionAngle = ((position - 1) / 96) * 2 * Math.PI;
    
    // Adjust for counterclockwise racing direction
    const angle = -positionAngle + Math.PI / 2;
    
    const radius = laneRadii[lane] || laneRadii[1];
    const radiusX = radius;
    const radiusY = radius * 0.6; // Oval shape
    
    return {
      x: centerX + radiusX * Math.cos(angle),
      y: centerY + radiusY * Math.sin(angle)
    };
  }, []);

  // Get coordinates for pit and pit-lane positions
  const getPitCoordinates = (position, inPitLane = false) => {
    if (inPitLane) {
      // Pit-lane positions 1-5
      return {
        x: 750 + (position - 1) * 8,
        y: 380 + position * 15
      };
    } else {
      // Pit positions 1-4
      return {
        x: 700,
        y: 380 + position * 20
      };
    }
  };

  // Focus on pole position (position 96) for lane selection
  useEffect(() => {
    if (focusOnPolePosition && stage === 'lane-selection') {
      const poleCoords = getPositionCoordinates(96, 1);
      const containerRect = containerRef.current?.getBoundingClientRect();
      
      if (containerRect) {
        setAnimating(true);
        setPanX(containerRect.width / 2 - poleCoords.x);
        setPanY(containerRect.height / 2 - poleCoords.y);
        setZoom(2);
        
        setTimeout(() => setAnimating(false), 1000);
      }
    } else if (!focusOnPolePosition) {
      // Reset view
      setAnimating(true);
      setPanX(0);
      setPanY(0);
      setZoom(1);
      
      setTimeout(() => setAnimating(false), 1000);
    }
  }, [focusOnPolePosition, stage, getPositionCoordinates]);

  // Pan and zoom handlers
  const handleMouseDown = (e) => {
    if (!panZoomEnabled) return;
    setIsPanning(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isPanning || !panZoomEnabled) return;
    
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;
    
    setPanX(prev => prev + deltaX);
    setPanY(prev => prev + deltaY);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleWheel = (e) => {
    if (!panZoomEnabled) return;
    e.preventDefault();
    
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom(prev => Math.max(0.5, Math.min(3, prev * zoomFactor)));
  };

  const resetView = () => {
    setAnimating(true);
    setPanX(0);
    setPanY(0);
    setZoom(1);
    setTimeout(() => setAnimating(false), 500);
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
    <TrackContainer
      ref={containerRef}
      panEnabled={panZoomEnabled}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <TrackViewport 
        panX={panX} 
        panY={panY} 
        zoom={zoom}
        animating={animating}
      >
        <TrackSVG viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="startFinishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0000" />
              <stop offset="20%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#ff0000" />
              <stop offset="60%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#ff0000" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Track base */}
          <TrackBase cx="500" cy="400" rx="280" ry="170" />
          
          {/* Track surface - 4 lanes */}
          <TrackSurface cx="500" cy="400" rx="200" ry="120" width="20" />
          <TrackSurface cx="500" cy="400" rx="220" ry="132" width="20" />
          <TrackSurface cx="500" cy="400" rx="240" ry="144" width="20" />
          <TrackSurface cx="500" cy="400" rx="260" ry="156" width="20" />
          
          {/* Lane markers */}
          <LaneMarker cx="500" cy="400" rx="210" ry="126" />
          <LaneMarker cx="500" cy="400" rx="230" ry="138" />
          <LaneMarker cx="500" cy="400" rx="250" ry="150" />
          
          {/* Start/Finish line at position 96/1 */}
          <StartFinishLine 
            x={getPositionCoordinates(96, 1).x - 2} 
            y={getPositionCoordinates(96, 1).y - 30}
            width="4" 
            height="60" 
          />
          
          {/* Pit areas */}
          <PitArea x="680" y="350" width="60" height="100" />
          
          {/* Pit-lane */}
          <PitLane x="750" y="380" width="40" height="120" />
          
          {/* Interactive track areas for coin placement */}
          {stage === 'coin' && Array.from({ length: 24 }, (_, i) => {
            const position = i * 4 + 1; // Every 4th position
            return [1, 2, 3, 4].map(lane => {
              const coords = getPositionCoordinates(position, lane);
              return (
                <circle
                  key={`clickable-${position}-${lane}`}
                  cx={coords.x}
                  cy={coords.y}
                  r="20"
                  fill="transparent"
                  stroke="rgba(255, 215, 0, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="3, 3"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onCoinPlace && onCoinPlace(position, lane)}
                  onMouseEnter={(e) => {
                    e.target.setAttribute('stroke', 'rgba(255, 215, 0, 0.8)');
                    e.target.setAttribute('fill', 'rgba(255, 215, 0, 0.1)');
                  }}
                  onMouseLeave={(e) => {
                    e.target.setAttribute('stroke', 'rgba(255, 215, 0, 0.2)');
                    e.target.setAttribute('fill', 'transparent');
                  }}
                />
              );
            });
          })}
          
          {/* Position spots for lane selection */}
          {stage === 'lane-selection' && [1, 2, 3, 4].map(lane => {
            const coords = getPositionCoordinates(96, lane);
            return (
              <PositionSpot
                key={`lane-${lane}`}
                cx={coords.x}
                cy={coords.y}
                r="12"
                highlighted={true}
                selectable={true}
                onClick={() => onLaneSelect && onLaneSelect(lane)}
              />
            );
          })}
          
          {/* Position markers */}
          {showPositionNumbers && Array.from({ length: 24 }, (_, i) => {
            const position = i * 4 + 1; // Every 4th position starting from 1
            const coords = getPositionCoordinates(position, 1);
            return (
              <g key={`pos-${position}`}>
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r="8"
                  fill="rgba(255, 255, 255, 0.1)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                />
                <text
                  x={coords.x}
                  y={coords.y + 2}
                  textAnchor="middle"
                  fontSize="8"
                  fill="rgba(255, 255, 255, 0.7)"
                  fontFamily="Rajdhani, sans-serif"
                  fontWeight="bold"
                >
                  {position}
                </text>
              </g>
            );
          })}
        </TrackSVG>

        {/* Placed coins */}
        {Object.entries(placedCoins).map(([positionKey, coin]) => {
          const [position, lane] = positionKey.split('-').map(Number);
          const coords = getPositionCoordinates(position, lane);
          
          return (
            <CoinMarker
              key={positionKey}
              faceUp={coin.placedBy === activePlayerId}
              style={{
                left: `${coords.x - 8}px`,
                top: `${coords.y - 8}px`
              }}
              title={coin.placedBy === activePlayerId ? coin.value : 'Hidden coin'}
            >
              {coin.placedBy === activePlayerId ? coin.value.charAt(0) : '?'}
            </CoinMarker>
          );
        })}

        {/* Player pawns */}
        {players.map((player) => {
          const position = playerPositions[player.id];
          if (!position) return null;
          
          let coords;
          if (position.inPit) {
            coords = getPitCoordinates(position.position || 1, false);
          } else if (position.inPitLane) {
            coords = getPitCoordinates(position.position || 1, true);
          } else {
            coords = getPositionCoordinates(position.position || 96, position.lane || 1);
          }
          
          return (
            <PlayerPawn
              key={player.id}
              color={playerColors[player.color]}
              isActive={player.id === activePlayerId}
              style={{
                left: `${coords.x - 14}px`,
                top: `${coords.y - 14}px`
              }}
              title={`${player.name} - Lap ${position.lap || 0}`}
            >
              {getPlayerInitials(player.name)}
            </PlayerPawn>
          );
        })}
      </TrackViewport>

      {/* Track controls */}
      {panZoomEnabled && (
        <TrackControls>
          <ControlButton onClick={resetView}>
            Reset View
          </ControlButton>
          <ControlButton onClick={() => setZoom(prev => Math.min(3, prev * 1.2))}>
            Zoom In
          </ControlButton>
          <ControlButton onClick={() => setZoom(prev => Math.max(0.5, prev * 0.8))}>
            Zoom Out
          </ControlButton>
        </TrackControls>
      )}

      {/* Info panel */}
      <InfoPanel>
        <div className="title">
          {stage === 'lane-selection' && 'Lane Selection'}
          {stage === 'coin' && 'Coin Placement'}
          {stage === 'racing' && `Lap ${currentLap}/${totalLaps}`}
        </div>
        {stage === 'lane-selection' && (
          <div className="info">Select your starting lane</div>
        )}
        {stage === 'coin' && (
          <div className="info">Place coins strategically</div>
        )}
        {stage === 'racing' && (
          <>
            <div className="info">Players: {players.length}</div>
            <div className="info">Active: {players.find(p => p.id === activePlayerId)?.name || 'None'}</div>
          </>
        )}
      </InfoPanel>
    </TrackContainer>
  );
};

export default RaceTrack;
