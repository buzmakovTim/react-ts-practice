import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OnOff } from './OnOff';

export default {
  title: 'On Off button stories',
  component: OnOff,
} as Meta;

export const off = () => <OnOff />;
