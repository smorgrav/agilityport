import React, {useState} from 'react';
import './App.css';
import {DnBox} from "@vzmi/denali-react-beta";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9vycrGHx4t8MrhzwgEUG9MOKVkJI_00k",
    authDomain: "agilityport.firebaseapp.com",
    databaseURL: "https://agilityport.firebaseio.com",
    projectId: "agilityport",
    storageBucket: "agilityport.appspot.com",
    messagingSenderId: "1059309145754",
    appId: "1:1059309145754:web:0b750cebbca8ed34619923",
    measurementId: "G-D0Y3VL0NE5"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function App() {
    const [competitions, setCompetitions] = useState({})

    db.collection("competitions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setCompetitions(old => ({...old, [doc.id]: doc.data()}))
        });
    })

  return (
      <>{Object.entries(competitions).map(([id, data]) => (<DnBox key={id}>{JSON.stringify(data)}</DnBox>))}</>
  );
}

export default App;
