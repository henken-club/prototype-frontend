import clsx from 'clsx';
import React from 'react';

import {useTranslation} from '~/i18n/useTranslation';

export type HeaderViewProps =
  | {
      className?: string;
      query: string;
    }
  | {
      className?: string;
      query: string;
      total: number;
    }
  | {
      className?: string;
      query: string;
      total: number;
      to: number;
    }
  | {
      className?: string;
      query: string;
      total: number;
      from: number;
      to: number;
    };
export const HeaderView: React.VFC<HeaderViewProps> = ({
  className,
  query,
  ...props
}) => {
  const {LL} = useTranslation();
  return (
    <header>
      <h1 className={clsx('text-2xl', 'text-white')}>
        {LL.pageSearchAuthors.検索結果({query})}
      </h1>

      <p className={clsx('text-white')}>
        {'from' in props &&
          LL.pageSearchAuthors._件中_件から_件までを表示中({
            total: props.total,
            from: props.from,
            to: props.to,
          })}
        {!('from' in props) &&
          'to' in props &&
          LL.pageSearchAuthors._件中_件までを表示中({
            total: props.total,
            to: props.to,
          })}
        {!('from' in props) &&
          !('to' in props) &&
          'total' in props &&
          LL.pageSearchAuthors._件見つかりました({
            total: props.total,
          })}
        {!('from' in props) &&
          !('to' in props) &&
          !('total' in props) &&
          LL.pageSearchAuthors.ありませんでした()}
      </p>
    </header>
  );
};

export const Header: React.VFC<{
  className?: string;
  query: string;
  total: number;
  from: number;
  to: number;
}> = ({total, from, to, ...props}) => {
  if (total === 0) return <HeaderView {...props} />;
  if (to === total) return <HeaderView {...props} total={total} />;
  if (from === 1) return <HeaderView {...props} total={total} to={to} />;
  return <HeaderView {...props} total={total} from={from} to={to} />;
};
