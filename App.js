/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Game from './src/screens/Game';
import Welcome from './src/screens/Welcome';

const App = () => {
  // stores the selected number from input
  const [selectedNumber, setSelectedNumber] = useState(false);

  useEffect(() => {
    console.log('App');
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {selectedNumber ? (
          <Game
            correctNumber={selectedNumber}
            goBack={() => {
              setSelectedNumber(false);
            }}
          />
        ) : (
          <Welcome setSelectedNumber={setSelectedNumber} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
