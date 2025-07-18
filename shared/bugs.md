# Dealer Selection Bugs and Analysis

## 1. Cards Not Revealed Properly When Flipped

### Problem
- When a player selects a card during dealer selection, the card is not always revealed (flipped) for all players. Sometimes only the selecting player sees the card face, while others see a blank or back-of-card.

### Cause
- The server updates the `isFlipped` property for the selected card in the `dealerSelectionCards` array, but the client UI may not always receive or render the updated state for all players.
- The server emits the updated room state, but the client may not always use the latest `dealerSelectionCards` array, or the mapping between cards and their flipped state may be inconsistent.
- If the client or server uses a shallow copy or mismatched card IDs, the UI may not update as expected.

### Solution Recommendation
- Ensure the server always sends the full, up-to-date `dealerSelectionCards` array (with correct `isFlipped` states) to all clients after each selection.
- Ensure the client always uses the server-sent array to render the UI, and that the mapping between card index and card state is consistent.
- Add extra logging and validation to confirm that all clients receive the same `dealerSelectionCards` state after each selection.

---

## 2. Dealer Never Announced, Game Does Not Progress

### Problem
- After all players have selected a card, the dealer is never announced and the game does not advance to the next stage.

### Cause
- The server's `selectDealerCard` method checks if all players have selected a card and then calls `determineDealer`. However, the `isDealer` property is only set on the player object, and the client may not be able to reliably detect the dealer from the room state.
- The server emits a `dealer-determined` event, but the client may not handle this event to update the UI or advance the stage.
- The server may not be advancing the game stage after the dealer is determined, or the client may not be listening for the correct event to trigger the transition.

### Solution Recommendation
- Ensure the server emits a `dealer-determined` event with the full updated room state, and that the client listens for this event to update the UI and advance the stage.
- On the client, when the dealer is determined, display the dealer announcement and then automatically (or via host action) advance to the next stage as described in the GameDevGuide.
- Add robust checks to ensure the dealer is set and the game state transitions to the "storm" stage after dealer selection.

---

## 3. General Recommendations

- Add more detailed logging on both server and client for all dealer selection events and state changes.
- Write automated tests to simulate multi-client dealer selection and verify that all clients see the same card states and dealer announcement.
- Review the mapping of card IDs and indexes between server and client to ensure consistency.

---

## References
- See `/shared/GameDevGuide.md` for correct dealer selection flow and UI/UX requirements.
- See `server/src/models/GameRoom.js` and `server/src/models/GameState.js` for server logic.
- See `client/src/components/stages/DealerSelectionStage.js` and `client/src/components/GameBoard.js` for client UI logic.
