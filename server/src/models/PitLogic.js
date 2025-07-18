/**
 * Pit Logic Implementation
 * Handles all pit and pit-lane dice rules per GameDevGuide.md
 */

class PitLogic {
  /**
   * Determines valid dice options for a player based on their track position
   * @param {Object} trackPosition - Player's current track position
   * @param {Object} gameConfig - Game configuration (e.g., two-dice variant)
   * @param {Array} trackState - Current state of all positions on track
   * @returns {Object} - Available dice options and restrictions
   */
  static getValidDiceOptions(trackPosition, gameConfig, trackState) {
    const { inPit, inPitLane, pitLanePosition, lane } = trackPosition;
    
    if (inPit) {
      return {
        allowStandardDie: true,
        allowLaneChangeDie: false,
        allowTwoDice: false, // Must use single die from pit even in two-dice variant
        forceSingleDie: true,
        reason: 'Must roll one standard die to advance to pit-lane'
      };
    }
    
    if (inPitLane) {
      // Check if space directly to the right is obstructed
      const rightObstructed = this.isRightSpaceObstructed(trackPosition, trackState);
      
      if (rightObstructed) {
        return {
          allowStandardDie: true,
          allowLaneChangeDie: false,
          allowTwoDice: false,
          forceSingleDie: true,
          reason: 'Must use standard die - right space obstructed by pawn'
        };
      }
      
      return {
        allowStandardDie: true,
        allowLaneChangeDie: true,
        allowTwoDice: false,
        forceSingleDie: false,
        reason: 'Can choose standard die or lane-change die'
      };
    }
    
    // Normal track rules
    return {
      allowStandardDie: true,
      allowLaneChangeDie: true,
      allowTwoDice: gameConfig.twoDiceVariant || false,
      forceSingleDie: false,
      reason: 'Normal track movement options'
    };
  }
  
  /**
   * Checks if the space directly to the right of a pit-lane position is obstructed
   * @param {Object} trackPosition - Current track position in pit-lane
   * @param {Array} trackState - Current state of all positions on track
   * @returns {boolean} - True if right space is obstructed by a pawn
   */
  static isRightSpaceObstructed(trackPosition, trackState) {
    if (!trackPosition.inPitLane) return false;
    
    // Pit-lane position 1 is adjacent to main track Lane 1 position 1
    const mainTrackPosition = trackPosition.pitLanePosition;
    const mainTrackLane = 1; // Adjacent to lane 1
    
    // Check if there's a pawn at the corresponding main track position
    return trackState.some(playerState => 
      !playerState.inPit && 
      !playerState.inPitLane &&
      playerState.position === mainTrackPosition && 
      playerState.lane === mainTrackLane
    );
  }
  
  /**
   * Processes movement from pit using standard die
   * @param {number} dieRoll - Result of standard die roll (1-6)
   * @param {Object} currentPosition - Current track position
   * @returns {Object} - New position after movement
   */
  static processPitMovement(dieRoll, currentPosition) {
    if (!currentPosition.inPit) {
      throw new Error('Player not in pit');
    }
    
    // From pit, advance to pit-lane
    return {
      ...currentPosition,
      inPit: false,
      inPitLane: true,
      pitLanePosition: Math.min(dieRoll, 5), // 5 spaces max in pit-lane
      position: dieRoll, // Corresponds to main track position
      lane: 0 // Pit-lane is considered lane 0
    };
  }
  
  /**
   * Processes movement from pit-lane using standard die
   * @param {number} dieRoll - Result of standard die roll (1-6)
   * @param {Object} currentPosition - Current track position
   * @returns {Object} - New position after movement
   */
  static processPitLaneStandardMovement(dieRoll, currentPosition) {
    if (!currentPosition.inPitLane) {
      throw new Error('Player not in pit-lane');
    }
    
    const newPitLanePosition = currentPosition.pitLanePosition + dieRoll;
    
    // Check if hitting pit-lane wall (exceed 5 spaces)
    if (newPitLanePosition > 5) {
      return {
        ...currentPosition,
        inPit: true,
        inPitLane: false,
        pitLanePosition: 0,
        position: 0,
        lane: 0,
        crashedIntoPitWall: true
      };
    }
    
    return {
      ...currentPosition,
      pitLanePosition: newPitLanePosition,
      position: newPitLanePosition // Corresponds to main track position
    };
  }
  
