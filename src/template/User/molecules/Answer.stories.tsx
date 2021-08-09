import {Meta, Story} from '@storybook/react';
import React from 'react';

import {Answer, AnswerProps} from './Answer';

import * as assets from '~~/.storybook/assets';

export default {
  title: 'templates/User/molecules/Answer',
  component: Answer,
  argTypes: {
    className: {table: {disable: true}},
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Correct: Story<AnswerProps> = (args) => <Answer {...args} />;
Correct.args = {
  text: 'Answer',
  correctness: 'CORRECT',
  prejudice: {
    title: 'Prejudice',
    number: 1,
    userPosted: {
      alias: 'posted',
      displayName: 'Posted',
      picture: assets.icon(),
    },
    userReceived: {
      alias: 'received',
      displayName: 'Received',
      picture: assets.icon(),
    },
  },
};

export const Incorrect: Story<AnswerProps> = (args) => <Answer {...args} />;
Incorrect.args = {
  text: 'Answer',
  correctness: 'INCORRECT',
  prejudice: {
    title: 'Prejudice',
    number: 1,
    userPosted: {
      alias: 'posted',
      displayName: 'Posted',
      picture: assets.icon(),
    },
    userReceived: {
      alias: 'received',
      displayName: 'Received',
      picture: assets.icon(),
    },
  },
};

export const PartlyCorrect: Story<AnswerProps> = (args) => <Answer {...args} />;
PartlyCorrect.args = {
  text: 'Answer',
  correctness: 'PARTLY_CORRECT',
  prejudice: {
    title: 'Prejudice',
    number: 1,
    userPosted: {
      alias: 'posted',
      displayName: 'Posted',
      picture: assets.icon(),
    },
    userReceived: {
      alias: 'received',
      displayName: 'Received',
      picture: assets.icon(),
    },
  },
};
