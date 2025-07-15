import React from 'react';
import styled from 'styled-components';
import TrackPath from './TrackPath';
import PitLane from './PitLane';
import StartFinishLine from './StartFinishLine';
import Spots from './Spots';
import useTrackData from '../../hooks/useTrackData';

const TrackSVG = styled.svg`
  background-color: #333;
  border-radius: 15px;
`;

const LoadingText = styled.text`
  fill: #fff;
  font-size: 1px;
  text-anchor: middle;
`;

const Track = () => {
  const { lanes, pitLane, pitStops, loading, error } = useTrackData();

  if (loading) {
    return (
      <TrackSVG viewBox="-20 -20 40 40">
        <LoadingText>Loading Track...</LoadingText>
      </TrackSVG>
    );
  }

  if (error) {
    return (
      <TrackSVG viewBox="-20 -20 40 40">
        <LoadingText>{error}</LoadingText>
      </TrackSVG>
    );
  }

  return (
    <TrackSVG viewBox="-20 -20 40 40">
      <TrackPath lanes={lanes} />
      <PitLane pitLane={pitLane} pitStops={pitStops} />
      <StartFinishLine lanes={lanes} />
      <Spots lanes={lanes} pitLane={pitLane} pitStops={pitStops} />
    </TrackSVG>
  );
};

export default Track;
