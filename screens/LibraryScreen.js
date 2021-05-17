import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler'
import * as firebase from 'firebase';
import { getGames, loggingOut, deleteGame, addGame } from '../api/firebaseMethods';
import GamesRepository from '../api/GamesRepository';
import Game from '../components/Game';
import Constants from 'expo-constants';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    View,
    StyleSheet,
    Alert,
    Text,
} from 'react-native';
const statusBarHeight = Constants.statusBarHeight
export default function LibraryScreen({ navigation }) {
    let currentUserUID = firebase.auth().currentUser.uid;
    const [firstName, setFirstName] = useState('');
    const [selectedId, setSelectedId] = useState(null);
    const [games, setGames] = useState(null);

    useEffect(() => {
        async function getUserInfo() {
            let doc = await firebase
                .firestore()
                .collection('users')
                .doc(currentUserUID)
                .get();

            if (!doc.exists) {
                Alert.alert('No user data found!')
            } else {
                let dataObj = doc.data();
                setFirstName(dataObj.firstName)
            }
        }
        getUserInfo();
        getGames(setGames);
    }, [])

    const onDeleteGame = (game) => {
        deleteGame(game)
    }
    const onSwitchGame = (game) => {
        game.finished = !game.finished;
        addGame(game)
    }



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                {games != null && games !== undefined &&
                    games.map(game => {
                        return <Game i={game.name} game={game} deleteGame={onDeleteGame} flipState={onSwitchGame} />
                    })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        marginBottom: 10,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 0
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: '2%',
        marginBottom: '10%',
        fontWeight: 'bold',
        color: 'black',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2E6194',
    },
});