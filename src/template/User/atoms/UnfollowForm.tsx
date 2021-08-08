import clsx from 'clsx';
import React from 'react';

import {
  ButtonDangerous,
  ButtonNegative,
} from '~/components/atoms/Button/CommonButton';
import {IconWarning} from '~/components/atoms/Icon';
import {useUnfollowMutation} from '~/graphql/apollo';
import {useTranslation} from '~/i18n/useTranslation';

type ViewProps = {
  className?: string;
  onClickYes(): void;
  onClickNo(): void;
};
export const View: React.VFC<ViewProps> = ({
  className,
  onClickYes,
  onClickNo,
}) => {
  const {LL} = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ['bg-gray-800'],
        ['px-4'],
        ['py-4'],
        ['grid'],
        ['grid-cols-2'],
        ['gap-x-4'],
        ['gap-y-4'],
      )}
    >
      <div
        className={clsx('col-span-full', ['flex', 'flex-col', 'items-center'])}
      >
        <IconWarning className={clsx('text-4xl', 'text-red-400')} />
        <p className={clsx('mt-4', ['text-white'])}>
          {LL.pageUser['フォローを解除しますか?']()}
        </p>
      </div>
      <ButtonDangerous
        className={clsx('py-2', 'px-4')}
        onClick={onClickYes}
        text={LL.pageUser.解除する()}
      />
      <ButtonNegative
        className={clsx('py-2', 'px-4')}
        onClick={onClickNo}
        text={LL.pageUser.解除しない()}
      />
    </div>
  );
};

export const UnfollowForm: React.VFC<{
  className?: string;
  alias: string;
  close(): void;
  update(): void;
}> = ({alias, close, update, ...props}) => {
  const [unfollow, {called, loading, data, error}] = useUnfollowMutation({
    variables: {alias},
  });

  return (
    <View
      {...props}
      onClickYes={async () => {
        await unfollow();
        await update();
        await close();
      }}
      onClickNo={() => close()}
    />
  );
};
