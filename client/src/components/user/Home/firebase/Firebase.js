import firebase from 'firebase/app';
import 'firebase/storage';
// import FileUploader from "react-firebase-file-uploader";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "plane-time-f4fb7.firebaseapp.com",
    databaseURL: "https://plane-time-f4fb7.firebaseio.com",
    projectId: "plane-time-f4fb7",
    storageBucket: "plane-time-f4fb7.appspot.com",
    messagingSenderId: "682543809608",
    appId: "1:682543809608:web:5deef52a1f561427e6c47d"
    }; 
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const storage = firebase.storage();

    export { storage, firebase as default }

    