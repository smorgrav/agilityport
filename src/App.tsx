import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DnBox} from "@vzmi/denali-react-beta";

function App() {
  return (
    <div className="App">
        <DnBox className="additional--class" style={{width: '320px'}}>
            <h2>Title</h2>
            <p>YO</p>
            <footer>
                <p>This is a footer.</p>
            </footer>
        </DnBox>
    </div>
  );
}

export default App;
