import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useGame } from '../contexts/GameContext';

const LobbyContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px #00d4ff;
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PlayerName = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
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

const RoomsSection = styled.div`
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

const CreateRoomButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-bottom: 2rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #ff3838);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(45deg, #ff3838, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
  }
`;

const RoomsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
`;

const RoomCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`;

const RoomHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
`;

const RoomName = styled.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin: 0;
  flex: 1;
`;

const RoomStatus = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => 
    props.status === 'Waiting to start' ? '#00ff88' : '#ff8c00'
  };
  color: ${props => 
    props.status === 'Waiting to start' ? '#000' : '#fff'
  };
`;

const RoomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const JoinButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #00ff88;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #00e67a;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #666;
    color: #999;
    cursor: not-allowed;
  }
`;

const ControlPanel = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  height: fit-content;
`;

const CreateRoomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: white;
  font-weight: 600;
`;

const Input = styled.input`
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

const AutocompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;

const AutocompleteList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const AutocompleteItem = styled.li`
  padding: 10px;
  color: white;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Select = styled.select`
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

  option {
    background: #1a1a2e;
    color: white;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #00d4ff;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #0099cc;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

function Lobby() {
  const { player, availableRooms, createRoom, joinRoom } = useGame();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    roomName: '',
    numberOfLaps: 3,
    numberOfDice: 1,
    numberOfDecks: 1,
    cardsPerHand: 4,
    numberOfCoins: 2
  });
  
  // Autocomplete states
  const [previousRoomNames, setPreviousRoomNames] = useState([]);
  const [showRoomAutocomplete, setShowRoomAutocomplete] = useState(false);
  const roomInputRef = useRef(null);
  const roomAutocompleteRef = useRef(null);

  // Load previous room names from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('havoc-speedway-room-names');
    if (saved) {
      try {
        setPreviousRoomNames(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading previous room names:', e);
      }
    }
  }, []);

  // Close autocomplete when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roomAutocompleteRef.current && !roomAutocompleteRef.current.contains(event.target)) {
        setShowRoomAutocomplete(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const saveRoomName = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const updatedNames = [trimmedName, ...previousRoomNames.filter(n => n !== trimmedName)].slice(0, 10);
    setPreviousRoomNames(updatedNames);
    localStorage.setItem('havoc-speedway-room-names', JSON.stringify(updatedNames));
  };

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (formData.roomName.trim()) {
      saveRoomName(formData.roomName);
      createRoom(formData.roomName.trim(), {
        numberOfLaps: parseInt(formData.numberOfLaps),
        numberOfDice: parseInt(formData.numberOfDice),
        numberOfDecks: parseInt(formData.numberOfDecks),
        cardsPerHand: parseInt(formData.cardsPerHand),
        numberOfCoins: parseInt(formData.numberOfCoins)
      });
      setFormData({ ...formData, roomName: '' });
      setShowCreateForm(false);
    }
  };

  const handleRoomNameChange = (e) => {
    const value = e.target.value;
    setFormData({...formData, roomName: value});
    setShowRoomAutocomplete(value.length > 0 && previousRoomNames.length > 0);
  };

  const handleRoomNameFocus = () => {
    if (previousRoomNames.length > 0) {
      setShowRoomAutocomplete(true);
    }
  };

  const selectRoomName = (name) => {
    setFormData({...formData, roomName: name});
    setShowRoomAutocomplete(false);
    // Do not refocus input, let user continue naturally
  };

  const filteredRoomNames = previousRoomNames.filter(name => 
    name.toLowerCase().includes(formData.roomName.toLowerCase())
  );

  const handleJoinRoom = (roomId) => {
    joinRoom(roomId);
  };

  return (
    <LobbyContainer>
      <Header>
        <Title>Race Lobby</Title>
        <PlayerInfo>
          <PlayerName>Welcome, {player?.name}!</PlayerName>
        </PlayerInfo>
      </Header>

      <MainContent>
        <RoomsSection>
          <SectionTitle>Active Racing Rooms</SectionTitle>
          
          {availableRooms.length === 0 ? (
            <EmptyState>
              No active rooms. Create one to start racing!
            </EmptyState>
          ) : (
            <RoomsList>
              {availableRooms.map((room) => (
                <RoomCard key={room.id}>
                  <RoomHeader>
                    <RoomName>{room.name}</RoomName>
                    <RoomStatus status={room.status}>{room.status}</RoomStatus>
                  </RoomHeader>
                  <RoomDetails>
                    <span>Host: {room.hostName}</span>
                    <span>{room.playerCount}/{room.maxPlayers} players</span>
                    <span>{room.settings?.numberOfLaps || 3} laps</span>
                  </RoomDetails>
                  <JoinButton 
                    onClick={() => handleJoinRoom(room.id)}
                    disabled={!room.canJoin}
                  >
                    {room.canJoin ? 'Join Race' : 'Room Full'}
                  </JoinButton>
                </RoomCard>
              ))}
            </RoomsList>
          )}
        </RoomsSection>

        <ControlPanel>
          <SectionTitle>Create New Room</SectionTitle>
          
          {!showCreateForm ? (
            <CreateRoomButton onClick={() => setShowCreateForm(true)}>
              Create Racing Room
            </CreateRoomButton>
          ) : (
            <CreateRoomForm onSubmit={handleCreateRoom}>
              <FormGroup>
                <Label>Room Name</Label>
                <AutocompleteContainer ref={roomAutocompleteRef}>
                  <Input
                    ref={roomInputRef}
                    type="text"
                    value={formData.roomName}
                    onChange={handleRoomNameChange}
                    onFocus={handleRoomNameFocus}
                    placeholder="Enter room name..."
                    maxLength={30}
                    required
                  />
                  {showRoomAutocomplete && filteredRoomNames.length > 0 && (
                    <AutocompleteList>
                      {filteredRoomNames.map((name, index) => (
                        <AutocompleteItem
                          key={index}
                          onClick={() => selectRoomName(name)}
                        >
                          {name}
                        </AutocompleteItem>
                      ))}
                    </AutocompleteList>
                  )}
                </AutocompleteContainer>
              </FormGroup>

              <FormGroup>
                <Label>Number of Laps</Label>
                <Select
                  value={formData.numberOfLaps}
                  onChange={(e) => setFormData({...formData, numberOfLaps: e.target.value})}
                >
                  {[1,2,3,4,5].map(n => (
                    <option key={n} value={n}>{n} lap{n !== 1 ? 's' : ''}</option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Movement Dice</Label>
                <Select
                  value={formData.numberOfDice}
                  onChange={(e) => setFormData({...formData, numberOfDice: e.target.value})}
                >
                  <option value={1}>1 die</option>
                  <option value={2}>2 dice</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Card Decks</Label>
                <Select
                  value={formData.numberOfDecks}
                  onChange={(e) => setFormData({...formData, numberOfDecks: e.target.value})}
                >
                  <option value={1}>Single deck</option>
                  <option value={2}>Double deck</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Cards per Hand</Label>
                <Select
                  value={formData.cardsPerHand}
                  onChange={(e) => setFormData({...formData, cardsPerHand: e.target.value})}
                >
                  {[3,4,5].map(n => (
                    <option key={n} value={n}>{n} cards</option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Coins per Round</Label>
                <Select
                  value={formData.numberOfCoins}
                  onChange={(e) => setFormData({...formData, numberOfCoins: e.target.value})}
                >
                  {[1,2,3].map(n => (
                    <option key={n} value={n}>{n} coin{n !== 1 ? 's' : ''}</option>
                  ))}
                </Select>
              </FormGroup>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <SubmitButton type="submit" disabled={!formData.roomName.trim()}>
                  Create Room
                </SubmitButton>
                <SubmitButton 
                  type="button" 
                  onClick={() => setShowCreateForm(false)}
                  style={{ background: '#666' }}
                >
                  Cancel
                </SubmitButton>
              </div>
            </CreateRoomForm>
          )}
        </ControlPanel>
      </MainContent>
    </LobbyContainer>
  );
}

export default Lobby;
