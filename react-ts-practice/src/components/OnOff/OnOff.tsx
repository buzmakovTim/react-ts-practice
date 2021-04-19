import { on } from 'node:events';
import React, { useState } from 'react';
import c from './OnOff.module.css';

type OnOffPropsType = {
  //isOn: boolean;
};

const OnOff: React.FC<OnOffPropsType> = ({}) => {
  let [isOn, setOn] = useState(false);

  const onStyle = {
    color: isOn ? 'white' : 'black',
    backgroundColor: isOn ? 'green' : 'white',
  };
  const offStyle = {
    color: isOn ? 'black' : 'white',
    backgroundColor: isOn ? 'white' : 'red',
  };
  const lightStyle = {
    backgroundColor: isOn ? 'green' : 'red',
  };

  return (
    <div className={c.container}>
      <button
        style={onStyle}
        className={c.on}
        onClick={() => {
          setOn(true);
        }}
      >
        On
      </button>
      <button
        style={offStyle}
        className={c.off}
        onClick={() => {
          setOn(false);
        }}
      >
        Off
      </button>
      <div style={lightStyle} className={c.light}></div>
    </div>
  );
};

export default OnOff;
