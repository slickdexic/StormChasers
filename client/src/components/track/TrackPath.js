import React from 'react';
import * as d3 from 'd3';

const TrackPath = ({ lanes }) => {
  const lineGenerator = d3.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(d3.curveCatmullRomClosed);

  return (
    <g>
      {Object.values(lanes).map((lane, i) => (
        <path
          key={i}
          d={lineGenerator(lane)}
          fill="none"
          stroke="#555"
          strokeWidth="0.8"
          strokeDasharray={i === 0 ? "0.1, 0.1" : "none"}
        />
      ))}
    </g>
  );
};

export default TrackPath;
