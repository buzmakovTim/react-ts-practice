import React from 'react';
import logo from './logo.svg';
import './App.css';
import { disconnect } from 'node:process';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import PageTitle from './components/PageTitle/PageTitle';
import OnOff from './components/OnOff/OnOff';

function App() {
  return (
    <div>
      <PageTitle title="React Practice" />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion title="React Practice" />
      <Accordion title="HTML Practice" />

      <OnOff />
      <OnOff />
    </div>
  );
}

export default App;
