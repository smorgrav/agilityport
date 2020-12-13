import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from './FirebaseProvider';
// Renable this when I have a skeleton of denali up and running
/*
    db.collection("competitions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("something3lse")
            setCompetitions(old => ({...old, [doc.id]: doc.data()}))
        });
    })*/


// https://react-table.tanstack.com/docs/overview

const CompetitionOverview = ({})=> {
  const firebase = useContext(FirebaseContext);
  const [comps, setComps] = useState<any>({});

  useEffect(() => {
    if (firebase.firestore) {
      firebase.firestore()
          .collection('competitions')
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setComps((old) => ({...old, [doc.id]: doc.data()}));
            });
          });
    }
  }, []);

  return (
    <>
      {Object.entries(comps).map(([id, comp]) => (<h5 key={id}>{id}</h5>))}
    </>
  );
};

export {CompetitionOverview};
