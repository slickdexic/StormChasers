import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Track from './track/Track';
import useTrackData from '../hooks/useTrackData';

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

const PlayerPawnGroup = styled.g`
  transition: transform 0.5s ease-in-out;
  ${props => props.isRacing && css`
    animation: ${raceAnimation} 1s ease-in-out infinite;
  `}
`;

const PlayerPawnCircle = styled.circle`
  stroke-width: 0.2;
  stroke: #fff;
  transition: all 0.3s ease;
  paint-order: stroke;
  stroke-linejoin: round;
  ${props => props.isCurrentPlayer && css`
    stroke: #ffc107;
    stroke-width: 0.3;
  `}
`;

const PlayerPawnText = styled.text`
  font-size: 0.6px;
  fill: #fff;
  font-weight: bold;
  text-anchor: middle;
  dominant-baseline: central;
  pointer-events: none;
`;

const CoinMarkerGroup = styled.g`
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2);
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
  players, 
  trackPositions, 
  placedCoins, 
  activePlayerId, 
  stage, 
  onLaneSelect,
  onCoinPlacement,
  focusOnPolePosition = false,
  showControls = true,
  showInfo = true,
  showPositionNumbers = false
}) => {
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [animating, setAnimating] = useState(false);
  
  const containerRef = useRef();
  const { lanes, pitLane, pitStops, loading, error } = useTrackData();

  const playerColors = {
    red: '#e74c3c',
    blue: '#3498db',
    green: '#2ecc71',
    yellow: '#f1c40f',
    purple: '#9b59b6',
    orange: '#e67e22',
    black: '#2c3e50'
  };

  const getPositionCoordinates = useCallback((position, lane) => {
    if (loading || error) return { x: 0, y: 0 };

    const targetLane = lanes[lane] || [];
    const spot = targetLane.find(s => s.id === String(position));
    return spot ? { x: spot.x, y: spot.y } : { x: 0, y: 0 };
  }, [lanes, loading, error]);

  const getPitCoordinates = useCallback((positionId) => {
    if (loading || error) return { x: 0, y: 0 };
    
    const spot = pitStops.find(s => s.id === positionId);
    return spot ? { x: spot.x, y: spot.y } : { x: 0, y: 0 };
  }, [pitStops, loading, error]);


  // Focus on pole position (position 96) for lane selection
  useEffect(() => {
    if (stage === 'lane-selection' && focusOnPolePosition && !loading) {
      const polePositionCoords = getPositionCoordinates(96, 1);
      if (polePositionCoords.x === 0 && polePositionCoords.y === 0) return;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      
      setAnimating(true);
      setZoom(2.5);
      setPanX(-polePositionCoords.x * 2.5 + containerWidth / 2);
      setPanY(-polePositionCoords.y * 2.5 + containerHeight / 2);
      setTimeout(() => setAnimating(false), 1000);
    }
  }, [focusOnPolePosition, stage, getPositionCoordinates, loading]);

  // Pan and zoom handlers
  const handleMouseDown = (e) => {
    if (!panEnabled) return;
    setIsPanning(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isPanning || !panEnabled) return;
    
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
    if (!panEnabled) return;
    e.preventDefault();
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    setZoom(prevZoom => {
      const newZoom = Math.max(0.5, Math.min(prevZoom - e.deltaY * 0.001, 5));
      setPanX(prevPanX => {
        const worldX = (mouseX - prevPanX) / prevZoom;
        return mouseX - worldX * newZoom;
      });
      setPanY(prevPanY => {
        const worldY = (mouseY - prevPanY) / prevZoom;
        return mouseY - worldY * newZoom;
      });
      return newZoom;
    });
  };

  const handleResetView = () => {
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

  const handleSpotClick = (spot) => {
    if (stage === 'lane-selection' && onLaneSelect) {
      // For lane selection, we care about the starting spots (96)
      if (spot.id === '96') {
        onLaneSelect(spot.lane);
      }
    }
    if (stage === 'coin-placement' && onCoinPlacement) {
      onCoinPlacement({ position: spot.id, lane: spot.lane });
    }
  };

  const panEnabled = stage !== 'lane-selection';

  return (
    <TrackContainer
      ref={containerRef}
      panEnabled={panEnabled}
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
        <svg viewBox="-20 -20 40 40" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <Track showNumbers={showPositionNumbers} />
          {/* Clickable spots for interaction */}
          {!loading && stage === 'lane-selection' && Object.values(lanes).map(lane => {
            const startSpot = lane.find(s => s.id === '96');
            if (!startSpot) return null;
            const isSelectable = trackPositions && !Object.values(trackPositions).some(p => p.lane === startSpot.lane);
            
            return (
              <circle
                key={`selectable-${startSpot.lane}`}
                cx={startSpot.x}
                cy={startSpot.y}
                r="0.8"
                fill={isSelectable ? "rgba(0, 255, 128, 0.5)" : "rgba(255, 0, 0, 0.3)"}
                stroke={isSelectable ? "rgba(0, 255, 128, 1)" : "rgba(255, 0, 0, 0.6)"}
                strokeWidth="0.1"
                onClick={() => isSelectable && handleSpotClick(startSpot)}
                style={{ cursor: isSelectable ? 'pointer' : 'not-allowed' }}
              />
            );
          })}

          {!loading && stage === 'coin-placement' && Object.values(lanes).flat().map(spot => (
            <circle
              key={`coin-spot-${spot.lane}-${spot.id}`}
              cx={spot.x}
              cy={spot.y}
              r="0.4"
              fill="rgba(255, 255, 0, 0.2)"
              stroke="rgba(255, 255, 0, 0.5)"
              strokeWidth="0.05"
              onClick={() => handleSpotClick(spot)}
              style={{ cursor: 'pointer' }}
            />
          ))}

          {/* Placed coins */}
          {placedCoins && Object.entries(placedCoins).map(([positionKey, coin]) => {
            const [position, lane] = positionKey.split('-').map(Number);
            const coords = getPositionCoordinates(position, lane);
            
            return (
              <CoinMarkerGroup
                key={positionKey}
                transform={`translate(${coords.x}, ${coords.y})`}
              >
                <title>{`Coin placed by ${players.find(p => p.id === coin.placedBy)?.name || 'Unknown'}`}</title>
                <circle r="0.5" fill={playerColors[coin.placedBy] || '#fff'} opacity="0.8" />
                <text
                  fontSize="0.5"
                  fill="#000"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {coin.placedBy === activePlayerId ? coin.value.charAt(0) : '?'}
                </text>
              </CoinMarkerGroup>
            );
          })}

          {/* Player pawns */}
          {trackPositions && players.map(player => {
            const position = trackPositions[player.id];
            if (!position) return null;
            
            let coords;
            if (position.inPit) {
              coords = getPitCoordinates(position.position);
            } else {
              coords = getPositionCoordinates(position.position || 96, position.lane || 1);
            }
            
            return (
              <PlayerPawnGroup
                key={player.id}
                transform={`translate(${coords.x}, ${coords.y})`}
                isRacing={position.isRacing}
              >
                <title>{`${player.name} - Lap ${position.lap || 0}`}</title>
                <PlayerPawnCircle
                  r="0.7"
                  fill={playerColors[player.id]}
                  isCurrentPlayer={player.id === activePlayerId}
                />
                <PlayerPawnText>
                  {getPlayerInitials(player.name)}
                </PlayerPawnText>
              </PlayerPawnGroup>
            );
          })}
        </svg>
      </TrackViewport>

      {/* Track controls */}
      {showControls && (
        <TrackControls>
          <ControlButton onClick={() => handleZoom(0.2)} disabled={!panEnabled}>+</ControlButton>
          <ControlButton onClick={() => handleZoom(-0.2)} disabled={!panEnabled}>-</ControlButton>
          <ControlButton onClick={handleResetView} disabled={!panEnabled}>Reset</ControlButton>
        </TrackControls>
      )}

      {/* Info panel */}
      {showInfo && (
        <InfoPanel>
          <div className="info">Zoom: {zoom.toFixed(2)}x</div>
          <div className="info">Stage: {stage}</div>
          {loading && <div className="info">Loading Track...</div>}
          {error && <div className="info" style={{color: 'red'}}>{error}</div>}
        </InfoPanel>
      )}
    </TrackContainer>
  );
};

export default RaceTrack;
