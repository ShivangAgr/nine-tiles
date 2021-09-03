import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import generateRandomBoard from '../../util/generateRandomBoard';
import Board from '../components/Board';
import TextButton from '../components/TextButton';

// configurable constants
const GAME_NAME = 'NINETILES';
const TURNS = 3;
const MESSAGES = ['Good luck!', 'Second Attempt', 'Last Chance'];

const Game = ({ correctNumber, goBack }) => {
  // stores random sequence of numbers between 1 to 9
  const [boardData, setBoardData] = useState(generateRandomBoard());
  // stores the indices of card that have been flipped
  const [cardsFlipped, setCardsFlipped] = useState([]);
  // game status { completed: boolean, win: boolean, msg: string }
  const [gameStatus, setStatus] = useState({ completed: false });

  // return text to be displayed on card based on flip status
  const getCardText = idx => {
    return cardsFlipped.includes(idx) ? boardData[idx] : GAME_NAME.charAt(idx);
  };

  // flips card and calls checkGameEnd
  const flipCard = idx => {
    if (cardsFlipped.includes(idx)) return;
    const newCardsFlipped = cardsFlipped.slice();
    newCardsFlipped.push(idx);
    setCardsFlipped(newCardsFlipped);
    checkGameEnd(newCardsFlipped, idx);
  };

  // checks if last flipped card matches correct number or if game is over
  const checkGameEnd = (cardsFlipped, newCardIdx) => {
    if (boardData[newCardIdx] === correctNumber)
      setStatus({ completed: true, win: true, msg: 'YOU WIN!' });
    else if (cardsFlipped.length === TURNS)
      setStatus({ completed: true, win: false, msg: 'DEFEAT!' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.H1}>You selected {correctNumber}</Text>

      <Text
        style={[
          styles.H2,
          gameStatus.completed && { color: gameStatus.win ? 'green' : 'red', fontWeight: '700' },
        ]}>
        {gameStatus.completed ? gameStatus.msg : MESSAGES[cardsFlipped.length]}
      </Text>
      <Text style={styles.H2}>Chances Left: {TURNS - cardsFlipped.length}</Text>

      <Board
        getCardText={getCardText}
        flipCard={flipCard}
        disabled={gameStatus.completed}
      />

      <TextButton text="Go back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  H1: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  H2: {
    fontSize: 24,
    textAlign: 'center',
  },
  p: {
    fontSize: 18,
    marginBottom: 32,
  },
  alert: {
    fontSize: 14,
    color: 'red',
    marginBottom: 16,
  },
  input: {
    marginTop: 12,
    // marginBottom: 32,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: 'black',
  },
});

export default Game;
