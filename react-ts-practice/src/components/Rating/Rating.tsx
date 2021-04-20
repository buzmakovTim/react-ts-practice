import React, { useState } from 'react';
import Star from '../Star/Star';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

const Rating: React.FC<RatingPropsType> = ({ value }) => {
  // let v = value;
  // let stars = [];

  // for (let i = 0; i <= 4; i++) {
  //   if (v > 0) {
  //     stars.push(<Star selected={true} />);
  //     v--;
  //   } else if (v === 0) {
  //     stars.push(<Star selected={false} />);
  //   }
  // }
  let [valueToChange, setValue] = useState(0);

  function changeRating(starSelected: number) {
    if (valueToChange === starSelected) {
      setValue(starSelected - 1);
    } else {
      setValue(starSelected);
    }
  }

  return (
    <div>
      <Star
        selected={valueToChange > 0}
        starSelected={1}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 1}
        starSelected={2}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 2}
        starSelected={3}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 3}
        starSelected={4}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 4}
        starSelected={5}
        changeRating={changeRating}
      />
    </div>
  );
};

export default Rating;
