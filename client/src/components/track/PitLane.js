import React from 'react';
import * as d3 from 'd3';

const PitLane = ({ pitLane, pitStops }) => {
  const lineGenerator = d3.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(d3.curveLinear);

  return (
    <g>
      <path
        d={lineGenerator(pitLane)}
        fill="none"
        stroke="#777"
        strokeWidth="0.5"
      />
      {pitStops.map(spot => (
        <rect
          key={spot.id}
          x={spot.x - 0.4}
          y={spot.y - 0.4}
          width="0.8"
          height="0.8"
          fill="#444"
          stroke="#888"
          strokeWidth="0.1"
        />
      ))}
      {/* Hazard Wall */}
      {pitLane.length > 0 && (
         <line
            x1={pitLane[pitLane.length - 1].x}
            y1={pitLane[pitLane.length - 1].y - 0.5}
            x2={pitLane[pitLane.length - 1].x}
            y2={pitLane[pitLane.length - 1].y + 0.5}
            stroke="#ffcc00"
            strokeWidth="0.2"
            strokeDasharray="0.2, 0.1"
         />
      )}
    </g>
  );
};

export default PitLane;
