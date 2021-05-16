import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Platformm, View, Text } from 'react-native';
import * as firebase from 'firebase';
import GameSearchBar from '../components/GameSearchBar';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight

export default function AddGameScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <GameSearchBar />
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