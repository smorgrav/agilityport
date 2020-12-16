import React from 'react';
import './App.css';
import {DnNavbar} from '@vzmi/denali-react-beta';
import 'denali-css/css/denali.css';
import {FirebaseProvider} from './FirebaseProvider';
import {CompetitionOverview} from './CompetitionOverivew';

const App = () => {
  return (
    <FirebaseProvider>
      <DnNavbar>
        <DnNavbar.Left>
          <DnNavbar.Brand src="pows.png"/>
          <DnNavbar.Item>Agility Port</DnNavbar.Item>
        </DnNavbar.Left>
        <DnNavbar.Responsive>
          <DnNavbar.Center>
            <DnNavbar.Item>Center</DnNavbar.Item>
          </DnNavbar.Center>
          <DnNavbar.Right>
            <DnNavbar.Item>Right</DnNavbar.Item>
          </DnNavbar.Right>
        </DnNavbar.Responsive>
      </DnNavbar>
      <CompetitionOverview/>
    </FirebaseProvider>
  );
};

export default App;
