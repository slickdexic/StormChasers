import React from 'react';
import styled from 'styled-components';

const StartFinishLineContainer = styled.g`
  /* Start/Finish line specific styles */
`;

const Line = styled.line`
  stroke: white;
  stroke-width: 0.1;
`;

const Checkerboard = styled.rect`
  fill: url(#checkerboard);
`;

const StartFinishLine = ({ lanes }) => {
  if (!lanes['1'] || !lanes['4']) {
    return null;
  }

  const spot1_lane1 = lanes['1'].find(s => s.id === '1');
  const spot96_lane1 = lanes['1'].find(s => s.id === '96');
  const spot1_lane4 = lanes['4'].find(s => s.id === '1');
  const spot96_lane4 = lanes['4'].find(s => s.id === '96');

  if (!spot1_lane1 || !spot96_lane1 || !spot1_lane4 || !spot96_lane4) {
    return null;
  }

  const startX = (spot96_lane1.x + spot96_lane4.x) / 2;
  const startY = (spot96_lane1.y + spot96_lane4.y) / 2;
  const endX = (spot1_lane1.x + spot1_lane4.x) / 2;
  const endY = (spot1_lane1.y + spot1_lane4.y) / 2;

  return (
    <StartFinishLineContainer>
      <defs>
        <pattern id="checkerboard" patternUnits="userSpaceOnUse" width="0.4" height="0.4">
          <rect x="0" y="0" width="0.2" height="0.2" fill="white" />
          <rect x="0.2" y="0" width="0.2" height="0.2" fill="black" />
          <rect x="0" y="0.2" width="0.2" height="0.2" fill="black" />
          <rect x="0.2" y="0.2" width="0.2" height="0.2" fill="white" />
        </pattern>
      </defs>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="white"
        strokeWidth="0.2"
        strokeDasharray="0.4, 0.2"
      />
    </StartFinishLineContainer>
  );
};

export default StartFinishLine;
