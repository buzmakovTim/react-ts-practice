import React from 'react';
import starOn from '../../images/starOn.png';
import starOff from '../../images/starOff.png';
import c from './Star.module.css';

type StarPropsType = {
  selected: boolean;
  starSelected: number;
  changeRating: (starSelected: number) => void;
};

function Star(props: StarPropsType) {
  if (props.selected === true) {
    return (
      <>
        <img
          onClick={() => {
            props.changeRating(props.starSelected);
          }}
          className={c.star}
          src={starOn}
          alt=""
        />
      </>
    );
  } else {
    return (
      <>
        <img
          onClick={() => {
            props.changeRating(props.starSelected);
          }}
          className={c.star}
          src={starOff}
          alt=""
        />
      </>
    );
  }
}

export default Star;
