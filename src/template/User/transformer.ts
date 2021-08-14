import {UserPageQuery} from '~/graphql/graphql-request';

export type ServerSideProps = {
  user: {
    id: string;
    alias: string;
    displayName: string;
    picture: string;
    followees: {
      nodes: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      }[];
      count: number;
    };
    followers: {
      nodes: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      }[];
      count: number;
    };
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
  findUser: {user},
}: UserPageQuery): ServerSideProps | null =>
  user
    ? {
        user: {
          id: user.id,
          alias: user.alias,
          displayName: user.displayName,
          picture: user.picture,
          followees: {
            nodes: user.followees.nodes.map(({__typename, ...user}) => ({
              ...user,
            })),
            count: user.followees.totalCount,
          },
          followers: {
            nodes: user.followers.nodes.map(({__typename, ...user}) => ({
              ...user,
            })),
            count: user.followers.totalCount,
          },
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
