import React from 'react';
import Star from '../Star/Star';

function Rating() {
  return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
}

export default Rating;
