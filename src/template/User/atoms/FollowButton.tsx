import React from 'react';

import {ButtonNormal} from '~/components/atoms/Button/CommonButton';
import {useFollowMutation} from '~/graphql/apollo';
import {useTranslation} from '~/i18n/useTranslation';

export type ViewProps = {className?: string; onClick(): void};
export const View: React.VFC<ViewProps> = ({...props}) => {
  const {LL} = useTranslation();
  return <ButtonNormal {...props} text={LL.common.フォローする()} />;
};

export const FollowButton: React.VFC<{
  className?: string;
  id: string;
  update(): void;
}> = ({id, update: refetch, ...props}) => {
  const [follow, {called, loading, data, error}] = useFollowMutation({
    variables: {id},
  });

  return (
    <View
      {...props}
      onClick={async () => {
        await follow();
        await refetch();
      }}
    />
  );
};
