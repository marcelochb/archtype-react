import React from 'react';
import logo from './logo.svg';
import './App.css';
import { myContainer } from './inversity.config';
import { Warrior } from './interfaces';
import { TYPES } from './types';

export const App: React.FC = () => {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior);
  console.log(ninja.fight());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

