import React from 'react';
import logo from './logo.svg';
import './App.css';
import { disconnect } from 'node:process';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
      <Rating />
      <Accordion />
    </div>
  );
}

export default App;
