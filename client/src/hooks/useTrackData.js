import { useState, useEffect } from 'react';
import * as d3 from 'd3';

const useTrackData = () => {
  const [trackData, setTrackData] = useState({
    lanes: {},
    pitLane: [],
    pitStops: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const csvData = await d3.csv('/track/TrackCoordinates.csv');
        
        const lanes = {};
        const pitLane = [];
        const pitStops = [];

        csvData.forEach(d => {
          const spot = {
            id: d.Spot,
            lane: d.Lane,
            x: +d.X,
            y: +d.Y,
          };

          if (d.Lane === 'PL') {
            pitLane.push(spot);
          } else if (d.Lane === 'P') {
            pitStops.push(spot);
          } else {
            if (!lanes[d.Lane]) {
              lanes[d.Lane] = [];
            }
            lanes[d.Lane].push(spot);
          }
        });

        // Sort lane spots by Spot number
        for (const lane in lanes) {
          lanes[lane].sort((a, b) => {
            if (a.id === '96') return -1;
            if (b.id === '96') return 1;
            return parseInt(a.id) - parseInt(b.id);
          });
        }

        setTrackData({
          lanes,
          pitLane,
          pitStops,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error loading track data:", error);
        setTrackData({
          lanes: {},
          pitLane: [],
          pitStops: [],
          loading: false,
          error: 'Failed to load track data.',
        });
      }
    };

    fetchData();
  }, []);

  return trackData;
};

export default useTrackData;