  /**
   * Processes lane-change die roll from pit-lane
   * @param {string} dieResult - Lane-change die result (L1, R1, R2, L2, CheckEngine)
   * @param {Object} currentPosition - Current track position
   * @param {Array} trackState - Current state of all positions on track
   * @returns {Object} - New position after movement or turn end
   */
  static processPitLaneLaneChangeMovement(dieResult, currentPosition, trackState) {
    if (!currentPosition.inPitLane) {
      throw new Error('Player not in pit-lane');
    }
    
    // Only R1 and R2 allow merging onto main track
    if (dieResult === 'R1' || dieResult === 'R2') {
      const targetLane = dieResult === 'R1' ? 1 : Math.min(2, 1 + 2); // R2 can move up to 2 lanes
      const targetPosition = currentPosition.pitLanePosition;
      
      // Check for obstruction on main track
      const isObstructed = trackState.some(playerState =>
        !playerState.inPit && 
        !playerState.inPitLane &&
        playerState.position === targetPosition && 
        playerState.lane === targetLane
      );
      
      if (isObstructed) {
        // Can't merge, find last available lane
        let availableLane = 0;
        for (let lane = 1; lane <= targetLane; lane++) {
          const laneObstructed = trackState.some(playerState =>
            !playerState.inPit && 
            !playerState.inPitLane &&
            playerState.position === targetPosition && 
            playerState.lane === lane
          );
          if (!laneObstructed) {
            availableLane = lane;
            break;
          }
        }
        
        if (availableLane === 0) {
          // No available lanes, turn ends
          return {
            ...currentPosition,
            turnEnded: true,
            reason: 'Cannot merge - all lanes obstructed'
          };
        }
        
        // Merge to available lane
        return {
          ...currentPosition,
          inPitLane: false,
          lane: availableLane,
          pitLanePosition: 0,
          mergedToMainTrack: true
        };
      }
      
      // Successful merge to target lane
      return {
        ...currentPosition,
        inPitLane: false,
        lane: targetLane,
        pitLanePosition: 0,
        mergedToMainTrack: true
      };
    }
    
    // All other results (L1, L2, CheckEngine) end turn
    return {
      ...currentPosition,
      turnEnded: true,
      reason: `Lane-change die result ${dieResult} ends turn in pit-lane`
    };
  }
  
  /**
   * Handles tow-to-pit coin effect
   * @param {Object} currentPosition - Current track position
   * @returns {Object} - New position in pit
   */
  static towToPit(currentPosition) {
    return {
      ...currentPosition,
      inPit: true,
      inPitLane: false,
      pitLanePosition: 0,
      position: 0,
      lane: 0,
      towedToPit: true,
      lap: currentPosition.lap // No lap credit when towed to pit
    };
  }
  
  /**
   * Checks if a roll from pit would result in hitting pit-lane wall
   * @param {number} dieRoll - Result of die roll
   * @param {Object} currentPosition - Current position in pit
   * @returns {boolean} - True if would hit wall (roll of 6 from pit)
   */
  static wouldHitPitLaneWall(dieRoll, currentPosition) {
    if (!currentPosition.inPit) return false;
    return dieRoll === 6;
  }
  
  /**
   * Gets pit status description for UI display
   * @param {Object} trackPosition - Player's track position
   * @returns {string} - Human-readable status
   */
  static getPitStatusDescription(trackPosition) {
    if (trackPosition.inPit) {
      return 'In Pit - Must roll standard die to advance to pit-lane';
    }
    
    if (trackPosition.inPitLane) {
      return `Pit-Lane Position ${trackPosition.pitLanePosition} - Choose standard die or lane-change die`;
    }
    
    return 'On Main Track';
  }
}

module.exports = PitLogic;
