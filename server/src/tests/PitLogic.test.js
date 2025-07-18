const assert = require('assert');
const PitLogic = require('../models/PitLogic');

describe('PitLogic', () => {
  describe('getValidDiceOptions', () => {
    it('should force single standard die from pit', () => {
      const trackPosition = { inPit: true, inPitLane: false };
      const gameConfig = { twoDiceVariant: true };
      const trackState = [];
      
      const result = PitLogic.getValidDiceOptions(trackPosition, gameConfig, trackState);
      
      assert.strictEqual(result.allowStandardDie, true);
      assert.strictEqual(result.allowLaneChangeDie, false);
      assert.strictEqual(result.allowTwoDice, false);
      assert.strictEqual(result.forceSingleDie, true);
    });

    it('should allow both dice types in pit-lane when right space is clear', () => {
      const trackPosition = { inPit: false, inPitLane: true, pitLanePosition: 3 };
      const gameConfig = { twoDiceVariant: false };
      const trackState = []; // No obstructions
      
      const result = PitLogic.getValidDiceOptions(trackPosition, gameConfig, trackState);
      
      assert.strictEqual(result.allowStandardDie, true);
      assert.strictEqual(result.allowLaneChangeDie, true);
      assert.strictEqual(result.allowTwoDice, false);
      assert.strictEqual(result.forceSingleDie, false);
    });

    it('should force standard die in pit-lane when right space is obstructed', () => {
      const trackPosition = { inPit: false, inPitLane: true, pitLanePosition: 3 };
      const gameConfig = { twoDiceVariant: false };
      const trackState = [
        { inPit: false, inPitLane: false, position: 3, lane: 1 } // Obstruction
      ];
      
      const result = PitLogic.getValidDiceOptions(trackPosition, gameConfig, trackState);
      
      assert.strictEqual(result.allowStandardDie, true);
      assert.strictEqual(result.allowLaneChangeDie, false);
      assert.strictEqual(result.forceSingleDie, true);
    });
  });

  describe('processPitMovement', () => {
    it('should move from pit to pit-lane', () => {
      const currentPosition = { inPit: true, inPitLane: false };
      const dieRoll = 3;
      
      const result = PitLogic.processPitMovement(dieRoll, currentPosition);
      
      assert.strictEqual(result.inPit, false);
      assert.strictEqual(result.inPitLane, true);
      assert.strictEqual(result.pitLanePosition, 3);
      assert.strictEqual(result.position, 3);
      assert.strictEqual(result.lane, 0);
    });

    it('should limit pit-lane position to maximum 5', () => {
      const currentPosition = { inPit: true, inPitLane: false };
      const dieRoll = 6;
      
      const result = PitLogic.processPitMovement(dieRoll, currentPosition);
      
      assert.strictEqual(result.pitLanePosition, 5);
    });
  });

  describe('processPitLaneStandardMovement', () => {
    it('should advance within pit-lane safely', () => {
      const currentPosition = { inPit: false, inPitLane: true, pitLanePosition: 2 };
      const dieRoll = 2;
      
      const result = PitLogic.processPitLaneStandardMovement(dieRoll, currentPosition);
      
      assert.strictEqual(result.inPitLane, true);
      assert.strictEqual(result.pitLanePosition, 4);
      assert.strictEqual(result.crashedIntoPitWall, undefined);
    });

    it('should crash into pit-lane wall when exceeding 5 spaces', () => {
      const currentPosition = { inPit: false, inPitLane: true, pitLanePosition: 3 };
      const dieRoll = 4; // Would move to position 7, exceeds 5
      
      const result = PitLogic.processPitLaneStandardMovement(dieRoll, currentPosition);
      
      assert.strictEqual(result.inPit, true);
      assert.strictEqual(result.inPitLane, false);
      assert.strictEqual(result.crashedIntoPitWall, true);
    });
  });

  describe('processPitLaneLaneChangeMovement', () => {
    it('should merge to main track on R1 result when clear', () => {
      const currentPosition = { inPit: false, inPitLane: true, pitLanePosition: 3 };
      const dieResult = 'R1';
      const trackState = []; // No obstructions
      
      const result = PitLogic.processPitLaneLaneChangeMovement(dieResult, currentPosition, trackState);
      
      assert.strictEqual(result.inPitLane, false);
      assert.strictEqual(result.lane, 1);
      assert.strictEqual(result.mergedToMainTrack, true);
    });

    it('should end turn on L1 result', () => {
      const currentPosition = { inPit: false, inPitLane: true, pitLanePosition: 3 };
      const dieResult = 'L1';
      const trackState = [];
      
      const result = PitLogic.processPitLaneLaneChangeMovement(dieResult, currentPosition, trackState);
      
      assert.strictEqual(result.turnEnded, true);
      assert.strictEqual(result.inPitLane, true); // Still in pit-lane
    });

    it('should end turn on CheckEngine result', () => {
      const currentPosition = { inPit: false, inPitLane: true, pitLanePosition: 3 };
      const dieResult = 'CheckEngine';
      const trackState = [];
      
      const result = PitLogic.processPitLaneLaneChangeMovement(dieResult, currentPosition, trackState);
      
      assert.strictEqual(result.turnEnded, true);
    });
  });

  describe('towToPit', () => {
    it('should move player to pit and preserve lap count', () => {
      const currentPosition = { 
        inPit: false, 
        inPitLane: false, 
        position: 45, 
        lane: 2, 
        lap: 2 
      };
      
      const result = PitLogic.towToPit(currentPosition);
      
      assert.strictEqual(result.inPit, true);
      assert.strictEqual(result.inPitLane, false);
      assert.strictEqual(result.position, 0);
      assert.strictEqual(result.lane, 0);
      assert.strictEqual(result.lap, 2); // Lap preserved
      assert.strictEqual(result.towedToPit, true);
    });
  });

  describe('getPitStatusDescription', () => {
    it('should return correct description for pit', () => {
      const trackPosition = { inPit: true, inPitLane: false };
      const result = PitLogic.getPitStatusDescription(trackPosition);
      assert.strictEqual(result, 'In Pit - Must roll standard die to advance to pit-lane');
    });

    it('should return correct description for pit-lane', () => {
      const trackPosition = { inPit: false, inPitLane: true, pitLanePosition: 3 };
      const result = PitLogic.getPitStatusDescription(trackPosition);
      assert.strictEqual(result, 'Pit-Lane Position 3 - Choose standard die or lane-change die');
    });

    it('should return correct description for main track', () => {
      const trackPosition = { inPit: false, inPitLane: false };
      const result = PitLogic.getPitStatusDescription(trackPosition);
      assert.strictEqual(result, 'On Main Track');
    });
  });
});
