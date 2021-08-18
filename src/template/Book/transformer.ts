import {BookPageQuery} from '~/graphql/graphql-request';

export type TransformedProps = {
  book: {
    id: string;
    title: string;
    cover: string | null;
    authors: {
      id: string;
      name: string;
    }[];
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
          cover: book.cover || null,
          authors: book.authors.nodes.map(({id, name}) => ({
            id,
            name,
          })),
        },
      }
    : null;
