import React from 'react';
import { Howl } from 'howler';

const soundManifest = {
  card_place: '/sounds/card-place.mp3',
  cardPlay: '/sounds/card-play.mp3',
  cardDraw: '/sounds/card-draw.mp3',
  suitSelect: '/sounds/suit-select.mp3',
  chipSelect: '/sounds/chip-select.mp3',
  betPlace: '/sounds/bet-place.mp3',
  turnPass: '/sounds/turn-pass.mp3',
  roundEnd: '/sounds/round-end.mp3',
  gameWin: '/sounds/game-win.mp3',
  buttonClick: '/sounds/button-click.mp3',
  dice_roll: '/sounds/dice-roll.mp3',
  pawn_move: '/sounds/pawn-move.mp3',
  player_turn: '/sounds/player-turn.mp3',
  game_win: '/sounds/game-win.mp3',
  error: '/sounds/error.mp3',
};

const sounds = {};

// Pre-load sounds
for (const key in soundManifest) {
  sounds[key] = new Howl({
    src: [soundManifest[key]],
  });
}

export const playSound = (soundName) => {
  if (sounds[soundName]) {
    sounds[soundName].play();
  } else {
    console.warn(`Sound not found: ${soundName}`);
  }
};

const SoundContext = React.createContext(playSound);

export const useSound = () => React.useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  return (
    <SoundContext.Provider value={playSound}>
      {children}
    </SoundContext.Provider>
  );
};
