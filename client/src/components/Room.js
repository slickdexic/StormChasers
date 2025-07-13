import React, { useState } from 'react';
import styled from 'styled-components';
import { useGame } from '../contexts/GameContext';

const RoomContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`;

const RoomTitle = styled.h1`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  font-size: 2rem;
  margin: 0;
`;

const LeaveButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #ff4757;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff3742;
    transform: translateY(-1px);
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PlayersSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const PlayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PlayerSlot = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid ${props => props.filled ? 'rgba(0, 212, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;

  ${props => props.filled && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 212, 255, 0.2);
    }
  `}
`;

const PlayerInfo = styled.div`
  text-align: center;
  width: 100%;
`;

const PlayerName = styled.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const PlayerColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 3px solid white;
  margin: 0 auto 0.5rem;
`;

const PlayerBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => props.isHost ? '#ffd700' : '#00ff88'};
  color: #000;
`;

const EmptySlot = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  text-align: center;
`;

const ColorChangeButton = styled.button`
  margin-top: 0.5rem;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const GameSettings = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.9rem;
`;

const SettingLabel = styled.span`
  color: rgba(255, 255, 255, 0.8);
`;

const SettingValue = styled.span`
  font-weight: 600;
  color: #00d4ff;
`;

const StartButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00ff88, #00d4ff);
  color: #000;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover:not(:disabled) {
    background: linear-gradient(45deg, #00d4ff, #00ff88);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ChatSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 600px;
`;

const ChatTabs = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ChatTab = styled.button`
  padding: 8px 16px;
  border: none;
  background: ${props => props.active ? 'rgba(0, 212, 255, 0.2)' : 'transparent'};
  color: ${props => props.active ? '#00d4ff' : 'rgba(255, 255, 255, 0.7)'};
  border-bottom: 2px solid ${props => props.active ? '#00d4ff' : 'transparent'};
  cursor: pointer;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }
