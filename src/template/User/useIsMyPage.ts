import {useMemo} from 'react';
import {useRecoilValue} from 'recoil';

import {viewerState} from '~/states/Viewer';

export const useIsMyPage = (id: string) => {
  const viewer = useRecoilValue(viewerState);
  return useMemo(() => viewer?.id === id, [viewer, id]);
};
