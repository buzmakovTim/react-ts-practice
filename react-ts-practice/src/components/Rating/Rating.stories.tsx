import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Rating } from './Rating';

export default {
  title: 'Rating stories',
  component: Rating,
} as Meta;

export const EmptyRating = () => <Rating value={0} />;
export const Rating1 = () => <Rating value={1} />;
export const Rating2 = () => <Rating value={2} />;
export const Rating3 = () => <Rating value={3} />;
export const Rating4 = () => <Rating value={4} />;
export const Rating5 = () => <Rating value={5} />;
