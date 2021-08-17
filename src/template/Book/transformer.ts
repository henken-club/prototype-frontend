import {BookPageQuery} from '~/graphql/graphql-request';

export type TransformedProps = {
  book: {
    id: string;
    title: string;
    authors: {
      count: number;
      nodes: {
        id: string;
        name: string;
      }[];
    };
  };
};

export const transformer = ({
  findBook: {book},
}: BookPageQuery): TransformedProps | null =>
  book
    ? {
        book: {
          id: book.id,
          title: book.title,
          authors: {
            count: 0,
            nodes: [],
          },
        },
      }
    : null;
