import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyA4xUV0rwPOvtgLbv90P_uUsUYZ3eSRnM8",
    authDomain: "gamescatalog-40ada.firebaseapp.com",
    databaseURL: "https://gamescatalog-40ada-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gamescatalog-40ada",
    storageBucket: "gamescatalog-40ada.appspot.com",
    messagingSenderId: "410784030764",
    appId: "1:410784030764:web:01351f0af02b85935db189",
    measurementId: "G-MT3RP6472D"


};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };