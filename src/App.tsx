import React, {useState} from 'react';
import './App.css';
import {DnBox, DnNavbar} from "@vzmi/denali-react-beta";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import 'denali-css/css/denali.css'

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
//firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();

  // Renable this when I have a skeleton of denali up and running
   /*
    db.collection("competitions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("something3lse")
            setCompetitions(old => ({...old, [doc.id]: doc.data()}))
        });
    })*/


function App() {
    const [competitions, setCompetitions] = useState({})

  return (
      <>
          <DnNavbar>
              <DnNavbar.Left>
                <DnNavbar.Item>Left</DnNavbar.Item>
              </DnNavbar.Left>
              <DnNavbar.Center>
                  <DnNavbar.Item>Center</DnNavbar.Item>
              </DnNavbar.Center>
              <DnNavbar.Right>
                  <DnNavbar.Item>Right</DnNavbar.Item>
              </DnNavbar.Right>
          </DnNavbar>
          <DnBox>
            Hello
          </DnBox>
          </>
  );
}

export default App;
