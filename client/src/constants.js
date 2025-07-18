// Client-side constants

export const GAME_STAGES = {
  LOBBY: 'lobby',
  DEALER_SELECTION: 'dealer-selection',
  STORM: 'storm',
  BETTING: 'betting',
  GAMEPLAY: 'gameplay',
  LANE_SELECTION: 'lane-selection',
  COIN: 'coin',
  RACING: 'racing',
  RESULTS: 'results'
};

export const ACTIONS = {
  // Game control
  START_GAME: 'start-game',
  ADVANCE_STAGE: 'advance-stage',
  
  // Dealer selection
  SELECT_DEALER_CARD: 'select-dealer-card',
  
  // Storm/Card game
  PLAY_CARD: 'play-card',
  DRAW_CARD: 'draw-card',
  PASS_TURN: 'pass-turn',
  END_ROUND: 'end-round',
  
  // Betting
  PLACE_BET: 'place-bet',
  
  // Racing
  ROLL_DICE: 'roll-dice',
  CHOOSE_MOVEMENT: 'choose-movement',
  
  // Lane selection
  SELECT_LANE: 'select-lane',
  
  // Coin placement
  PLACE_COIN: 'place-coin',
  
  // Game end
  NEXT_ROUND: 'next-round',
  NEW_GAME: 'new-game',
  LEAVE_GAME: 'leave-game'
};

// Event Types - Socket Events
export const SOCKET_EVENTS = {
  // Connection events
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  
  // Lobby events
  JOIN_LOBBY: 'join-lobby',
  LOBBY_JOINED: 'lobby-joined',
  ROOM_LIST_UPDATED: 'room-list-updated',
  
  // Room management events
  CREATE_ROOM: 'create-room',
  ROOM_CREATED: 'room-created',
  JOIN_ROOM: 'join-room',
  ROOM_JOINED: 'room-joined',
  LEAVE_ROOM: 'leave-room',
  ROOM_UPDATED: 'room-updated',
  
  // Player events
  PLAYER_JOINED: 'player-joined',
  PLAYER_LEFT: 'player-left',
  PLAYER_UPDATED: 'player-updated',
  CHANGE_COLOR: 'change-color',
  
  // Chat events
  ROOM_CHAT: 'room-chat',
  PRIVATE_MESSAGE: 'private-message',
  CHAT_MESSAGE: 'chat-message',
  
  // Game control events
  UPDATE_SETTINGS: 'update-settings',
  START_GAME: 'start-game',
  GAME_STARTED: 'game-started',
  ADVANCE_STAGE: 'advance-stage',
  STAGE_ADVANCED: 'stage-advanced',
  
  // Dealer selection events
  SELECT_DEALER_CARD: 'select-dealer-card',
  DEALER_CARD_SELECTED: 'dealer-card-selected',
  DEALER_DETERMINED: 'dealer-determined',
  DEALER_SELECTION_TIE: 'dealer-selection-tie',
  
  // Storm stage events
  STORM_STARTED: 'storm-started',
  PLAY_CARD: 'play-card',
  CARD_PLAYED: 'card-played',
  DRAW_CARDS: 'draw-cards',
  CARDS_DRAWN: 'cards-drawn',
  STORM_STAGE_COMPLETE: 'storm-stage-complete',
  PLAYER_FINISHED_STORM: 'player-finished-storm',
  TURN_ADVANCED: 'turn-advanced',
  
  // Lane selection events
  SELECT_LANE: 'select-lane',
  LANE_SELECTED: 'lane-selected',
  LANE_SELECTION_COMPLETE: 'lane-selection-complete',
  
  // Coin stage events
  PLACE_COIN: 'place-coin',
  COIN_PLACED: 'coin-placed',
  COIN_STAGE_COMPLETE: 'coin-stage-complete',
  
  // Racing stage events
  ROLL_DICE: 'roll-dice',
  DICE_ROLLED: 'dice-rolled',
  CHOOSE_MOVEMENT: 'choose-movement',
  PLAYER_MOVED: 'player-moved',
  PLAYER_FINISHED_RACE: 'player-finished-race',
  RACE_ROUND_COMPLETE: 'race-round-complete',
  
  // Error events
  ERROR: 'error'
};

// Action Types - Redux Actions
export const ACTION_TYPES = {
  SET_SOCKET: 'SET_SOCKET',
  SET_CONNECTED: 'SET_CONNECTED',
  SET_PLAYER: 'SET_PLAYER',
  SET_CURRENT_VIEW: 'SET_CURRENT_VIEW',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_AVAILABLE_ROOMS: 'SET_AVAILABLE_ROOMS',
  SET_CURRENT_ROOM: 'SET_CURRENT_ROOM',
  PROCESS_ROOM_UPDATE: 'PROCESS_ROOM_UPDATE',
  ADD_MESSAGE: 'ADD_MESSAGE',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES',
  SET_GAME_STATE: 'SET_GAME_STATE',
  STORM_STAGE_COMPLETE: 'STORM_STAGE_COMPLETE',
  CLEAR_STORM_RESULTS: 'CLEAR_STORM_RESULTS',
  RESET_GAME: 'RESET_GAME',
  CLEAR_ANIMATIONS: 'CLEAR_ANIMATIONS'
};
