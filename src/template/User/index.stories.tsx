import {Meta, Story} from '@storybook/react';
import React from 'react';
import {RecoilRoot} from 'recoil';

import {View, ViewProps} from '.';
import * as assets from '~~/.storybook/assets';
import {viewerState} from '~/states/Viewer';

export default {
  title: 'templates/User',
  component: View,
  argTypes: {
    className: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const PersonalPage: Story<ViewProps> = (args) => (
  <RecoilRoot
    initializeState={(snap) => {
      snap.set(viewerState, {
        id: 'user1',
        alias: 'alias',
        displayName: 'DisplayName',
        picture: assets.icon(),
      });
    }}
  >
    <View {...args} />
  </RecoilRoot>
);
PersonalPage.args = {
  user: {
    id: 'user1',
    alias: 'alias',
    displayName: 'DisplayName',
    picture: assets.icon(0),
    followers: {
      nodes: [
        {
          id: 'follower1',
          alias: 'follower1',
          displayName: 'Follower1',
          picture: assets.icon(1),
        },
        {
          id: 'follower2',
          alias: 'follower2',
          displayName: 'Follower2',
          picture: assets.icon(2),
        },
      ],
      count: 2,
    },
    followees: {
      nodes: [
        {
          id: 'following1',
          alias: 'following1',
          displayName: 'Following1',
          picture: assets.icon(1),
        },
        {
          id: 'following1',
          alias: 'following1',
          displayName: 'Following1',
          picture: assets.icon(2),
        },
      ],
      count: 2,
    },
    postedPrejudices: [
      {
        id: 'post_prejudice1',
        title: 'Prejudice1',
        number: 1,
        answer: {id: 'answer1'},
        userReceived: {
          id: 'user2',
          alias: 'user2',
          displayName: 'User2',
          picture: assets.icon(2),
        },
      },
      {
        id: 'post_prejudice2',
        title: 'Prejudice2',
        number: 1,
        answer: null,
        userReceived: {
          id: 'user3',
          alias: 'user3',
          displayName: 'User3',
          picture: assets.icon(3),
        },
      },
    ],
    receivedPrejudices: [
      {
        id: 'post_prejudice1',
        title: 'Prejudice1',
        number: 1,
        answer: {id: 'answer1'},
        userPosted: {
          id: 'user2',
          alias: 'user2',
          displayName: 'User2',
          picture: assets.icon(2),
        },
      },
      {
        id: 'post_prejudice2',
        title: 'Prejudice2',
        number: 1,
        answer: null,
        userPosted: {
          id: 'user3',
          alias: 'user3',
          displayName: 'User3',
          picture: assets.icon(3),
        },
      },
    ],
    postedAnswers: [
      {
        id: 'answer1',
        text: 'right',
        correctness: 'CORRECT',
        prejudice: {
          title: 'Prejudice1',
          number: 1,
          userPosted: {
            id: 'user1',
            alias: 'user1',
            displayName: 'User1',
            picture: assets.icon(1),
          },
          userReceived: {
            id: 'user2',
            alias: 'user2',
            displayName: 'User2',
            picture: assets.icon(2),
          },
        },
      },
      {
        id: 'answer2',
        text: 'wrong',
        correctness: 'INCORRECT',
        prejudice: {
          title: 'Prejudice2',
          number: 1,
          userPosted: {
            id: 'user1',
            alias: 'user1',
            displayName: 'User1',
            picture: assets.icon(1),
          },
          userReceived: {
            id: 'user3',
            alias: 'user3',
            displayName: 'User3',
            picture: assets.icon(3),
          },
        },
      },
      {
        id: 'answer3',
        text: 'almost right',
        correctness: 'PARTLY_CORRECT',
        prejudice: {
          title: 'Prejudice3',
          number: 1,
          userPosted: {
            id: 'user1',
            alias: 'user1',
            displayName: 'User1',
            picture: assets.icon(1),
          },
          userReceived: {
            id: 'user4',
            alias: 'user4',
            displayName: 'User4',
            picture: assets.icon(4),
          },
        },
      },
    ],
  },
};
