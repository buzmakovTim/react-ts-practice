import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Select} from './Select';

export default {
    title: 'Select stories',
    component: Select,
}

let items = [{value: 1, title: 'One'}, {value: 2, title: 'Two'}, {value: 3, title: 'Three'}];

export const TwoElements = () => <Select items={items}/>