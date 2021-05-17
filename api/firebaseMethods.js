import * as firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('users')
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function addGame(game) {
  try {
    const db = firebase.firestore();
    db.collection('games').doc(game.id).set(game);
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}


export async function deleteGame(game) {
  try {
    const db = firebase.firestore();
    db.collection('games').doc(game.id).delete();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}
function onError(error) {
  console.error(error);
}


export async function getGames(onResult) {
  try {
    const db = firebase.firestore();
    const subscriber = await db.collection('games').onSnapshot(snapshot => {
      const games = [];
      snapshot.forEach(documentSnapshot => {
        games.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      onResult(games);
    }, onError)

  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}