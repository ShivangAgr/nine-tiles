import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const TextButton = ({ text, onPress }) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnTxt}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default TextButton;
