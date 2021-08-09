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
    alias: 'alias',
    displayName: 'DisplayName',
    picture: assets.icon(0),
    followers: [
      {
        alias: 'follower1',
        displayName: 'Follower1',
        picture: assets.icon(1),
      },
      {
        alias: 'follower2',
        displayName: 'Follower2',
        picture: assets.icon(2),
      },
    ],
    followersCount: 4,
    following: [
      {
        alias: 'following1',
        displayName: 'Following1',
        picture: assets.icon(1),
      },
      {
        alias: 'following1',
        displayName: 'Following1',
        picture: assets.icon(2),
      },
    ],
    followingCount: 4,
    postedPrejudices: [
      {
        id: 'post_prejudice1',
        title: 'Prejudice1',
        number: 1,
        answer: {id: 'answer1'},
        userReceived: {
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
            alias: 'user1',
            displayName: 'User1',
            picture: assets.icon(1),
          },
          userReceived: {
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
            alias: 'user1',
            displayName: 'User1',
            picture: assets.icon(1),
          },
          userReceived: {
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
            alias: 'user1',
            displayName: 'User1',
            picture: assets.icon(1),
          },
          userReceived: {
            alias: 'user4',
            displayName: 'User4',
            picture: assets.icon(4),
          },
        },
      },
    ],
  },
};
