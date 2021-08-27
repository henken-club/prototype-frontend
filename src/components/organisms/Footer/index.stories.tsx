import {Meta, Story} from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import {View, ViewProps} from './index';

export default {
  title: 'organisms/Footer',
  component: View,
  argTypes: {
    className: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Primary: Story<ViewProps> = (args) => (
  <View {...args} className={clsx('w-full')} />
);
Primary.args = {};
