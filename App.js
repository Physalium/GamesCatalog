import React from 'react';
import * as firebase from 'firebase';
import firebaseConfig from './config/keys';
import { LogBox } from 'react-native';
import Root from './navigation/Root';

LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Root />
  );
}