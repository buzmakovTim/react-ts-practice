import React from 'react';
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

  return (
    <div>
      <Star selected={value > 0} />
      <Star selected={value > 1} />
      <Star selected={value > 2} />
      <Star selected={value > 3} />
      <Star selected={value > 4} />
    </div>
  );
};

export default Rating;
