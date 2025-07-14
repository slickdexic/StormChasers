#!/usr/bin/env node

/**
 * Test Script: Storm Stage Player Hands
 * Tests that each player receives unique cards in the storm stage
 */

const io = require('socket.io-client');

const SERVER_URL = 'http://localhost:3501';

let host, player2;
let roomId;

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function testStormHands() {
  console.log('🧪 Testing Storm Stage Player Hands...\n');

  try {
    // Create host connection
    host = io(SERVER_URL, { transports: ['websocket'] });
    await new Promise(resolve => host.on('connect', resolve));
    console.log('✅ Host connected');

    // Create player2 connection  
    player2 = io(SERVER_URL, { transports: ['websocket'] });
    await new Promise(resolve => player2.on('connect', resolve));
    console.log('✅ Player2 connected');

    // Host joins lobby
    host.emit('join-lobby', { name: 'TestHost' });
    await delay(100);

    // Player2 joins lobby
    player2.emit('join-lobby', { name: 'TestPlayer2' });
    await delay(100);

    // Host creates room
    host.emit('create-room', { 
      roomName: 'Storm Hands Test',
      settings: { cardsPerHand: 3, numberOfLaps: 2, numberOfCoins: 3 }
    });

    // Wait for room creation
    await new Promise(resolve => {
      host.on('room-created', (data) => {
        roomId = data.room.id;
        console.log(`✅ Room created: ${roomId}`);
        resolve();
      });
    });

    // Player2 joins the room
    player2.emit('join-room', { roomId });
    await delay(200);

    // Start game (move to dealer selection)
    host.emit('start-game');
    await delay(200);

    // Listen for storm-started events
    let hostStormData, player2StormData;

    host.on('storm-started', (data) => {
      hostStormData = data;
      console.log('🏠 Host received storm-started event');
      console.log('   Host player data:', JSON.stringify(data.room.myPlayerData, null, 2));
    });

    host.on('card-dealt', (data) => {
      console.log(`🃏 Card dealt to ${data.playerName} (card ${data.cardIndex + 1}/${data.totalCards})`);
    });

    player2.on('storm-started', (data) => {
      player2StormData = data;
      console.log('👤 Player2 received storm-started event');
      console.log('   Player2 player data:', JSON.stringify(data.room.myPlayerData, null, 2));
    });

    player2.on('card-dealt', (data) => {
      console.log(`🃏 Card dealt to ${data.playerName} (card ${data.cardIndex + 1}/${data.totalCards})`);
    });

    // Simulate dealer selection - both players pick cards (lowest wins)
    console.log('\n🃏 Simulating dealer selection...');
    
    // Host picks card (simulate low card)
    host.emit('select-dealer-card', { cardIndex: 0 });
    await delay(100);
    
    // Player2 picks card (simulate high card)  
    player2.emit('select-dealer-card', { cardIndex: 1 });
    await delay(500); // Wait for dealer determination

    // Host continues to storm
    console.log('\n⚡ Host continuing to storm stage...');
    host.emit('continue-to-storm');
    await delay(3000); // Wait longer for animated dealing

    // Analyze results
    console.log('\n📊 Analysis:');
    
    if (hostStormData && player2StormData) {
      const hostCards = hostStormData.room.myPlayerData?.cards || [];
      const player2Cards = player2StormData.room.myPlayerData?.cards || [];
      
      console.log(`Host hand (${hostCards.length} cards):`, hostCards.map(c => `${c.rank}${c.suit}`).join(', '));
      console.log(`Player2 hand (${player2Cards.length} cards):`, player2Cards.map(c => `${c.rank}${c.suit}`).join(', '));
      
      // Check if hands are unique
      const hostCardSet = new Set(hostCards.map(c => `${c.rank}${c.suit}`));
      const player2CardSet = new Set(player2Cards.map(c => `${c.rank}${c.suit}`));
      
      const intersection = [...hostCardSet].filter(card => player2CardSet.has(card));
      
      if (intersection.length === 0) {
        console.log('✅ SUCCESS: Player hands are unique (no overlapping cards)');
      } else {
        console.log('❌ FAIL: Player hands have overlapping cards:', intersection);
      }
      
      if (hostCards.length === 3 && player2Cards.length === 3) {
        console.log('✅ SUCCESS: Both players have correct number of cards (3)');
      } else {
        console.log('❌ FAIL: Incorrect number of cards');
      }
    } else {
      console.log('❌ FAIL: Not all players received storm-started event');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    // Cleanup
    if (host) host.disconnect();
    if (player2) player2.disconnect();
    console.log('\n🧹 Test cleanup completed');
  }
}

// Run the test
testStormHands().catch(console.error);
