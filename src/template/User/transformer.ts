import {UserPageQuery} from '~/graphql/graphql-request';

export type ServerSideProps = {
  user: {
    id: string;
    alias: string;
    displayName: string;
    picture: string;
    following: {
      id: string;
      alias: string;
      displayName: string;
      picture: string;
    }[];
    followingCount: number;
    followers: {
      id: string;
      alias: string;
      displayName: string;
      picture: string;
    }[];
    followersCount: number;
    postedPrejudices: {
      id: string;
      title: string;
      number: number;
      userReceived: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      };
      answer: {id: string} | null;
    }[];
    receivedPrejudices: {
      id: string;
      title: string;
      number: number;
      userPosted: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      };
      answer: {id: string} | null;
    }[];
    postedAnswers: {
      id: string;
      text: string | null;
      correctness: 'CORRECT' | 'PARTLY_CORRECT' | 'INCORRECT';
      prejudice: {
        title: string;
        number: number;
        userPosted: {
          id: string;
          alias: string;
          displayName: string;
          picture: string;
        };
        userReceived: {
          id: string;
          alias: string;
          displayName: string;
          picture: string;
        };
      };
    }[];
  };
};

export const transformer = ({
  getUser: {user},
}: UserPageQuery): ServerSideProps | null =>
  user
    ? {
        user: {
          id: user.id,
          alias: user.alias,
          displayName: user.displayName,
          picture: user.picture,
          following: user.followees.nodes.map(({__typename, ...user}) => ({
            ...user,
          })),
          followingCount: user.followees.totalCount,
          followers: user.followers.nodes.map(({__typename, ...user}) => ({
            ...user,
          })),
          followersCount: user.followers.totalCount,
          postedPrejudices: user.postedPrejudices.nodes.map(
            ({__typename, id, title, number, received, answer}) => ({
              id,
              title,
              number,
              userReceived: {...received},
              answer: answer ? {id: answer.id} : null,
            }),
          ),
          receivedPrejudices: user.receivedPrejudices.nodes.map(
            ({__typename, id, title, number, posted, answer}) => ({
              id,
              title,
              number,
              userPosted: {...posted},
              answer: answer ? {...answer} : null,
            }),
          ),
          postedAnswers: user.postedAnswers.nodes.map(
            ({__typename, id, text, correctness, prejudice}) => ({
              id,
              text: text || null,
              correctness,
              prejudice: {
                title: prejudice.title,
                number: prejudice.number,
                userPosted: {...prejudice.posted},
                userReceived: {...prejudice.received},
              },
            }),
          ),
        },
      }
    : null;
