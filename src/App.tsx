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
          <DnNavbar.Brand src="agilityportlogo.png" />
        </DnNavbar.Left>
        <DnNavbar.Responsive>
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
