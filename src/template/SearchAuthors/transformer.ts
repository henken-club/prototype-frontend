import {GetServerSidePropsContext} from 'next';

import {
  SearchAuthorsPageQuery,
  SearchAuthorsPageQueryVariables,
} from '~/graphql/graphql-request';

const LIMIT_PER_PAGE = 12;

export type ParsedQuery = {query: string; page: number};

export const parseQuery = (
  query: GetServerSidePropsContext['query'],
): ParsedQuery | null => {
  if (!query.query || (query.query && Array.isArray(query.query))) return null;
  if (query.page)
    if (
      Array.isArray(query.page) ||
      Number.isNaN(Number.parseInt(query.page, 10))
    )
      return null;
    else return {query: query.query, page: Number.parseInt(query.page, 10)};
  else return {query: query.query, page: 1};
};

export const getVariables = ({
  query,
  page,
}: ParsedQuery): SearchAuthorsPageQueryVariables => ({
  query,
  skip: (page - 1) * LIMIT_PER_PAGE,
  limit: LIMIT_PER_PAGE,
});

export type TransformedProps = {
  pageInfo: {
    query: string;
    total: number;
    from: number;
    to: number;
    pagination:
      | {prev: null; current: 1; next: null}
      | {prev: null; current: 1; next: 2}
      | {prev: number; current: number; next: number}
      | {prev: number; current: number; next: null};
  };
  result: {
    id: string;
    name: string;
    writesBooks: {
      nodes: {id: string; title: string; cover: string | null}[];
      rest: number;
    };
  }[];
};

export const transformer = (
  {searchAuthors: {nodes, totalCount}}: SearchAuthorsPageQuery,
  {page, query}: ParsedQuery,
): TransformedProps => ({
  pageInfo: {
    query,
    from: (page - 1) * LIMIT_PER_PAGE + 1,
    to: Math.min(page * LIMIT_PER_PAGE, totalCount),
    total: totalCount,
    pagination:
      page === 1
        ? {
            prev: null,
            current: 1,
            next: LIMIT_PER_PAGE * (page - 1) < totalCount ? 2 : null,
          }
        : {
            prev: page - 1,
            current: page,
            next: LIMIT_PER_PAGE * (page - 1) < totalCount ? page + 1 : null,
          },
  },
  result: nodes.map(({id, name, writesBooks}) => ({
    id,
    name,
    writesBooks: {
      nodes: writesBooks.nodes.map((node) => ({
        id: node.id,
        title: node.title,
        cover: node.cover || null,
      })),
      rest: Math.max(0, writesBooks.totalCount - writesBooks.nodes.length),
    },
  })),
});
