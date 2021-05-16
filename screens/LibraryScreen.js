import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut } from '../services/api/firebaseMethods';
import GamesRepository from '../api/GamesRepository';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    View,
    StyleSheet,
    Alert,
    Text,
} from 'react-native';

export default function LibraryScreen({ navigation }) {
    let currentUserUID = firebase.auth().currentUser.uid;
    const [firstName, setFirstName] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

        return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
    };

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
    })

    const handlePress = () => {
        loggingOut();
        navigation.replace('Home');
    };

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
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
        backgroundColor: '#384040',
        alignItems: 'center',
        justifyContent: 'center',
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