`;

const PrivateMessageTarget = styled.select`
  padding: 8px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-family: 'Rajdhani', sans-serif;

  &:focus {
    outline: none;
    border-color: #00d4ff;
  }

  option {
    background: #1a1a2e;
    color: white;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Message = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${props => props.isPrivate ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
  border-left: 3px solid ${props => props.isPrivate ? '#ffd700' : '#00d4ff'};
`;

const MessageHeader = styled.div`
  font-size: 0.8rem;
  color: ${props => props.isPrivate ? '#ffd700' : '#00d4ff'};
  margin-bottom: 0.2rem;
`;

const MessageText = styled.div`
  color: white;
  font-size: 0.9rem;
`;

const ChatInput = styled.input`
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: 'Rajdhani', sans-serif;

  &:focus {
    outline: none;
    border-color: #00d4ff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const ColorPicker = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  z-index: 100;
`;

const ColorOption = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${props => props.selected ? '#ffffff' : 'transparent'};
  background: ${props => props.color};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function Room() {
  const { 
    currentRoom, 
    player, 
    messages, 
    leaveRoom, 
    sendRoomMessage, 
    sendPrivateMessage,
    changeColor, 
    startGame 
  } = useGame();
  
  const [chatMessage, setChatMessage] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(null);
  const [chatMode, setChatMode] = useState('room'); // 'room' or 'private'
  const [privateTarget, setPrivateTarget] = useState('');

  const playerColors = {
    yellow: '#ffd700',
    orange: '#ff8c00',
    red: '#ff3838',
    pink: '#ff69b4',
    purple: '#9b59b6',
    blue: '#00d4ff',
    green: '#00ff88',
    black: '#2c3e50'
  };

  const availableColors = ['yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'green', 'black'];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      if (chatMode === 'room') {
        sendRoomMessage(chatMessage);
      } else if (chatMode === 'private' && privateTarget) {
        sendPrivateMessage(privateTarget, chatMessage);
      }
      setChatMessage('');
    }
  };

  const handleColorChange = (color) => {
    changeColor(color);
    setShowColorPicker(null);
  };

  const canStartGame = currentRoom?.host?.id === player?.id && 
                      currentRoom?.players?.length >= 2 &&
                      currentRoom?.gameState?.currentStage === 'lobby';

  const getUsedColors = () => {
    return currentRoom?.players?.map(p => p.color).filter(Boolean) || [];
  };

  const getAvailableColors = () => {
    const used = getUsedColors();
    return availableColors.filter(color => !used.includes(color) || color === player?.color);
  };

  return (
    <RoomContainer>
      <Header>
        <RoomTitle>{currentRoom?.name}</RoomTitle>
        <LeaveButton onClick={leaveRoom}>Leave Room</LeaveButton>
      </Header>

      <MainContent>
        <PlayersSection>
          <SectionTitle>Players ({currentRoom?.players?.length || 0}/4)</SectionTitle>
          
          <PlayersGrid>
            {[0, 1, 2, 3].map((slotIndex) => {
              const slotPlayer = currentRoom?.players?.[slotIndex];
              
              return (
                <PlayerSlot key={slotIndex} filled={!!slotPlayer}>
                  {slotPlayer ? (
                    <PlayerInfo>
                      <PlayerColor color={playerColors[slotPlayer.color] || '#666'} />
                      <PlayerName>{slotPlayer.name}</PlayerName>
                      <PlayerBadge isHost={slotPlayer.isHost}>
                        {slotPlayer.isHost ? 'Host' : 'Player'}
                      </PlayerBadge>
                      {slotPlayer.id === player?.id && (
                        <div style={{ position: 'relative' }}>
                          <ColorChangeButton 
                            onClick={() => setShowColorPicker(showColorPicker === slotIndex ? null : slotIndex)}
                          >
                            Change Color
                          </ColorChangeButton>
                          {showColorPicker === slotIndex && (
                            <ColorPicker>
                              {getAvailableColors().map(color => (
                                <ColorOption
                                  key={color}
                                  color={playerColors[color]}
                                  selected={player?.color === color}
                                  onClick={() => handleColorChange(color)}
                                />
                              ))}
                            </ColorPicker>
                          )}
                        </div>
                      )}
                    </PlayerInfo>
                  ) : (
                    <EmptySlot>Waiting for player...</EmptySlot>
                  )}
                </PlayerSlot>
              );
            })}
          </PlayersGrid>

          <GameSettings>
            <SectionTitle style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Game Settings</SectionTitle>
            <SettingsGrid>
              <SettingItem>
                <SettingLabel>Laps:</SettingLabel>
                <SettingValue>{currentRoom?.settings?.numberOfLaps || 3}</SettingValue>
              </SettingItem>
              <SettingItem>
                <SettingLabel>Movement Dice:</SettingLabel>
                <SettingValue>{currentRoom?.settings?.numberOfDice === 2 ? '2 dice' : '1 die'}</SettingValue>
              </SettingItem>
              <SettingItem>
                <SettingLabel>Card Decks:</SettingLabel>
                <SettingValue>{currentRoom?.settings?.numberOfDecks === 2 ? 'Double' : 'Single'}</SettingValue>
              </SettingItem>
              <SettingItem>
                <SettingLabel>Cards per Hand:</SettingLabel>
                <SettingValue>{currentRoom?.settings?.cardsPerHand || 4}</SettingValue>
              </SettingItem>
              <SettingItem>
                <SettingLabel>Coins per Round:</SettingLabel>
                <SettingValue>{currentRoom?.settings?.numberOfCoins || 2}</SettingValue>
              </SettingItem>
            </SettingsGrid>
          </GameSettings>

          {currentRoom?.host?.id === player?.id && (
            <StartButton 
              onClick={startGame}
              disabled={!canStartGame}
            >
              {canStartGame ? 'Start Race!' : 
               currentRoom?.players?.length < 2 ? 'Need at least 2 players' : 'Game in progress'}
            </StartButton>
          )}
        </PlayersSection>

        <ChatSection>
          <ChatTabs>
            <ChatTab 
              active={chatMode === 'room'} 
              onClick={() => setChatMode('room')}
            >
              Room Chat
            </ChatTab>
            <ChatTab 
              active={chatMode === 'private'} 
              onClick={() => setChatMode('private')}
            >
              Private Message
            </ChatTab>
          </ChatTabs>

          {chatMode === 'private' && (
            <PrivateMessageTarget
              value={privateTarget}
              onChange={(e) => setPrivateTarget(e.target.value)}
            >
              <option value="">Select player...</option>
              {currentRoom?.players
                ?.filter(p => p.id !== player?.id)
                ?.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
            </PrivateMessageTarget>
          )}
          
          <ChatMessages>
            {messages
              .filter(msg => chatMode === 'room' ? msg.type === 'room' : msg.type === 'private')
              .map((message) => (
                <Message key={message.id} isPrivate={message.type === 'private'}>
                  <MessageHeader isPrivate={message.type === 'private'}>
                    {message.type === 'private' ? '[Private] ' : ''}{message.playerName}:
                  </MessageHeader>
                  <MessageText>{message.message}</MessageText>
                </Message>
              ))}
          </ChatMessages>

          <form onSubmit={handleSendMessage}>
            <ChatInput
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder={
                chatMode === 'room' 
                  ? "Type a message..." 
                  : privateTarget 
                    ? `Private message to ${currentRoom?.players?.find(p => p.id === privateTarget)?.name || 'player'}...`
                    : "Select a player first..."
              }
              maxLength={200}
              disabled={chatMode === 'private' && !privateTarget}
            />
          </form>
        </ChatSection>
      </MainContent>
    </RoomContainer>
  );
}

export default Room;
