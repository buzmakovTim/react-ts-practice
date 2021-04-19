import React from 'react';
import starOn from '../../images/starOn.png';
import starOff from '../../images/starOff.png';
import c from './Star.module.css';

type StarPropsType = {
  selected: boolean;
};

function Star(props: StarPropsType) {
  if (props.selected === true) {
    return (
      <>
        <img className={c.star} src={starOn} alt="" />
      </>
    );
  } else {
    return (
      <>
        <img className={c.star} src={starOff} alt="" />
      </>
    );
  }
}

export default Star;
