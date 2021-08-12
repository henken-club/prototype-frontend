import React, {useState} from 'react';

import {UnfollowForm} from './UnfollowForm';

import {Modal} from '~/components/atoms/Modal';
import {ButtonNormalDanger} from '~/components/atoms/Button/CommonButton';
import {useTranslation} from '~/i18n/useTranslation';

export type ViewProps = {
  className?: string;
  onClick(): void;
};
export const View: React.VFC<ViewProps> = ({...props}) => {
  const {LL} = useTranslation();
  return <ButtonNormalDanger {...props} text={LL.common.フォロー中()} />;
};

export const FollowingButton: React.VFC<{
  className?: string;
  id: string;
  update(): void;
}> = ({id, update, ...props}) => {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <View {...props} onClick={() => setConfirm(true)} />
      {confirm && (
        <Modal close={() => setConfirm(false)}>
          <UnfollowForm
            id={id}
            close={() => setConfirm(false)}
            update={update}
          />
        </Modal>
      )}
    </>
  );
};
