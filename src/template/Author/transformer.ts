import {AuthorPageQuery} from '~/graphql/graphql-request';

export type ServerSideProps = {
  author: {
    id: string;
    name: string;
  };
};

export const transformer = ({
  findAuthor: {author},
}: AuthorPageQuery): ServerSideProps | null =>
  author
    ? {
        author: {
          id: author.id,
          name: author.name,
        },
      }
    : null;
