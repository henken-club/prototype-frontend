import clsx from 'clsx';
import React from 'react';

import {FollowButton} from '../atoms/FollowButton';
import {FollowingButton} from '../atoms/FollowingButton';

import {useOthersUserPageQuery} from '~/graphql/apollo';

export type ViewProps = {
  className?: string;
  alias: string;
};
export const OthersPage: React.VFC<ViewProps> = ({className, alias}) => {
  const {loading, data, refetch} = useOthersUserPageQuery({
    variables: {alias},
  });

  if (loading || !data) return <></>;
  return (
    <div className={clsx(className, ['flex'], ['items-center'])}>
      <div className={clsx('flex-grow')}>
        {!data.viewer.isFollowing && (
          <FollowButton
            className={clsx('w-full', 'py-1')}
            pageAlias={alias}
            update={refetch}
          />
        )}
        {data.viewer.isFollowing && (
          <FollowingButton
            className={clsx('w-full', 'py-1')}
            pageAlias={alias}
            update={refetch}
          />
        )}
      </div>
    </div>
  );
};
