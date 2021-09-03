import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import TextButton from '../components/TextButton';

const Welcome = ({ setSelectedNumber }) => {
  // stores input from text input
  const [input, setInput] = useState('');
  const [isAlert, setAlert] = useState(false);

  // handles input and checks for valid numbers
  const onChangeNumber = ({ nativeEvent: e }) => {
    setAlert(false);
    let val = e.text;
    if (val === '') {
      setInput('');
    } else {
      val = Number(val);
      if (Number.isNaN(val) || val === 0) setInput('');
      else setInput(`${val}`);
    }
  };

  // updates selectedNumber, if valid
  const setNumber = () => {
    if (input === '' || Number.isNaN(input) || input === 0) setAlert(true);
    else setSelectedNumber(Number(input));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.H1}>✨ Nine Tiles ✨</Text>

      <Text style={styles.p}>
        Welcome to Nine Tiles! This is a game where you select a number from 1
        to 9 and then pick the card with the right number!
      </Text>

      <Text style={styles.H2}>Select a number 👇🏻</Text>
      <TextInput
        style={styles.input}
        onChange={onChangeNumber}
        value={input}
        maxLength={1}
        placeholder="Enter Number"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
      />

      <Text style={[styles.alert, { opacity: isAlert ? 1 : 0 }]}>
        Invalid input! Enter a number between 1 and 9 (inclusive).
      </Text>

      <TextButton text="LET'S GO! 🚀" onPress={setNumber} />
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
    marginBottom: 24,
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
  btn: {
    backgroundColor: '#4bf',
    marginTop: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 32,
  },
});

export default Welcome;
