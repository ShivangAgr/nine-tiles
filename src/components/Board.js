import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Card = ({ text, onPress, disabled }) => {
  return (
    <Pressable style={styles.card} onPress={onPress} disabled={disabled}>
      <Text style={styles.cardText}>{text}</Text>
    </Pressable>
  );
};

// 9 x 9 board of card components
const Board = ({ getCardText, flipCard, disabled }) => {
  return (
    <View style={styles.board}>
      <View style={styles.row}>
        {[0, 1, 2].map(idx => (
          <Card
            key={idx}
            text={getCardText(idx)}
            onPress={() => flipCard(idx)}
            disabled={disabled}
          />
        ))}
      </View>
      <View style={styles.row}>
        {[3, 4, 5].map(idx => (
          <Card
            key={idx}
            text={getCardText(idx)}
            onPress={() => flipCard(idx)}
            disabled={disabled}
          />
        ))}
      </View>
      <View style={styles.row}>
        {[6, 7, 8].map(idx => (
          <Card
            key={idx}
            text={getCardText(idx)}
            onPress={() => flipCard(idx)}
            disabled={disabled}
          />
        ))}
      </View>
      {disabled && <View style={styles.overlay}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: 'white',
    marginVertical: 24,
    padding: 8,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#4bf',
    margin: 8,
    paddingBottom: 4,
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: 8,
    borderColor: '#acf',
  },
  cardText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 32,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
  },
});

export default Board;
