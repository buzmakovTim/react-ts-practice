import React from 'react';
import logo from './logo.svg';
import './App.css';
import { disconnect } from 'node:process';
import Rating from './components/Rating/Rating';
import PageTitle from './components/PageTitle/PageTitle';
import OnOff from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';

export type ItemType = {
  title: string
  value: any
}



function App() {
  
  
  
  let arrayItems: ItemType[] = [{title: "One", value: 1}, {title: "Two", value: 2}, {title: "Three", value: 3}];
  
  let onClick = (value: any) => {
      alert(value)
  }
  
  return (
    <div>
      <PageTitle title="React Practice" />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion title="React Practice" items={arrayItems} onClick={onClick}/>
      <Accordion title="HTML Practice" items={arrayItems} onClick={onClick}/>

      <OnOff />
      <OnOff />
    </div>
  );
}

export default App;
