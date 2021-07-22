import {Meta, Story} from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import {View, ViewProps} from './index';

export default {
  title: 'templates/Loading',
  component: View,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ViewProps> = (args) => (
  <View {...args} className={clsx('w-full')} />
);
Primary.args = {};
