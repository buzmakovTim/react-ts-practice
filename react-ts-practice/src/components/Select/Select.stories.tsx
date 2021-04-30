import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Select} from './Select';

export default {
    title: 'Select stories',
    component: Select,
}

let items = ['One', 'Two', 'Three'];

export const TwoElements = () => <Select items={items}/>