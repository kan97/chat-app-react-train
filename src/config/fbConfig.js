import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDkbzqfvN70qf_R0uboLWsZpgHp58qGOck",
    authDomain: "chat-app-react-train.firebaseapp.com",
    databaseURL: "https://chat-app-react-train.firebaseio.com",
    projectId: "chat-app-react-train",
    storageBucket: "chat-app-react-train.appspot.com",
    messagingSenderId: "509939733506"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase