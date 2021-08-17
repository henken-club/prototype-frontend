import {AuthorPageQuery} from '~/graphql/graphql-request';

export type TransformedProps = {
  author: {
    id: string;
    name: string;
    writesBooks: {
      count: number;
      nodes: {
        id: string;
        title: string;
        cover: string | null;
      }[];
    };
  };
};

export const transformer = ({
  findAuthor: {author},
}: AuthorPageQuery): TransformedProps | null =>
  author
    ? {
        author: {
          id: author.id,
          name: author.name,
          writesBooks: {
            count: author.writesBooks.totalCount,
            nodes: author.writesBooks.nodes.map(({id, title, cover}) => ({
              id,
              title,
              cover: cover || null,
            })),
          },
        },
      }
    : null;
