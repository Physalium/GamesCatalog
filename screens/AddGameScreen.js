import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Platformm, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import GameSearchBar from '../components/GameSearchBar';
import Game from '../components/Game';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight

export default function AddGameScreen() {

  const [games, setGames] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <GameSearchBar setGames={setGames} />
      <ScrollView>
        {games != null &&
          games.map((game, i) => (<Game i={i} game={game} />))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384040',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0
  }
});