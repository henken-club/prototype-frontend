import clsx from 'clsx';
import React from 'react';

import {FollowButton} from '../atoms/FollowButton';
import {FollowingButton} from '../atoms/FollowingButton';

import {useOthersUserPageQuery} from '~/graphql/apollo';

export type ViewProps = {
  className?: string;
  id: string;
};
export const OthersPage: React.VFC<ViewProps> = ({className, id}) => {
  const {loading, data, refetch} = useOthersUserPageQuery({
    variables: {id},
  });

  if (loading || !data) return <></>;
  return (
    <div className={clsx(className, ['flex'], ['items-center'])}>
      <div className={clsx('flex-grow')}>
        {!data.viewer.isFollowing && (
          <FollowButton
            className={clsx('w-full', 'py-1')}
            id={id}
            update={refetch}
          />
        )}
        {data.viewer.isFollowing && (
          <FollowingButton
            className={clsx('w-full', 'py-1')}
            id={id}
            update={refetch}
          />
        )}
      </div>
    </div>
  );
};
