import {Meta, Story} from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import {View, ViewProps} from './index';

export default {
  title: 'organisms/HeaderNav',
  component: View,
  argTypes: {
    className: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const NotLogin: Story<ViewProps> = (args) => (
  <View {...args} className={clsx('w-full')} />
);
NotLogin.args = {
  login: false,
};

export const Loading: Story<ViewProps> = (args) => (
  <View {...args} className={clsx('w-full')} />
);
Loading.args = {
  login: true,
  viewer: null,
};

export const LoggedIn: Story<ViewProps> = (args) => (
  <View {...args} className={clsx('w-full')} />
);
LoggedIn.args = {
  login: true,
  viewer: {
    alias: 'alias',
    displayName: 'DisplayName',
  },
};
