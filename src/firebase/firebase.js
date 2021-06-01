import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig =  {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "firechat-5ba9c.firebaseapp.com",
    projectId: "firechat-5ba9c",
    storageBucket: "firechat-5ba9c.appspot.com",
    messagingSenderId: "334056120667",
    appId: "1:334056120667:web:ea60b8b6038a7a9a5a7a7e",
    measurementId: "G-8R6RNLDEJS"
};

export const auth = firebase.initializeApp(firebaseConfig).auth();