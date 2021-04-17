import React from 'react';
import logo from './logo.svg';
import './App.css';
import { disconnect } from 'node:process';

function App() {
  return (
    <div>
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Accordion() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}

function Star() {
  return <div>Star</div>;
}
export default App;
