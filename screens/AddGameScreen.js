import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Platformm, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import GameSearchBar from '../components/GameSearchBar';
import Game from '../components/Game';
import Constants from 'expo-constants';
import { addGame } from '../api/firebaseMethods';

const statusBarHeight = Constants.statusBarHeight

export default function AddGameScreen() {

  const [games, setGames] = useState(null);
  const onPress = ((game) => {
    console.log(game)
    game.finished = false;
    addGame(game)
  }
  )
  return (
    <SafeAreaView style={styles.container}>
      <GameSearchBar setGames={setGames} />
      <ScrollView >
        {games != null &&
          games.map(game => {
            return <Game i={game.slug} game={game} selectGame={onPress} />
          })}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0
  }
});