import React from 'react';

const Spots = ({ lanes, pitLane, pitStops, showNumbers = false }) => {
  const allSpots = [
    ...Object.values(lanes).flat(),
    ...pitLane,
    ...pitStops
  ];

  return (
    <g>
      {allSpots.map(spot => (
        <circle
          key={`${spot.lane}-${spot.id}`}
          cx={spot.x}
          cy={spot.y}
          r="0.2"
          fill="#222"
        />
      ))}
      {showNumbers && Object.values(lanes).flat().map(spot => (
         <text
            key={`num-${spot.lane}-${spot.id}`}
            x={spot.x}
            y={spot.y}
            fontSize="0.3"
            fill="#666"
            textAnchor="middle"
            dy=".1em"
         >
            {spot.id}
         </text>
      ))}
    </g>
  );
};

export default Spots;
