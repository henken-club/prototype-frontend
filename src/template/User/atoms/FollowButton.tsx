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
  pageAlias: string;
  update(): void;
}> = ({pageAlias, update: refetch, ...props}) => {
  const [follow, {called, loading, data, error}] = useFollowMutation({
    variables: {alias: pageAlias},
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
